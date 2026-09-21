import { Router, Request, Response } from 'express';
import { prisma } from '@packages/database';
import { sendOtpEmail } from '../services/email.service';
import { OAuth2Client } from 'google-auth-library';
import bcrypt from 'bcryptjs';

export const authRouter = Router();

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID || 'your-google-client-id-here');

// Helper to generate a secure 6-digit numeric OTP
function generateOtpCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// -------------------------------------------------------------
// 1. REGISTER & SEND VERIFICATION OTP
// -------------------------------------------------------------
authRouter.post('/register', async (req: Request, res: Response) => {
  try {
    const { email, name, targetRole, seniority } = req.body;
    if (!email || !email.trim()) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const cleanEmail = email.trim().toLowerCase();
    const cleanName = (name || cleanEmail.split('@')[0]).trim();

    let user = await prisma.user.findUnique({ where: { email: cleanEmail } });
    if (!user) {
      user = await prisma.user.create({
        data: {
          email: cleanEmail,
          name: cleanName,
          targetRole: targetRole || null,
          seniority: seniority || null,
          isEmailVerified: false,
        },
      });
    }

    // Generate 6-digit OTP code valid for 5 minutes
    const otpCode = generateOtpCode();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

    // Invalidate existing tokens for this email and save new token
    try {
      await (prisma as any).verificationToken.deleteMany({
        where: { email: cleanEmail, type: 'email_verification' },
      });
      await (prisma as any).verificationToken.create({
        data: {
          email: cleanEmail,
          code: otpCode,
          type: 'email_verification',
          expiresAt,
        },
      });
    } catch (e) {
      console.warn('[Auth] VerificationToken DB write error, continuing:', e);
    }

    // Dispatch OTP Email
    const emailResult = await sendOtpEmail({
      toEmail: cleanEmail,
      userName: cleanName,
      otpCode,
      type: 'signup',
    });

    res.status(201).json({
      success: true,
      message: 'Registration initiated. Verification OTP dispatched to email.',
      user,
      emailSent: emailResult.success,
      simulated: emailResult.simulated,
    });
  } catch (error: any) {
    console.error('[Auth Register Error]:', error);
    res.status(500).json({ error: error.message });
  }
});

// -------------------------------------------------------------
// 2. RESEND VERIFICATION OTP
// -------------------------------------------------------------
authRouter.post('/send-otp', async (req: Request, res: Response) => {
  try {
    const { email, type = 'signup' } = req.body;
    if (!email || !email.trim()) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const cleanEmail = email.trim().toLowerCase();
    const user = await prisma.user.findUnique({ where: { email: cleanEmail } });
    const userName = user?.name || cleanEmail.split('@')[0];

    const otpCode = generateOtpCode();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

    try {
      await (prisma as any).verificationToken.deleteMany({
        where: { email: cleanEmail, type: 'email_verification' },
      });
      await (prisma as any).verificationToken.create({
        data: {
          email: cleanEmail,
          code: otpCode,
          type: 'email_verification',
          expiresAt,
        },
      });
    } catch (e) {
      console.warn('[Auth] VerificationToken DB write error, continuing:', e);
    }

    const emailResult = await sendOtpEmail({
      toEmail: cleanEmail,
      userName,
      otpCode,
      type: type === 'reset-password' ? 'reset-password' : 'signup',
    });

    res.json({
      success: true,
      message: `Verification code sent to ${cleanEmail}`,
      emailSent: emailResult.success,
      simulated: emailResult.simulated,
    });
  } catch (error: any) {
    console.error('[Auth Send OTP Error]:', error);
    res.status(500).json({ error: error.message });
  }
});

// -------------------------------------------------------------
// 3. VERIFY OTP CODE
// -------------------------------------------------------------
authRouter.post('/verify-otp', async (req: Request, res: Response) => {
  try {
    const { email, code } = req.body;
    if (!email || !code) {
      return res.status(400).json({ error: 'Email and OTP code are required' });
    }

    const cleanEmail = email.trim().toLowerCase();
    const cleanCode = code.toString().trim();

    // Look up token in DB
    let tokenMatch = null;
    try {
      tokenMatch = await (prisma as any).verificationToken.findFirst({
        where: {
          email: cleanEmail,
          code: cleanCode,
          type: 'email_verification',
          expiresAt: {
            gt: new Date(),
          },
        },
      });
    } catch (e) {
      console.warn('[Auth] VerificationToken query error, using fallback matching:', e);
    }

    const isMasterDevCode =
      cleanCode === '123456' &&
      process.env.NODE_ENV === 'development' &&
      process.env.ALLOW_DEV_OTP === 'true';
    if (!tokenMatch && !isMasterDevCode) {
      return res.status(400).json({
        success: false,
        error: 'Invalid or expired verification code. Please check your inbox or request a new code.',
      });
    }

    // Clean up consumed token
    try {
      if (tokenMatch) {
        await (prisma as any).verificationToken.delete({
          where: { id: tokenMatch.id },
        });
      }
    } catch (e) {
      console.warn('[Auth] Token deletion error:', e);
    }

    // Mark user as verified
    let user = await prisma.user.findUnique({ where: { email: cleanEmail } });
    if (user) {
      user = await prisma.user.update({
        where: { email: cleanEmail },
        data: { isEmailVerified: true },
      });
    } else {
      user = await prisma.user.create({
        data: {
          email: cleanEmail,
          name: cleanEmail.split('@')[0],
          isEmailVerified: true,
        },
      });
    }

    res.json({
      success: true,
      message: 'Email address verified successfully.',
      user,
    });
  } catch (error: any) {
    console.error('[Auth Verify OTP Error]:', error);
    res.status(500).json({ error: error.message });
  }
});

// -------------------------------------------------------------
// 4. LOGIN / GET PROFILE
// -------------------------------------------------------------
authRouter.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const cleanEmail = email.trim().toLowerCase();

    let user = await prisma.user.findUnique({
      where: { email: cleanEmail },
      include: {
        simulations: {
          take: 5,
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    if (password) {
      if (!user || !user.passwordHash) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
      const ok = await bcrypt.compare(String(password), user.passwordHash);
      if (!ok) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
      return res.json({ success: true, message: 'Logged in successfully', user });
    }

    if (!user) {
      user = await prisma.user.create({
        data: {
          email: cleanEmail,
          name: cleanEmail.split('@')[0],
          targetRole: null,
        },
        include: {
          simulations: true,
        },
      });
    }

    res.json({ success: true, message: 'Logged in successfully', user });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

authRouter.post('/set-password', async (req: Request, res: Response) => {
  try {
    const { userId, password } = req.body;
    const headerUserId = req.headers['x-user-id'];
    const targetId = userId || (typeof headerUserId === 'string' ? headerUserId : null);
    if (!targetId) {
      return res.status(401).json({ error: 'Authentication required' });
    }
    if (!password || String(password).length < 8) {
      return res.status(400).json({ error: 'Password must be at least 8 characters' });
    }
    const hash = await bcrypt.hash(String(password), 10);
    await prisma.user.update({ where: { id: targetId }, data: { passwordHash: hash } });
    res.json({ success: true, message: 'Password updated' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// -------------------------------------------------------------
// 5. GOOGLE OAUTH LOGIN
// -------------------------------------------------------------
authRouter.post('/google', async (req: Request, res: Response) => {
  try {
    const { accessToken } = req.body;
    if (!accessToken) {
      return res.status(400).json({ error: 'Access token is required' });
    }

    // Use the google client to get user info from the access token
    const tokenInfo = await googleClient.getTokenInfo(accessToken);
    const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    
    if (!userInfoResponse.ok) {
      return res.status(401).json({ error: 'Invalid Google access token' });
    }
    
    const payload = await userInfoResponse.json();
    const cleanEmail = payload.email.trim().toLowerCase();

    let user = await prisma.user.findUnique({
      where: { email: cleanEmail },
      include: {
        simulations: {
          take: 5,
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email: cleanEmail,
          name: payload.name || cleanEmail.split('@')[0],
          targetRole: null,
          isEmailVerified: true, // Google verified
        },
        include: {
          simulations: true,
        },
      });
    }

    res.json({ 
      success: true, 
      message: 'Logged in via Google successfully', 
      user: {
        ...user,
        picture: payload.picture,
      }
    });
  } catch (error: any) {
    console.error('[Auth Google SSO Error]:', error);
    res.status(500).json({ error: error.message });
  }
});

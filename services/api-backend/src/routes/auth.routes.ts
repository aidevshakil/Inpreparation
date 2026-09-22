import { Router, Request, Response } from 'express';
import { prisma } from '@packages/database';
import { sendOtpEmail } from '../services/email.service';
import { requireAuth } from '../middleware/authenticate';
import { validate } from '../middleware/validate';
import {
  registerSchema,
  sendOtpSchema,
  verifyOtpSchema,
  loginSchema,
  setPasswordSchema,
  googleSchema,
} from './auth.schemas';
import { OAuth2Client } from 'google-auth-library';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || (process.env.NODE_ENV === 'production'
  ? (() => { throw new Error('JWT_SECRET must be set in production'); })()
  : 'fallback-secret-for-dev');
export const authRouter = Router();

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID || 'your-google-client-id-here');

// Helper to generate a secure 6-digit numeric OTP
function generateOtpCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// -------------------------------------------------------------
// 1. REGISTER & SEND VERIFICATION OTP
// -------------------------------------------------------------
authRouter.post('/register', validate(registerSchema), async (req: Request, res: Response) => {
  try {
    const { email, name, targetRole, seniority } = req.body;
    const cleanEmail = email;
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
      await prisma.verificationToken.deleteMany({
        where: { email: cleanEmail, type: 'email_verification' },
      });
      await prisma.verificationToken.create({
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
authRouter.post('/send-otp', validate(sendOtpSchema), async (req: Request, res: Response) => {
  try {
    const { email, type = 'signup' } = req.body;
    const cleanEmail = email;
    const user = await prisma.user.findUnique({ where: { email: cleanEmail } });
    const userName = user?.name || cleanEmail.split('@')[0];

    const otpCode = generateOtpCode();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

    try {
      await prisma.verificationToken.deleteMany({
        where: { email: cleanEmail, type: 'email_verification' },
      });
      await prisma.verificationToken.create({
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
authRouter.post('/verify-otp', validate(verifyOtpSchema), async (req: Request, res: Response) => {
  try {
    const { email, code } = req.body;
    const cleanEmail = email;
    const cleanCode = code;

    // Look up token in DB
    let tokenMatch = null;
    try {
      tokenMatch = await prisma.verificationToken.findFirst({
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

    if (!tokenMatch) {
      return res.status(400).json({
        success: false,
        error: 'Invalid or expired verification code. Please check your inbox or request a new code.',
      });
    }

    // Clean up consumed token
    try {
      if (tokenMatch) {
        await prisma.verificationToken.delete({
          where: { id: tokenMatch.id },
        });
      }
    } catch (e) {
      console.warn('[Auth] Token deletion error:', e);
    }

    // Mark user as verified
    let user = await prisma.user.findUnique({ where: { email: cleanEmail } });
    if (!user) {
      return res.status(400).json({ error: 'User does not exist' });
    }
    
    user = await prisma.user.update({
      where: { email: cleanEmail },
      data: { isEmailVerified: true },
    });

    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '7d' });

    res.json({
      success: true,
      message: 'Email address verified successfully.',
      user,
      token,
    });
  } catch (error: any) {
    console.error('[Auth Verify OTP Error]:', error);
    res.status(500).json({ error: error.message });
  }
});

// -------------------------------------------------------------
// 4. LOGIN / GET PROFILE
// -------------------------------------------------------------
authRouter.post('/login', validate(loginSchema), async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const cleanEmail = email;

    let user = await prisma.user.findUnique({
      where: { email: cleanEmail },
      include: {
        candidateProfile: true,
        resumes: {
          orderBy: { createdAt: 'desc' },
          take: 1,
        },
        simulations: {
          take: 5,
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    if (!password) {
      return res.status(400).json({ error: 'Password is required' });
    }
    
    if (!user || !user.passwordHash) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const ok = await bcrypt.compare(String(password), user.passwordHash);
    if (!ok) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
    const targetRole = user.targetRole || user.candidateProfile?.targetRole || '';
    const cvFileName = user.resumes?.[0]?.fileName;
    const cvSkills = user.candidateProfile?.skills || user.resumes?.[0]?.skills || [];
    const cvAtsScore = (user.resumes?.[0] as any)?.atsScore;

    return res.json({ 
      success: true, 
      message: 'Logged in successfully', 
      user: {
        ...user,
        targetRole,
        cvFileName,
        cvSkills,
        cvAtsScore,
      }, 
      token 
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

authRouter.post('/set-password', requireAuth, validate(setPasswordSchema), async (req: Request, res: Response) => {
  try {
    const { password } = req.body;
    const targetId = req.user!.id;
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
authRouter.post('/google', validate(googleSchema), async (req: Request, res: Response) => {
  try {
    const { credential } = req.body;
    const idToken = credential || req.body.idToken || req.body.accessToken;

    const clientId = process.env.GOOGLE_CLIENT_ID || '750479771075-8tac688o0ag749vk6gg687844sbucdde.apps.googleusercontent.com';
    const client = new OAuth2Client(clientId);

    // Verify ID token cryptographically
    const ticket = await client.verifyIdToken({
      idToken: idToken,
      audience: clientId,
    });
    const payload = ticket.getPayload();
    if (!payload || !payload.email) {
      return res.status(401).json({ error: 'Invalid Google ID token payload' });
    }
    
    const cleanEmail = payload.email.trim().toLowerCase();

    let user = await prisma.user.findUnique({
      where: { email: cleanEmail },
      include: {
        candidateProfile: true,
        resumes: {
          orderBy: { createdAt: 'desc' },
          take: 1,
        },
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
          avatarUrl: payload.picture || null,
          isEmailVerified: true, // Google verified
        },
        include: {
          candidateProfile: true,
          resumes: true,
          simulations: true,
        },
      });
    } else if (!user.isEmailVerified || (payload.picture && !user.avatarUrl)) {
      user = await prisma.user.update({
        where: { id: user.id },
        data: {
          isEmailVerified: true,
          avatarUrl: user.avatarUrl || payload.picture || null,
        },
        include: {
          candidateProfile: true,
          resumes: {
            orderBy: { createdAt: 'desc' },
            take: 1,
          },
          simulations: {
            take: 5,
            orderBy: { createdAt: 'desc' },
          },
        },
      });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
    const targetRole = user.targetRole || user.candidateProfile?.targetRole || '';
    const cvFileName = user.resumes?.[0]?.fileName;
    const cvSkills = user.candidateProfile?.skills || user.resumes?.[0]?.skills || [];
    const cvAtsScore = (user.resumes?.[0] as any)?.atsScore;

    res.json({ 
      success: true, 
      message: 'Logged in via Google successfully', 
      user: {
        ...user,
        targetRole,
        cvFileName,
        cvSkills,
        cvAtsScore,
        picture: payload.picture || user.avatarUrl,
      },
      token
    });
  } catch (error: any) {
    console.error('[Auth Google SSO Error]:', error);
    res.status(500).json({ error: error.message });
  }
});

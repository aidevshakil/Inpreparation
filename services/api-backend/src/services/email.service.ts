import path from 'path';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import type { Transporter } from 'nodemailer';

function loadEnvironmentVariables() {
  // Always load latest .env from root and local dir
  dotenv.config({ path: path.resolve(process.cwd(), '.env'), override: true });
  dotenv.config({ path: path.resolve(__dirname, '../../../.env'), override: true });
  dotenv.config({ path: path.resolve(__dirname, '../../.env'), override: true });
}

function getTransporter(): Transporter {
  loadEnvironmentVariables();

  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (user && pass) {
    console.log(`[EmailService] Creating live SMTP transporter for ${user} via ${host}:${port}...`);
    return nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    });
  }

  // Fallback dev transporter: log-only mode
  console.log('[EmailService] Warning: SMTP credentials not detected. Running in local test mode.');
  return nodemailer.createTransport({
    streamTransport: true,
    newline: 'windows',
    buffer: true,
  });
}

export interface SendOtpEmailOptions {
  toEmail: string;
  userName?: string;
  otpCode: string;
  type?: 'signup' | 'login' | 'reset-password';
}

export async function sendOtpEmail({
  toEmail,
  userName = 'Candidate',
  otpCode,
  type = 'signup',
}: SendOtpEmailOptions): Promise<{ success: boolean; messageId?: string; simulated?: boolean }> {
  try {
    loadEnvironmentVariables();
    const fromAddress = process.env.EMAIL_FROM || '"Inprep AI" <no-reply@inprep.ai>';
    const isLiveSmtp = Boolean(process.env.SMTP_USER && process.env.SMTP_PASS);

    const subject =
      type === 'reset-password'
        ? `🔐 [Inprep AI] Password Reset Code: ${otpCode}`
        : `⚡ [Inprep AI] Verify Your Email Address: ${otpCode}`;

    const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Inprep AI Verification</title>
</head>
<body style="margin: 0; padding: 0; background-color: #07090e; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f8fafc;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #07090e; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 560px; background-color: #0d121f; border-radius: 18px; border: 1px solid rgba(255, 255, 255, 0.1); overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.5);">
          
          <!-- Header Branding -->
          <tr>
            <td style="padding: 32px 36px 20px 36px; border-bottom: 1px solid rgba(255, 255, 255, 0.06); text-align: center;">
              <div style="display: inline-block; padding: 6px 16px; border-radius: 9999px; background: rgba(99, 102, 241, 0.15); border: 1px solid rgba(99, 102, 241, 0.3); color: #818cf8; font-size: 12px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 12px;">
                INPREP AI IDENTITY GATEWAY
              </div>
              <h1 style="margin: 0; font-size: 24px; font-weight: 800; color: #ffffff; letter-spacing: -0.02em;">
                ${type === 'reset-password' ? 'Reset Your Password' : 'Verify Your Email Address'}
              </h1>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 32px 36px;">
              <p style="margin: 0 0 16px 0; font-size: 15px; line-height: 1.6; color: #cbd5e1;">
                Hello <strong>${userName}</strong>,
              </p>
              <p style="margin: 0 0 24px 0; font-size: 14px; line-height: 1.6; color: #94a3b8;">
                ${
                  type === 'reset-password'
                    ? 'Use the 6-digit code below to securely reset your Inprep AI account password.'
                    : 'Thank you for creating your Inprep AI candidate account. Enter the 6-digit verification code below to activate your candidate cockpit and begin AI interview simulations.'
                }
              </p>

              <!-- OTP Code Display Card -->
              <div style="background: rgba(99, 102, 241, 0.08); border: 1px solid rgba(99, 102, 241, 0.35); border-radius: 14px; padding: 24px; text-align: center; margin: 28px 0;">
                <div style="font-size: 11px; font-weight: 700; color: #818cf8; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">
                  YOUR 6-DIGIT VERIFICATION CODE
                </div>
                <div style="font-size: 38px; font-weight: 900; color: #ffffff; letter-spacing: 8px; font-family: monospace;">
                  ${otpCode}
                </div>
                <div style="font-size: 12px; color: #64748b; margin-top: 10px;">
                  ⏳ This code will expire in <strong>15 minutes</strong>.
                </div>
              </div>

              <!-- Security Notice -->
              <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 10px; padding: 14px 16px; margin-top: 24px;">
                <p style="margin: 0; font-size: 12px; color: #64748b; line-height: 1.5;">
                  🔒 <strong>Security Warning:</strong> If you did not initiate this request, please ignore this email or contact support. Never share your verification code with anyone.
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 36px; background-color: rgba(0, 0, 0, 0.3); border-top: 1px solid rgba(255, 255, 255, 0.06); text-align: center;">
              <p style="margin: 0 0 6px 0; font-size: 12px; color: #64748b;">
                © 2026 Inprep AI. All rights reserved. Candidate Readiness Intelligence.
              </p>
              <p style="margin: 0; font-size: 11px; color: #475569;">
                Automated System Notification • Please do not reply directly to this email.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    const transport = getTransporter();
    const info = await transport.sendMail({
      from: fromAddress,
      to: toEmail,
      subject,
      text: `Your Inprep AI verification code is: ${otpCode}. Valid for 15 minutes.`,
      html: htmlBody,
    });

    console.log(`\n======================================================`);
    console.log(`📧 [EMAIL DISPATCHED] To: ${toEmail}`);
    console.log(`🔑 [OTP CODE]: ${otpCode}`);
    console.log(`📡 [MODE]: ${isLiveSmtp ? 'Live SMTP' : 'Local Console / Test Mode'}`);
    console.log(`======================================================\n`);

    return {
      success: true,
      messageId: info.messageId,
      simulated: !isLiveSmtp,
    };
  } catch (error: any) {
    console.error('[EmailService] Error sending email:', error);
    // Still log OTP in dev mode so developer is never blocked
    console.log(`\n[FALLBACK OTP CODE FOR ${toEmail}]: ${otpCode}\n`);
    return {
      success: false,
      simulated: true,
    };
  }
}

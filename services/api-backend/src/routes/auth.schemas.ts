import { z } from 'zod';

const email = z.string().trim().toLowerCase().email('Invalid email address').max(320);
const otp = z.string().trim().regex(/^\d{6}$/, 'OTP must be a 6-digit code');
const password = z.string().min(8, 'Password must be at least 8 characters').max(200);

export const registerSchema = z.object({
  email,
  name: z.string().trim().min(1).max(120).optional(),
  targetRole: z.string().trim().max(200).optional(),
  seniority: z.string().trim().max(80).optional(),
});

export const sendOtpSchema = z.object({
  email,
  type: z.enum(['signup', 'reset-password']).optional(),
});

export const verifyOtpSchema = z.object({
  email,
  code: otp,
});

export const loginSchema = z.object({
  email,
  password: z.string().min(1).max(200),
});

export const setPasswordSchema = z.object({
  password,
});

export const googleSchema = z.object({
  credential: z.string().min(10).optional(),
  idToken: z.string().min(10).optional(),
  accessToken: z.string().min(10).optional(),
}).refine((v) => v.credential || v.idToken || v.accessToken, {
  message: 'Google ID token is required',
});

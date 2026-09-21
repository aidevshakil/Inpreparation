import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || (process.env.NODE_ENV === 'production'
  ? (() => { throw new Error('JWT_SECRET must be set in production'); })()
  : 'fallback-secret-for-dev');

export interface AuthPayload {
  id: string;
  role: string;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      user?: AuthPayload;
    }
  }
}

export function signAuthToken(payload: AuthPayload, expiresIn: string = '7d'): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn } as jwt.SignOptions);
}

// Populates req.user from Bearer token if present. Does not reject unauthenticated requests.
export function attachUser(req: Request, _res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) return next();
  const token = header.slice('Bearer '.length).trim();
  if (!token) return next();
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as AuthPayload;
    if (decoded && decoded.id && decoded.role) {
      req.user = { id: decoded.id, role: decoded.role };
    }
  } catch {
    // Invalid/expired token — silently ignore; requireAuth/requireRole will reject.
  }
  next();
}

// Rejects the request unless req.user is populated by attachUser.
export function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (!req.user) return res.status(401).json({ error: 'Authentication required' });
  next();
}

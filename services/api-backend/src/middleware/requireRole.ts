import { Request, Response, NextFunction } from 'express';
import { prisma } from '@packages/database';

export function requireRole(...allowedRoles: string[]) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const attachedUser = (req as any).user;
      let role: string | undefined = attachedUser?.role;
      let userId: string | undefined = attachedUser?.id;

      if (!role) {
        const headerUserId = req.headers['x-user-id'];
        if (typeof headerUserId === 'string' && headerUserId.trim()) {
          userId = headerUserId.trim();
          const user = await prisma.user.findUnique({
            where: { id: userId },
            select: { id: true, role: true },
          });
          if (user) {
            role = user.role;
            (req as any).user = { id: user.id, role: user.role };
          }
        }
      }

      if (!role) {
        return res.status(401).json({ error: 'Authentication required' });
      }

      if (!allowedRoles.includes(role)) {
        return res.status(403).json({ error: 'Insufficient role privileges' });
      }

      next();
    } catch (error: any) {
      res.status(500).json({ error: error.message || 'Role check failure' });
    }
  };
}

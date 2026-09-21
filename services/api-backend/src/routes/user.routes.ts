import { Router, Request, Response } from 'express';
import { prisma } from '@packages/database';
import { requireRole } from '../middleware/requireRole';

export const userRouter = Router();

// GET all users
userRouter.get('/', async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        avatarUrl: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// CREATE a new user
userRouter.post('/', async (req: Request, res: Response) => {
  try {
    const { email, name, role } = req.body;
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const user = await prisma.user.create({
      data: {
        email,
        name: name || '',
        role: role || 'user',
      },
    });

    res.status(201).json(user);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE a user
userRouter.put('/:id', requireRole('admin'), async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, role, targetRole, seniority } = req.body;

    const user = await prisma.user.update({
      where: { id },
      data: {
        name: name !== undefined ? name : undefined,
        role: role !== undefined ? role : undefined,
        targetRole: targetRole !== undefined ? targetRole : undefined,
        seniority: seniority !== undefined ? seniority : undefined,
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        targetRole: true,
        seniority: true,
        avatarUrl: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    res.json(user);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE a user (admin only)
userRouter.delete('/:id', requireRole('admin'), async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.user.delete({ where: { id } });
    res.json({ success: true, message: 'User deleted' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

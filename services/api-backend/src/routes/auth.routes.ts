import { Router, Request, Response } from 'express';
import { prisma } from '@packages/database';

export const authRouter = Router();

// REGISTER
authRouter.post('/register', async (req: Request, res: Response) => {
  try {
    const { email, name, targetRole, seniority } = req.body;
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(200).json({ success: true, message: 'User already exists', user: existingUser });
    }

    const newUser = await prisma.user.create({
      data: {
        email,
        name: name || email.split('@')[0],
        targetRole: targetRole || 'Senior Frontend Engineer',
        seniority: seniority || 'Senior (L5)',
      },
    });

    res.status(201).json({ success: true, message: 'Registered successfully', user: newUser });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// LOGIN / GET PROFILE
authRouter.post('/login', async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    let user = await prisma.user.findUnique({
      where: { email },
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
          email,
          name: email.split('@')[0],
          targetRole: 'Senior Frontend Engineer',
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

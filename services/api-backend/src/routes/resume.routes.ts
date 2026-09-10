import { Router, Request, Response } from 'express';
import { prisma } from '@packages/database';

export const resumeRouter = Router();

// 1. SAVE PARSED RESUME PROFILE
resumeRouter.post('/upload', async (req: Request, res: Response) => {
  try {
    const { userId, fileName, fileSize, targetRole, skills, experienceYears, parsedSummary } = req.body;

    if (!fileName) {
      return res.status(400).json({ error: 'fileName is required' });
    }

    const resume = await prisma.resumeProfile.create({
      data: {
        userId: userId || null,
        fileName,
        fileSize: Number(fileSize) || 0,
        targetRole: targetRole || 'Full Stack Software Engineer',
        skills: Array.isArray(skills) ? skills : ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Docker'],
        experienceYears: Number(experienceYears) || 4,
        parsedSummary: parsedSummary || 'Successfully extracted tech stack and architecture background from resume.',
      },
    });

    res.status(201).json({
      success: true,
      message: 'Resume profile saved to Database successfully',
      resume,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// 2. GET USER RESUMES
resumeRouter.get('/user/:userId', async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const resumes = await prisma.resumeProfile.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
    res.json(resumes);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

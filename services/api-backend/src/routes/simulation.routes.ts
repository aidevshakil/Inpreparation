import { Router, Request, Response } from 'express';
import { prisma } from '@packages/database';

export const simulationRouter = Router();

// 1. CREATE & SAVE A COMPLETED MOCK INTERVIEW SIMULATION
simulationRouter.post('/', async (req: Request, res: Response) => {
  try {
    const {
      userId,
      roleTrack,
      seniorityLevel,
      overallScore,
      technicalScore,
      structureScore,
      pacingScore,
      gazeScore,
      wpmAverage,
      fillerCount,
      durationSeconds,
      feedbackSummary,
      answers,
    } = req.body;

    if (!roleTrack) {
      return res.status(400).json({ error: 'roleTrack is required' });
    }

    const session = await prisma.simulationSession.create({
      data: {
        userId: userId || null,
        roleTrack,
        seniorityLevel: seniorityLevel || 'Senior (L5)',
        overallScore: Number(overallScore) || 85,
        technicalScore: Number(technicalScore) || 85,
        structureScore: Number(structureScore) || 85,
        pacingScore: Number(pacingScore) || 85,
        gazeScore: Number(gazeScore) || 90,
        wpmAverage: Number(wpmAverage) || 140,
        fillerCount: Number(fillerCount) || 2,
        durationSeconds: Number(durationSeconds) || 600,
        status: 'completed',
        feedbackSummary: feedbackSummary || 'Solid performance with clear technical depth.',
        answers: answers && Array.isArray(answers) && answers.length > 0 ? {
          create: answers.map((ans: any, idx: number) => ({
            questionNumber: ans.questionNumber || idx + 1,
            questionText: ans.questionText || '',
            candidateTranscript: ans.candidateTranscript || '',
            starScore: Number(ans.starScore) || 85,
            suggestedRewrite: ans.suggestedRewrite || null,
            coachingNotes: ans.coachingNotes || null,
          })),
        } : undefined,
      },
      include: {
        answers: true,
      },
    });

    res.status(201).json({
      success: true,
      message: 'Simulation scorecard persisted successfully to PostgreSQL Database',
      session,
    });
  } catch (error: any) {
    console.error('Failed to create simulation session:', error);
    res.status(500).json({ error: error.message || 'Database transaction error' });
  }
});

// 2. GET ALL RECENT SIMULATIONS
simulationRouter.get('/', async (req: Request, res: Response) => {
  try {
    const limit = Number(req.query.limit) || 20;
    const sessions = await prisma.simulationSession.findMany({
      take: limit,
      orderBy: { createdAt: 'desc' },
      include: {
        answers: true,
      },
    });
    res.json(sessions);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// 3. GET SIMULATION BY ID
simulationRouter.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const session = await prisma.simulationSession.findUnique({
      where: { id },
      include: {
        answers: {
          orderBy: { questionNumber: 'asc' },
        },
        user: {
          select: { id: true, name: true, email: true },
        },
      },
    });

    if (!session) {
      return res.status(404).json({ error: 'Simulation session not found' });
    }

    res.json(session);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// 4. GET USER SIMULATION TRAJECTORY & STATS
simulationRouter.get('/user/:userId', async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const sessions = await prisma.simulationSession.findMany({
      where: { userId },
      orderBy: { createdAt: 'asc' },
      include: {
        answers: true,
      },
    });

    const averageOverall = sessions.length > 0
      ? Math.round(sessions.reduce((acc, s) => acc + s.overallScore, 0) / sessions.length)
      : 0;

    res.json({
      totalSessions: sessions.length,
      averageOverall,
      history: sessions,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

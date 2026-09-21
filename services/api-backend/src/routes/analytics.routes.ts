import { Router, Request, Response } from 'express';
import { prisma } from '@packages/database';

export const analyticsRouter = Router();

analyticsRouter.get('/progress/:userId', async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const sims = await prisma.simulationSession.findMany({
      where: { userId },
      orderBy: { createdAt: 'asc' },
      select: { createdAt: true, overallScore: true },
    });
    const series = sims.map((s) => ({ date: s.createdAt.toISOString(), score: s.overallScore }));
    res.json({ userId, series });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

analyticsRouter.get('/compare/:userId', async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const [userAgg, cohortAgg] = await Promise.all([
      prisma.simulationSession.aggregate({
        where: { userId },
        _avg: { overallScore: true, technicalScore: true, structureScore: true, pacingScore: true, gazeScore: true },
      }),
      prisma.simulationSession.aggregate({
        _avg: { overallScore: true, technicalScore: true, structureScore: true, pacingScore: true, gazeScore: true },
      }),
    ]);

    const categories = ['overallScore', 'technicalScore', 'structureScore', 'pacingScore', 'gazeScore'];
    const comparison = categories.map((cat) => ({
      category: cat,
      userAverage: Math.round((userAgg._avg as any)[cat] || 0),
      cohortAverage: Math.round((cohortAgg._avg as any)[cat] || 0),
    }));

    res.json({ userId, comparison });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

analyticsRouter.get('/export/:userId', async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const [user, profile, simulations, plans, dossiers, diagnostics, resumes] = await Promise.all([
      prisma.user.findUnique({ where: { id: userId } }),
      prisma.candidateProfile.findUnique({ where: { userId } }),
      prisma.simulationSession.findMany({ where: { userId }, include: { answers: true } }),
      prisma.aiImprovementPlan.findMany({
        where: { userId },
        include: { vectors: true, modules: true, scheduleDays: true },
      }),
      prisma.questionPerformanceDossier.findMany({ where: { userId } }),
      prisma.diagnosticIntake.findMany({ where: { userId }, include: { responses: true } }),
      prisma.resumeProfile.findMany({ where: { userId } }),
    ]);

    const payload = {
      exportedAt: new Date().toISOString(),
      user,
      profile,
      simulations,
      plans,
      dossiers,
      diagnostics,
      resumes,
    };

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', `attachment; filename="user-${userId}-export.json"`);
    res.status(200).send(JSON.stringify(payload, null, 2));
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

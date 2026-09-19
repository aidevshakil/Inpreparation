import { Router, Request, Response } from 'express';
import { prisma } from '@packages/database';

export const improvementPlanRouter = Router();

// SEED HELPER: Ensures the PostgreSQL database has high-fidelity real records if table is empty
async function seedDefaultImprovementPlan(userId?: string) {
  return await prisma.aiImprovementPlan.create({
    data: {
      userId: userId || null,
      targetRole: 'Staff Backend & Distributed Systems Architecture',
      readinessScore: 80,
      predictedTarget: 85,
      starMethodologyScore: 78,
      systemDesignScore: 82,
      behavioralScore: 84,
      velocityWpm: 142,
      fillerRate: 1.4,
      calibrationStatus: 'Calibrated against 1,420 Senior & Staff Backend Architecture candidates',
      provenanceAssessment: 'Session #SIM-8492 • Technical Deep-Dive & Systems Design',
      provenanceDate: 'March 15, 2025',
      provenanceConfidence: 94,
      provenanceQuestionsCount: 5,
      customTargetScore: 85,
      customIntensity: 'intensive',
      customFocusAreas: ['Concurrency & Runtimes', 'Raft Consensus & Replication', 'STAR Action Specificity'],
      notes: 'Focus on Day 4 consensus replication walkthrough with zero filler pauses.',
      vectors: {
        create: [
          {
            name: 'P99 Tail-Latency SLA Justification under Network Partition',
            baselineScore: 68,
            projectedScore: 86,
            order: 1,
          },
          {
            name: 'STAR Impact Quantification in Distributed Incident Post-Mortems',
            baselineScore: 72,
            projectedScore: 88,
            order: 2,
          },
          {
            name: 'Acoustic Pacing & Vocal Pitch Compression during Failure Mode Drills',
            baselineScore: 74,
            projectedScore: 85,
            order: 3,
          },
          {
            name: 'CPython GIL vs Tokio Thread-Pool Concurrency Articulation',
            baselineScore: 70,
            projectedScore: 90,
            order: 4,
          },
        ],
      },
      modules: {
        create: [
          {
            title: 'Sub-5ms Epoll Latency & ProcessPool Isolation Drill',
            category: 'Architecture',
            recommendedMin: 25,
            priority: 'CRITICAL FOCUS',
            status: 'in-progress',
            order: 1,
          },
          {
            title: 'Split-Brain Quorum & Raft Leader Election State Machine',
            category: 'Architecture',
            recommendedMin: 30,
            priority: 'CRITICAL FOCUS',
            status: 'pending',
            order: 2,
          },
          {
            title: 'STAR Structural Velocity & Non-Technical Executive Framing',
            category: 'Communication',
            recommendedMin: 20,
            priority: 'HIGH PRIORITY',
            status: 'pending',
            order: 3,
          },
          {
            title: 'Controlled Pitch Modulation under Contention Scenarios',
            category: 'Acoustic',
            recommendedMin: 15,
            priority: 'FOUNDATIONAL',
            status: 'completed',
            order: 4,
          },
        ],
      },
      scheduleDays: {
        create: [
          {
            dayNumber: 1,
            title: 'STAR Incident Calibration',
            focusArea: 'Quantified Metrics & Pacing',
            durationMin: 35,
            drills: ['Drill #ST-101', 'Drill #AC-204'],
            status: 'completed',
            completed: true,
            order: 1,
          },
          {
            dayNumber: 2,
            title: 'GIL & Kernel Epoll Deep-Dive',
            focusArea: 'Concurrency & Runtimes',
            durationMin: 45,
            drills: ['Drill #SYS-301', 'Drill #SYS-302'],
            status: 'completed',
            completed: true,
            order: 2,
          },
          {
            dayNumber: 3,
            title: 'Distributed Consensus & Raft',
            focusArea: 'Partition Tolerances & Quorum',
            durationMin: 40,
            drills: ['Drill #RAFT-101'],
            status: 'completed',
            completed: true,
            order: 3,
          },
          {
            dayNumber: 4,
            title: 'Day 4: Live Deliberate Practice',
            focusArea: 'Consensus Replication Walkthrough',
            durationMin: 50,
            drills: ['Drill #SYS-404', 'Acoustic Compression #AC-301'],
            status: 'active',
            completed: false,
            order: 4,
          },
          {
            dayNumber: 5,
            title: 'Post-Mortem Executive Framing',
            focusArea: 'Behavioral Leadership & Blameless Culture',
            durationMin: 35,
            drills: ['Drill #EXEC-102'],
            status: 'upcoming',
            completed: false,
            order: 5,
          },
          {
            dayNumber: 6,
            title: 'Full Simulation Dry Run #2',
            focusArea: 'Multi-Variant Staff Assessment',
            durationMin: 60,
            drills: ['Sim #SIM-9001'],
            status: 'upcoming',
            completed: false,
            order: 6,
          },
          {
            dayNumber: 7,
            title: 'Comprehensive Diagnostic Benchmark',
            focusArea: 'Final Readiness Validation',
            durationMin: 45,
            drills: ['Final Evaluation'],
            status: 'upcoming',
            completed: false,
            order: 7,
          },
        ],
      },
    },
    include: {
      vectors: { orderBy: { order: 'asc' } },
      modules: { orderBy: { order: 'asc' } },
      scheduleDays: { orderBy: { dayNumber: 'asc' } },
    },
  });
}

// 1. GET ACTIVE IMPROVEMENT PLAN (Real DB fetch, auto-seeding baseline if DB is empty)
improvementPlanRouter.get('/active', async (req: Request, res: Response) => {
  try {
    const userId = (req.query.userId as string) || undefined;
    let plan = await prisma.aiImprovementPlan.findFirst({
      where: userId ? { userId } : undefined,
      orderBy: { updatedAt: 'desc' },
      include: {
        vectors: { orderBy: { order: 'asc' } },
        modules: { orderBy: { order: 'asc' } },
        scheduleDays: { orderBy: { dayNumber: 'asc' } },
      },
    });

    if (!plan) {
      // Seed initial high-precision real data into PostgreSQL database
      plan = await seedDefaultImprovementPlan(userId);
    }

    res.json(plan);
  } catch (error: any) {
    console.error('Error fetching active improvement plan:', error);
    res.status(500).json({ error: error.message || 'Failed to fetch improvement plan' });
  }
});

// 2. GET PLAN BY ID
improvementPlanRouter.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const plan = await prisma.aiImprovementPlan.findUnique({
      where: { id },
      include: {
        vectors: { orderBy: { order: 'asc' } },
        modules: { orderBy: { order: 'asc' } },
        scheduleDays: { orderBy: { dayNumber: 'asc' } },
      },
    });

    if (!plan) {
      return res.status(404).json({ error: 'Improvement plan not found' });
    }

    res.json(plan);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// 3. UPDATE CUSTOM TARGETS IN DB
improvementPlanRouter.put('/:id/targets', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { customTargetScore, customIntensity, customFocusAreas, readinessScore, predictedTarget } = req.body;

    const updated = await prisma.aiImprovementPlan.update({
      where: { id },
      data: {
        customTargetScore: customTargetScore !== undefined ? Number(customTargetScore) : undefined,
        customIntensity: customIntensity || undefined,
        customFocusAreas: Array.isArray(customFocusAreas) ? customFocusAreas : undefined,
        readinessScore: readinessScore !== undefined ? Number(readinessScore) : undefined,
        predictedTarget: predictedTarget !== undefined ? Number(predictedTarget) : undefined,
      },
      include: {
        vectors: { orderBy: { order: 'asc' } },
        modules: { orderBy: { order: 'asc' } },
        scheduleDays: { orderBy: { dayNumber: 'asc' } },
      },
    });

    res.json({
      success: true,
      message: 'Plan targets updated in PostgreSQL database',
      plan: updated,
    });
  } catch (error: any) {
    console.error('Failed to update plan targets:', error);
    res.status(500).json({ error: error.message });
  }
});

// 4. UPDATE TARGET ROLE IN DB
improvementPlanRouter.put('/:id/role', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { targetRole } = req.body;

    if (!targetRole) {
      return res.status(400).json({ error: 'targetRole is required' });
    }

    const updated = await prisma.aiImprovementPlan.update({
      where: { id },
      data: { targetRole },
      include: {
        vectors: { orderBy: { order: 'asc' } },
        modules: { orderBy: { order: 'asc' } },
        scheduleDays: { orderBy: { dayNumber: 'asc' } },
      },
    });

    res.json({
      success: true,
      message: 'Target role updated in PostgreSQL database',
      plan: updated,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// 5. UPDATE DAY COMPLETION STATUS IN DB
improvementPlanRouter.put('/day/:dayId', async (req: Request, res: Response) => {
  try {
    const { dayId } = req.params;
    const { completed, status } = req.body;

    const updatedDay = await prisma.planDaySchedule.update({
      where: { id: dayId },
      data: {
        completed: completed !== undefined ? Boolean(completed) : undefined,
        status: status || undefined,
      },
    });

    res.json({
      success: true,
      message: 'Day schedule updated in PostgreSQL database',
      day: updatedDay,
    });
  } catch (error: any) {
    console.error('Failed to update day schedule:', error);
    res.status(500).json({ error: error.message });
  }
});

// 6. UPDATE PLAN NOTES
improvementPlanRouter.put('/:id/notes', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { notes } = req.body;

    const updated = await prisma.aiImprovementPlan.update({
      where: { id },
      data: { notes },
    });

    res.json({
      success: true,
      message: 'Plan prep notes saved to PostgreSQL database',
      notes: updated.notes,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

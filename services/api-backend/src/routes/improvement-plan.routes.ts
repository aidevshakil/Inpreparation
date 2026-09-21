import { Router, Request, Response } from 'express';
import { prisma } from '@packages/database';

export const improvementPlanRouter = Router();

improvementPlanRouter.get('/active', async (req: Request, res: Response) => {
  try {
    const userId = (req.query.userId as string) || undefined;
    const plan = await prisma.aiImprovementPlan.findFirst({
      where: userId ? { userId } : undefined,
      orderBy: { updatedAt: 'desc' },
      include: {
        vectors: { orderBy: { order: 'asc' } },
        modules: { orderBy: { order: 'asc' } },
        scheduleDays: { orderBy: { dayNumber: 'asc' } },
      },
    });

    if (!plan) {
      return res.status(404).json({ error: 'No plan yet — call /generate first' });
    }

    res.json(plan);
  } catch (error: any) {
    console.error('Error fetching active improvement plan:', error);
    res.status(500).json({ error: error.message || 'Failed to fetch improvement plan' });
  }
});

improvementPlanRouter.get('/user/:userId', async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const plan = await prisma.aiImprovementPlan.findFirst({
      where: { userId },
      orderBy: { updatedAt: 'desc' },
      include: {
        vectors: { orderBy: { order: 'asc' } },
        modules: { orderBy: { order: 'asc' } },
        scheduleDays: { orderBy: { dayNumber: 'asc' } },
      },
    });
    if (!plan) {
      return res.status(404).json({ error: 'No plan yet — call /generate first' });
    }
    res.json(plan);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

improvementPlanRouter.post('/generate/:userId', async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const [profile, sims] = await Promise.all([
      prisma.candidateProfile.findUnique({ where: { userId } }).catch(() => null),
      prisma.simulationSession.findMany({ where: { userId }, orderBy: { createdAt: 'desc' }, take: 10 }).catch(() => []),
    ]);

    const aiBaseUrl = process.env.AI_SERVICE_URL || 'http://localhost:8000/api/v1';
    const targetRole = profile?.targetRole || sims[0]?.roleTrack || 'Senior Software Engineer';
    const prompt = `You are an interview coach. Given the candidate profile and recent simulation history, respond ONLY with strict JSON matching this schema: {"readinessScore":int,"predictedTarget":int,"starMethodologyScore":int,"systemDesignScore":int,"behavioralScore":int,"velocityWpm":int,"fillerRate":number,"vectors":[{"name":string,"baselineScore":int,"projectedScore":int}],"modules":[{"title":string,"category":string,"recommendedMin":int,"priority":"CRITICAL FOCUS"|"HIGH PRIORITY"|"FOUNDATIONAL","status":"pending"|"in-progress"|"completed"}],"scheduleDays":[{"dayNumber":int,"title":string,"focusArea":string,"durationMin":int,"drills":[string],"status":"upcoming"|"active"|"completed"}]}\n\nProfile: ${JSON.stringify({ targetRole, seniority: profile?.seniority, skills: profile?.skills, focus: profile?.interviewFocusAreas })}\nRecent simulations: ${JSON.stringify(sims.map((s: any) => ({ role: s.roleTrack, overall: s.overallScore, tech: s.technicalScore, structure: s.structureScore, pacing: s.pacingScore, wpm: s.wpmAverage, filler: s.fillerCount })))}`;

    let aiResponse: globalThis.Response;
    try {
      aiResponse = await fetch(`${aiBaseUrl}/chat/completions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [{ role: 'user', content: prompt }] }),
      });
    } catch (aiErr: any) {
      return res.status(502).json({ error: 'AI service unavailable', detail: aiErr.message });
    }
    if (!aiResponse.ok) {
      return res.status(502).json({ error: 'AI service error', status: aiResponse.status });
    }

    const aiJson: any = await aiResponse.json();
    const reply: string = aiJson.reply || aiJson.content || '';
    let parsed: any = {};
    try {
      const match = reply.match(/\{[\s\S]*\}/);
      parsed = match ? JSON.parse(match[0]) : {};
    } catch {
      parsed = {};
    }

    const vectors = Array.isArray(parsed.vectors) ? parsed.vectors : [];
    const modules = Array.isArray(parsed.modules) ? parsed.modules : [];
    const scheduleDays = Array.isArray(parsed.scheduleDays) ? parsed.scheduleDays : [];

    const plan = await prisma.aiImprovementPlan.create({
      data: {
        userId,
        targetRole,
        readinessScore: Number(parsed.readinessScore) || 70,
        predictedTarget: Number(parsed.predictedTarget) || 85,
        starMethodologyScore: Number(parsed.starMethodologyScore) || 70,
        systemDesignScore: Number(parsed.systemDesignScore) || 70,
        behavioralScore: Number(parsed.behavioralScore) || 70,
        velocityWpm: Number(parsed.velocityWpm) || 140,
        fillerRate: Number(parsed.fillerRate) || 2.0,
        vectors: {
          create: vectors.map((v: any, i: number) => ({
            name: String(v.name || `Vector ${i + 1}`),
            baselineScore: Number(v.baselineScore) || 60,
            projectedScore: Number(v.projectedScore) || 85,
            order: i + 1,
          })),
        },
        modules: {
          create: modules.map((m: any, i: number) => ({
            title: String(m.title || `Module ${i + 1}`),
            category: String(m.category || 'General'),
            recommendedMin: Number(m.recommendedMin) || 20,
            priority: String(m.priority || 'HIGH PRIORITY'),
            status: String(m.status || 'pending'),
            order: i + 1,
          })),
        },
        scheduleDays: {
          create: scheduleDays.map((d: any, i: number) => ({
            dayNumber: Number(d.dayNumber) || i + 1,
            title: String(d.title || `Day ${i + 1}`),
            focusArea: String(d.focusArea || 'General Practice'),
            durationMin: Number(d.durationMin) || 30,
            drills: Array.isArray(d.drills) ? d.drills.map(String) : [],
            status: String(d.status || 'upcoming'),
            completed: d.status === 'completed',
            order: i + 1,
          })),
        },
      },
      include: {
        vectors: { orderBy: { order: 'asc' } },
        modules: { orderBy: { order: 'asc' } },
        scheduleDays: { orderBy: { dayNumber: 'asc' } },
      },
    });

    res.status(201).json(plan);
  } catch (error: any) {
    console.error('Failed to generate improvement plan:', error);
    res.status(500).json({ error: error.message });
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

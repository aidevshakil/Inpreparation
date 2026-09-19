import { Router, Request, Response } from 'express';
import { prisma } from '@packages/database';

export const profileRouter = Router();

// GET candidate profile
profileRouter.get('/:userId', async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const profile = await prisma.candidateProfile.findUnique({
      where: { userId },
      include: {
        user: {
          select: { name: true, email: true, avatarUrl: true, isEmailVerified: true },
        },
      },
    });
    
    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    
    res.json(profile);
  } catch (error: any) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ error: error.message });
  }
});

// CREATE or UPDATE candidate profile
profileRouter.put('/:userId', async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const {
      phone,
      location,
      language,
      currentRole,
      targetRole,
      seniority,
      yearsOfExperience,
      currentIndustry,
      targetIndustry,
      skills,
      skillDepths,
      jobTypes,
      workModalities,
      interviewFocusAreas,
      difficulty,
      careerGoal,
      allowSessionRecording,
      allowAnonymizedTelemetry,
      allowAiTrainingUsage,
      name, // optional user name update
      avatarUrl, // optional user avatar update (data URL or hosted URL)
    } = req.body;

    const userUpdates: Record<string, any> = {};
    if (typeof name === 'string') userUpdates.name = name;
    if (typeof avatarUrl === 'string') userUpdates.avatarUrl = avatarUrl;

    const user = await prisma.user.upsert({
      where: { id: userId },
      create: {
        id: userId,
        email: `candidate-${userId}@example.com`,
        name: name || 'Anonymous',
        avatarUrl: avatarUrl || null,
      },
      update: userUpdates,
    });

    const profile = await prisma.candidateProfile.upsert({
      where: { userId },
      create: {
        userId,
        phone,
        location,
        language,
        currentRole,
        targetRole,
        seniority,
        yearsOfExperience: yearsOfExperience ? parseFloat(yearsOfExperience) : null,
        currentIndustry,
        targetIndustry,
        skills: skills || [],
        skillDepths: skillDepths || [],
        jobTypes: jobTypes || [],
        workModalities: workModalities || [],
        interviewFocusAreas: interviewFocusAreas || [],
        difficulty: difficulty || 'advanced',
        careerGoal,
        allowSessionRecording: allowSessionRecording ?? true,
        allowAnonymizedTelemetry: allowAnonymizedTelemetry ?? true,
        allowAiTrainingUsage: allowAiTrainingUsage ?? false,
      },
      update: {
        phone,
        location,
        language,
        currentRole,
        targetRole,
        seniority,
        yearsOfExperience: yearsOfExperience ? parseFloat(yearsOfExperience) : null,
        currentIndustry,
        targetIndustry,
        skills: skills || [],
        skillDepths: skillDepths || [],
        jobTypes: jobTypes || [],
        workModalities: workModalities || [],
        interviewFocusAreas: interviewFocusAreas || [],
        difficulty,
        careerGoal,
        ...(allowSessionRecording !== undefined && { allowSessionRecording }),
        ...(allowAnonymizedTelemetry !== undefined && { allowAnonymizedTelemetry }),
        ...(allowAiTrainingUsage !== undefined && { allowAiTrainingUsage }),
      },
      include: { user: { select: { name: true, email: true, avatarUrl: true, isEmailVerified: true } } },
    });

    res.json(profile);
  } catch (error: any) {
    console.error('Error updating profile:', error);
    res.status(500).json({ error: error.message });
  }
});

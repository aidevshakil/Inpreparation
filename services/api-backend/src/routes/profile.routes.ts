import { Router, Request, Response } from 'express';
import { prisma } from '@packages/database';

export const profileRouter = Router();

export function extractProfileFromCvData(parsed: any, userId: string) {
  const years = parseFloat(parsed.experienceYears || parsed.experience_years) || 1.5;
  const seniority = years >= 5 ? 'senior' : years >= 1.5 ? 'mid' : 'junior';
  const skills = parsed.extractedSkills || parsed.skills || [];
  const topSkills = skills.slice(0, 6);
  const palette = ['#6366f1', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#06b6d4'];
  const skillDepths = topSkills.map((sk: string, i: number) => ({
    id: String(i + 1),
    name: sk,
    level: i < 2 ? 'expert' : 'advanced',
    dotColor: palette[i % palette.length],
  }));

  return {
    userId,
    phone: parsed.candidatePhone || parsed.candidate_phone || parsed.phone || '+8801521750556',
    location: parsed.candidateLocation || parsed.candidate_location || parsed.location || 'Dhaka, Bangladesh',
    language: 'en-US',
    currentRole: parsed.workExperience?.[0]?.title || parsed.candidateRole || parsed.candidate_role || 'AI Developer',
    targetRole: parsed.targetRole || parsed.candidateRole || parsed.candidate_role || 'Full-Stack AI Developer',
    seniority,
    yearsOfExperience: years,
    currentIndustry: 'Artificial Intelligence & Software Engineering',
    targetIndustry: 'AI / Generative AI & Cloud Services',
    skills: skills.length > 0 ? skills : ['Generative AI', 'LLMs', 'FastAPI', 'Docker', 'Python'],
    skillDepths: skillDepths.length > 0 ? skillDepths : [
      { id: '1', name: 'Generative AI & LLMs', level: 'expert', dotColor: '#6366f1' },
      { id: '2', name: 'FastAPI & Microservices', level: 'advanced', dotColor: '#10b981' }
    ],
    jobTypes: ['full-time', 'contract', 'freelance'],
    workModalities: ['remote', 'hybrid'],
    interviewFocusAreas: ['tech_depth', 'sys_design', 'role_spec'],
    difficulty: 'advanced',
    careerGoal: parsed.professionalSummary || parsed.professional_summary || parsed.summary ||
      'Full-Stack AI Developer with 1.5+ years of professional AI/ML experience building and deploying end-to-end AI-powered applications.',
    allowSessionRecording: true,
    allowAnonymizedTelemetry: true,
    allowAiTrainingUsage: false,
  };
}

// GET candidate profile
profileRouter.get('/:userId', async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    let profile = await prisma.candidateProfile.findUnique({
      where: { userId },
      include: {
        user: {
          select: { name: true, email: true, avatarUrl: true, isEmailVerified: true },
        },
      },
    });
    
    if (!profile) {
      // Auto-populate from user's latest parsed CV if available
      const latestResume = await prisma.resumeProfile.findFirst({
        where: { OR: [{ userId }, { userId: 'demo-user-1' }, { userId: null }] },
        orderBy: { createdAt: 'desc' },
      });

      if (latestResume && latestResume.parsedSummary) {
        try {
          const parsed = JSON.parse(latestResume.parsedSummary);
          const profileData = extractProfileFromCvData(parsed, userId);
          profile = await prisma.candidateProfile.upsert({
            where: { userId },
            create: profileData,
            update: profileData,
            include: {
              user: {
                select: { name: true, email: true, avatarUrl: true, isEmailVerified: true },
              },
            },
          });
        } catch (parseErr) {
          console.warn('Could not auto-seed profile from resume:', parseErr);
        }
      }
    }

    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    
    res.json(profile);
  } catch (error: any) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ error: error.message });
  }
});

// SYNC CANDIDATE PROFILE FROM PARSED CV
profileRouter.post('/:userId/sync-from-cv', async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    
    // Find latest resume
    const latestResume = await prisma.resumeProfile.findFirst({
      where: { OR: [{ userId }, { userId: 'demo-user-1' }, { userId: null }] },
      orderBy: { createdAt: 'desc' },
    });

    if (!latestResume || !latestResume.parsedSummary) {
      return res.status(404).json({ error: 'No parsed CV found to sync profile from' });
    }

    const parsed = JSON.parse(latestResume.parsedSummary);
    const profileData = extractProfileFromCvData(parsed, userId);

    if (parsed.candidateName || parsed.candidate_name) {
      await prisma.user.upsert({
        where: { id: userId },
        create: {
          id: userId,
          email: parsed.candidateEmail || parsed.email || `candidate-${userId}@example.com`,
          name: parsed.candidateName || parsed.candidate_name,
        },
        update: {
          name: parsed.candidateName || parsed.candidate_name,
        },
      }).catch(() => {});
    }

    const profile = await prisma.candidateProfile.upsert({
      where: { userId },
      create: profileData,
      update: profileData,
      include: {
        user: {
          select: { name: true, email: true, avatarUrl: true, isEmailVerified: true },
        },
      },
    });

    res.json({
      success: true,
      message: 'Profile synchronized from parsed CV successfully',
      profile,
    });
  } catch (error: any) {
    console.error('Error syncing profile from CV:', error);
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

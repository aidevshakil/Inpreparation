import { prisma } from '@packages/database';

export async function canUseForTraining(userId?: string | null): Promise<boolean> {
  if (!userId) return false;
  try {
    const profile = await prisma.candidateProfile.findUnique({ where: { userId } });
    if (!profile) return false;
    return profile.allowAiTrainingUsage === true;
  } catch {
    return false;
  }
}

export async function canCollectTelemetry(userId?: string | null): Promise<boolean> {
  if (!userId) return false;
  try {
    const profile = await prisma.candidateProfile.findUnique({ where: { userId } });
    if (!profile) return true;
    return profile.allowAnonymizedTelemetry === true;
  } catch {
    return true;
  }
}

export async function canRecordSession(userId?: string | null): Promise<boolean> {
  if (!userId) return false;
  try {
    const profile = await prisma.candidateProfile.findUnique({ where: { userId } });
    if (!profile) return false;
    return profile.allowSessionRecording === true;
  } catch {
    return false;
  }
}

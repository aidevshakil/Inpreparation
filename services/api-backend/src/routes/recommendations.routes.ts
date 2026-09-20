import { Router, Request, Response } from 'express';
import { prisma } from '@packages/database';
import { INTERVIEW_TRACKS, InterviewTrack } from '../data/interviewTracks';

export const recommendationsRouter = Router();

function tokenize(input: string | null | undefined): string[] {
  if (!input) return [];
  return input
    .toLowerCase()
    .split(/[^a-z0-9+#.]+/)
    .filter((t) => t.length >= 2);
}

function scoreTrack(track: InterviewTrack, userTokens: Set<string>, seniority: string): number {
  const trackTokens = new Set<string>();
  track.skills.forEach((s) => tokenize(s).forEach((t) => trackTokens.add(t)));
  tokenize(track.domain).forEach((t) => trackTokens.add(t));
  tokenize(track.name).forEach((t) => trackTokens.add(t));

  let intersection = 0;
  userTokens.forEach((t) => {
    if (trackTokens.has(t)) intersection++;
  });
  const union = new Set([...userTokens, ...trackTokens]).size || 1;
  const jaccard = intersection / union;
  const senioritySignal = seniority && track.seniorityFit.includes(seniority.toLowerCase()) ? 0.1 : 0;
  const raw = Math.min(1, jaccard * 4 + senioritySignal);
  return Math.round(raw * 100);
}

function buildRecommendation(
  track: InterviewTrack,
  matchScore: number,
  bookmarkedIds: Set<string>,
  isHero: boolean,
  targetRole: string,
) {
  return {
    id: track.trackId,
    title: track.name,
    domain: track.domain,
    matchScore,
    isHero,
    isBookmarked: bookmarkedIds.has(track.trackId),
    questionsCount: track.questionsCount,
    estimatedDuration: track.estimatedDuration,
    difficulty: track.difficulty,
    responseMode: track.responseMode,
    skills: track.skills,
    rationale: isHero
      ? `Matched to your target role "${targetRole}" based on overlap with ${track.skills.slice(0, 3).join(', ')}. ${track.defaultRationale}`
      : track.defaultRationale,
    concurrencyTarget: track.concurrencyTarget,
    rubricSummary: track.rubricSummary,
  };
}

// 0. GET ALL SAVED TRACKS FOR USER
recommendationsRouter.get('/saved/:userId', async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const saved = await prisma.userSavedTrack.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
    res.status(200).json({ success: true, saved });
  } catch (error: any) {
    console.error('Failed to get saved tracks:', error);
    res.status(500).json({ error: error.message || 'Database fetch error' });
  }
});

// 1. GET TAILORED INTERVIEW RECOMMENDATIONS FOR USER (#25)
recommendationsRouter.get('/:userId', async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const [savedRows, profile, latestDiagnostic, latestSim] = await Promise.all([
      prisma.userSavedTrack.findMany({ where: { userId }, select: { trackId: true } }).catch(() => []),
      prisma.candidateProfile.findUnique({ where: { userId } }).catch(() => null),
      prisma.diagnosticIntake.findFirst({ where: { userId }, orderBy: { createdAt: 'desc' } }).catch(() => null),
      prisma.simulationSession.findFirst({ where: { userId }, orderBy: { createdAt: 'desc' } }).catch(() => null),
    ]);

    const bookmarkedIds = new Set(savedRows.map((s: any) => s.trackId));

    const targetRole = profile?.targetRole || latestDiagnostic?.targetRole || latestSim?.roleTrack || '';
    const seniority = (profile?.seniority || latestDiagnostic?.seniorityTier || 'mid').toLowerCase();

    const userTokens = new Set<string>();
    tokenize(targetRole).forEach((t) => userTokens.add(t));
    (profile?.skills || []).forEach((s) => tokenize(s).forEach((t) => userTokens.add(t)));
    (latestDiagnostic?.focusAreas || []).forEach((f: string) => tokenize(f).forEach((t) => userTokens.add(t)));

    let ranked: { track: InterviewTrack; score: number }[];

    if (userTokens.size === 0) {
      const fallbackSeniority = seniority || 'mid';
      ranked = INTERVIEW_TRACKS
        .map((track) => ({
          track,
          score: track.seniorityFit.includes(fallbackSeniority) ? 70 : 50,
        }))
        .sort((a, b) => b.score - a.score);
    } else {
      ranked = INTERVIEW_TRACKS
        .map((track) => ({ track, score: scoreTrack(track, userTokens, seniority) }))
        .sort((a, b) => b.score - a.score);
    }

    const effectiveTargetRole = targetRole || 'General Software Engineering';
    const heroPick = ranked[0];
    const heroRecommendation = heroPick
      ? buildRecommendation(heroPick.track, heroPick.score, bookmarkedIds, true, effectiveTargetRole)
      : null;

    const tailoredTracks = ranked
      .slice(1, 5)
      .map((r) => buildRecommendation(r.track, r.score, bookmarkedIds, false, effectiveTargetRole));

    res.status(200).json({
      success: true,
      hero: heroRecommendation,
      tailored: tailoredTracks,
      savedCount: bookmarkedIds.size,
    });
  } catch (error: any) {
    console.error('Failed to get recommendations:', error);
    res.status(500).json({ error: error.message || 'Database fetch error' });
  }
});

// 2. TOGGLE BOOKMARK / SAVE TRACK
recommendationsRouter.post('/bookmark', async (req: Request, res: Response) => {
  try {
    const { userId, trackId, trackTitle, domain, matchScore } = req.body;

    if (!userId || !trackId) {
      return res.status(400).json({ error: 'userId and trackId required' });
    }

    const existing = await prisma.userSavedTrack.findUnique({
      where: { userId_trackId: { userId, trackId } },
    });

    if (existing) {
      await prisma.userSavedTrack.delete({ where: { id: existing.id } });
      return res.status(200).json({ success: true, bookmarked: false, message: 'Track removed from saved' });
    }

    await prisma.userSavedTrack.create({
      data: {
        userId,
        trackId,
        trackTitle: trackTitle || 'Interview Track',
        domain: domain || 'General',
        matchScore: matchScore || 90,
      },
    });
    res.status(201).json({ success: true, bookmarked: true, message: 'Track saved to library' });
  } catch (error: any) {
    console.error('Failed to toggle bookmark:', error);
    res.status(500).json({ error: error.message || 'Bookmark transaction error' });
  }
});

import { Router, Request, Response } from 'express';
import { prisma } from '@packages/database';

export const questionPerformanceRouter = Router();


questionPerformanceRouter.get('/', async (req: Request, res: Response) => {
  try {
    const userId = (req.query.userId as string) || undefined;
    const questions = await prisma.questionPerformanceDossier.findMany({
      where: userId ? { userId } : undefined,
      orderBy: { questionNumber: 'asc' },
    });
    res.json(questions);
  } catch (error: any) {
    console.error('Error fetching question performance dossiers:', error);
    res.status(500).json({ error: error.message || 'Failed to fetch question performance data' });
  }
});

questionPerformanceRouter.get('/user/:userId', async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const dossiers = await prisma.questionPerformanceDossier.findMany({
      where: { userId },
      orderBy: { questionNumber: 'asc' },
    });
    res.json({ dossiers });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

questionPerformanceRouter.post('/generate/:simulationId', async (req: Request, res: Response) => {
  try {
    const { simulationId } = req.params;
    const session = await prisma.simulationSession.findUnique({
      where: { id: simulationId },
      include: { answers: true },
    });
    if (!session) {
      return res.status(404).json({ error: 'Simulation not found' });
    }

    const aiBaseUrl = process.env.AI_SERVICE_URL || 'http://localhost:8000/api/v1';
    const created: any[] = [];

    for (const answer of session.answers) {
      const prompt = `You are an interview answer analyst. Score this answer and respond with strict JSON: {"starScore":int,"clarityScore":int,"impactScore":int,"score":int,"category":string,"suggestedRewrite":string,"strengths":[string],"weaknesses":[string],"coachingNotes":string,"tags":[string]}\n\nQuestion: ${answer.questionText}\nAnswer: ${answer.candidateTranscript}`;

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

      const dossier = await prisma.questionPerformanceDossier.create({
        data: {
          userId: session.userId,
          questionNumber: answer.questionNumber,
          questionText: answer.questionText,
          category: String(parsed.category || 'General'),
          score: Number(parsed.score) || answer.starScore || 80,
          starScore: Number(parsed.starScore) || answer.starScore || 80,
          clarityScore: Number(parsed.clarityScore) || 80,
          impactScore: Number(parsed.impactScore) || 80,
          durationSec: 120,
          wpm: session.wpmAverage,
          fillerWords: session.fillerCount,
          candidateAnswer: answer.candidateTranscript,
          suggestedRewrite: String(parsed.suggestedRewrite || answer.suggestedRewrite || ''),
          strengths: Array.isArray(parsed.strengths) ? parsed.strengths.map(String) : [],
          weaknesses: Array.isArray(parsed.weaknesses) ? parsed.weaknesses.map(String) : [],
          coachingNotes: String(parsed.coachingNotes || answer.coachingNotes || ''),
          tags: Array.isArray(parsed.tags) ? parsed.tags.map(String) : [],
        },
      });
      created.push(dossier);
    }

    res.status(201).json({ success: true, dossiers: created });
  } catch (error: any) {
    console.error('Failed to generate dossiers:', error);
    res.status(500).json({ error: error.message });
  }
});

// 2. GET QUESTION BY NUMBER OR ID
questionPerformanceRouter.get('/:numberOrId', async (req: Request, res: Response) => {
  try {
    const { numberOrId } = req.params;
    const qNum = parseInt(numberOrId.replace(/^Q/i, ''), 10);

    let dossier = null;
    if (!isNaN(qNum)) {
      dossier = await prisma.questionPerformanceDossier.findFirst({
        where: { questionNumber: qNum },
      });
    }

    if (!dossier) {
      dossier = await prisma.questionPerformanceDossier.findUnique({
        where: { id: numberOrId },
      });
    }

    if (!dossier) {
      return res.status(404).json({ error: 'Question dossier not found' });
    }

    res.json(dossier);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// 3. UPDATE QUESTION DOSSIER (e.g. Coaching Notes, Model Rewrite, Scores)
questionPerformanceRouter.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { coachingNotes, suggestedRewrite, score, starScore, clarityScore, impactScore } = req.body;

    const updated = await prisma.questionPerformanceDossier.update({
      where: { id },
      data: {
        coachingNotes: coachingNotes !== undefined ? coachingNotes : undefined,
        suggestedRewrite: suggestedRewrite !== undefined ? suggestedRewrite : undefined,
        score: score !== undefined ? Number(score) : undefined,
        starScore: starScore !== undefined ? Number(starScore) : undefined,
        clarityScore: clarityScore !== undefined ? Number(clarityScore) : undefined,
        impactScore: impactScore !== undefined ? Number(impactScore) : undefined,
      },
    });

    res.json({
      success: true,
      message: 'Question performance dossier updated in PostgreSQL database',
      dossier: updated,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

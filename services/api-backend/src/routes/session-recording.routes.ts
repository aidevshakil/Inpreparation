import { Router, Request, Response } from 'express';
import { prisma } from '@packages/database';
import { canRecordSession } from '../utils/privacy';

export const sessionRecordingRouter = Router();

sessionRecordingRouter.post('/', async (req: Request, res: Response) => {
  try {
    const { userId, simulationId, mediaUrl, durationSec, mimeType } = req.body;
    if (!userId || !mediaUrl) {
      return res.status(400).json({ error: 'userId and mediaUrl are required' });
    }

    const allowed = await canRecordSession(userId);
    if (!allowed) {
      return res.status(403).json({ error: 'User has not consented to session recording' });
    }

    const recording = await (prisma as any).sessionRecording.create({
      data: {
        userId,
        simulationId: simulationId || null,
        mediaUrl,
        durationSec: Number(durationSec) || 0,
        mimeType: mimeType || 'video/webm',
      },
    });

    res.status(201).json({ success: true, recording });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

sessionRecordingRouter.get('/user/:userId', async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const recordings = await (prisma as any).sessionRecording.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
    res.json({ recordings });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

sessionRecordingRouter.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const recording = await (prisma as any).sessionRecording.findUnique({ where: { id } });
    if (!recording) {
      return res.status(404).json({ error: 'Recording not found' });
    }
    res.json(recording);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

sessionRecordingRouter.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await (prisma as any).sessionRecording.delete({ where: { id } });
    res.json({ success: true, message: 'Recording deleted' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

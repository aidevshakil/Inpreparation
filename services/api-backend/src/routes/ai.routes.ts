import { Router, Request, Response } from 'express';
import { prisma } from '@packages/database';

export const aiRouter = Router();

// Endpoint that saves conversation to Prisma and queries AI service
aiRouter.post('/chat', async (req: Request, res: Response) => {
  try {
    const { userId, conversationId, message } = req.body;

    // 1. Get or create conversation in Prisma
    let convId = conversationId;
    if (!convId && userId) {
      const conv = await prisma.conversation.create({
        data: {
          userId,
          title: message?.slice(0, 30) || 'New Conversation',
        },
      });
      convId = conv.id;
    }

    // 2. Record user message in Prisma DB
    if (convId && message) {
      await prisma.message.create({
        data: {
          conversationId: convId,
          role: 'user',
          content: message,
        },
      });
    }

    let trainingOptOut = false;
    if (userId) {
      try {
        const profile = await prisma.candidateProfile.findUnique({ where: { userId } });
        trainingOptOut = profile ? profile.allowAiTrainingUsage === false : true;
      } catch {
        trainingOptOut = true;
      }
    }

    const aiBaseUrl = process.env.AI_SERVICE_URL || 'http://localhost:8000/api/v1';
    let aiResponse: globalThis.Response;
    try {
      aiResponse = await fetch(`${aiBaseUrl}/chat/completions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [{ role: 'user', content: message }],
          trainingOptOut,
        }),
      });
    } catch (e: any) {
      return res.status(502).json({ error: 'AI service unavailable', details: e.message, conversationId: convId });
    }

    if (!aiResponse.ok) {
      return res.status(502).json({ error: 'AI service unavailable', status: aiResponse.status, conversationId: convId });
    }

    const data: any = await aiResponse.json();
    const aiReply = data.reply || '';

    if (convId) {
      await prisma.message.create({
        data: {
          conversationId: convId,
          role: 'assistant',
          content: aiReply,
        },
      });
    }

    res.json({
      conversationId: convId,
      reply: aiReply,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

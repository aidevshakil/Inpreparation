import { Router, Request, Response } from 'express';
import { prisma } from '@packages/database';

export const notificationRouter = Router();

// GET all notifications for a user
notificationRouter.get('/user/:userId', async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const limit = parseInt(req.query.limit as string) || 20;

    const notifications = await prisma.notification.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: limit,
    });

    const unreadCount = await prisma.notification.count({
      where: { userId, isRead: false },
    });

    res.json({
      success: true,
      notifications,
      unreadCount,
    });
  } catch (error: any) {
    console.error('Failed to get notifications:', error);
    res.status(500).json({ error: error.message || 'Database error' });
  }
});

// PATCH to mark a specific notification as read
notificationRouter.patch('/read/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const notification = await prisma.notification.update({
      where: { id },
      data: { isRead: true },
    });

    res.json({ success: true, notification });
  } catch (error: any) {
    console.error('Failed to mark notification as read:', error);
    res.status(500).json({ error: error.message || 'Database error' });
  }
});

// PATCH to mark all notifications for a user as read
notificationRouter.patch('/read-all/:userId', async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    await prisma.notification.updateMany({
      where: { userId, isRead: false },
      data: { isRead: true },
    });

    res.json({ success: true, message: 'All notifications marked as read' });
  } catch (error: any) {
    console.error('Failed to mark all notifications as read:', error);
    res.status(500).json({ error: error.message || 'Database error' });
  }
});

// POST to create a notification (usually called internally, but exposing for ease of use/admin)
notificationRouter.post('/user/:userId', async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { title, message, type, linkUrl } = req.body;

    const notification = await prisma.notification.create({
      data: {
        userId,
        title,
        message,
        type: type || 'system',
        linkUrl,
      },
    });

    res.status(201).json({ success: true, notification });
  } catch (error: any) {
    console.error('Failed to create notification:', error);
    res.status(500).json({ error: error.message || 'Database error' });
  }
});

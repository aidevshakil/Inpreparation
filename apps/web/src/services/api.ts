import { AIChatMessage } from '@packages/types';

const NODE_BACKEND_URL = (import.meta as any).env?.VITE_API_URL || 'http://localhost:5000/api';
const PYTHON_AI_URL = (import.meta as any).env?.VITE_AI_SERVICE_URL || 'http://localhost:8000/api/v1';

// 1. Send Chat via Node.js Backend with Prisma DB Persistence
export async function sendChatWithPersistence(userId: string, conversationId: string | null, message: string) {
  const response = await fetch(`${NODE_BACKEND_URL}/ai/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, conversationId, message }),
  });

  if (!response.ok) {
    throw new Error(`Prisma Backend error: ${response.statusText}`);
  }

  return response.json();
}

// 2. Send Chat directly to Python AI Microservice (FastAPI)
export async function sendChatMessage(messages: AIChatMessage[]) {
  const response = await fetch(`${PYTHON_AI_URL}/chat/completions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      messages: messages.map((m) => ({ role: m.role, content: m.content })),
      model: 'gpt-4o-mini',
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    throw new Error(`AI Service error: ${response.statusText}`);
  }

  return response.json();
}

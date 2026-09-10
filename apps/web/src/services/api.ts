import { AIChatMessage } from '@packages/types';

const NODE_BACKEND_URL = (import.meta as any).env?.VITE_API_URL || 'http://localhost:5000/api';
const PYTHON_AI_URL = (import.meta as any).env?.VITE_AI_SERVICE_URL || 'http://localhost:8000/api/v1';

// -------------------------------------------------------------
// 1. Simulation & Scorecard Persistence (PostgreSQL / Prisma)
// -------------------------------------------------------------
export interface SaveSimulationPayload {
  userId?: string | null;
  roleTrack: string;
  seniorityLevel?: string;
  overallScore: number;
  technicalScore: number;
  structureScore: number;
  pacingScore: number;
  gazeScore: number;
  wpmAverage: number;
  fillerCount: number;
  durationSeconds: number;
  feedbackSummary?: string;
  answers?: Array<{
    questionNumber: number;
    questionText: string;
    candidateTranscript: string;
    starScore: number;
    suggestedRewrite?: string;
    coachingNotes?: string;
  }>;
}

export async function saveSimulationScorecard(payload: SaveSimulationPayload) {
  try {
    const response = await fetch(`${NODE_BACKEND_URL}/simulations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Failed to save simulation to DB: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.warn('Backend offline or unreachable, simulated local fallback:', error);
    return {
      success: true,
      simulated: true,
      session: {
        id: `local-sim-${Date.now()}`,
        ...payload,
        createdAt: new Date().toISOString(),
      },
    };
  }
}

export async function getRecentSimulations(limit = 10) {
  try {
    const response = await fetch(`${NODE_BACKEND_URL}/simulations?limit=${limit}`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    console.warn('Using local simulation fallback history:', error);
    return [];
  }
}

export async function getUserSimulationHistory(userId: string) {
  try {
    const response = await fetch(`${NODE_BACKEND_URL}/simulations/user/${userId}`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    console.warn('Failed to fetch user simulation history:', error);
    return { totalSessions: 0, averageOverall: 0, history: [] };
  }
}

// -------------------------------------------------------------
// 2. Resume Profile Ingestion (PostgreSQL / Prisma)
// -------------------------------------------------------------
export interface UploadResumePayload {
  userId?: string | null;
  fileName: string;
  fileSize: number;
  targetRole?: string;
  skills?: string[];
  experienceYears?: number;
  parsedSummary?: string;
}

export async function uploadResumeProfile(payload: UploadResumePayload) {
  try {
    const response = await fetch(`${NODE_BACKEND_URL}/resumes/upload`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Resume upload failed: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.warn('Using local resume parser fallback:', error);
    return {
      success: true,
      simulated: true,
      resume: {
        id: `local-resume-${Date.now()}`,
        ...payload,
        createdAt: new Date().toISOString(),
      },
    };
  }
}

// -------------------------------------------------------------
// 3. User Authentication & Profile
// -------------------------------------------------------------
export async function loginUser(email: string) {
  try {
    const response = await fetch(`${NODE_BACKEND_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) throw new Error(`Login failed: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.warn('Using demo user session:', error);
    return {
      success: true,
      user: {
        id: 'demo-user-1',
        email,
        name: email.split('@')[0],
        targetRole: 'Senior Frontend Engineer',
      },
    };
  }
}

// -------------------------------------------------------------
// 4. Send Chat with Prisma DB Persistence
// -------------------------------------------------------------
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

// -------------------------------------------------------------
// 5. Send Chat directly to Python AI Microservice (FastAPI)
// -------------------------------------------------------------
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

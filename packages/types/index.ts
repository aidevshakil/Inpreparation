// Shared Data Models and API Contracts

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user' | 'moderator';
  avatarUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthSession {
  token: string;
  refreshToken: string;
  user: User;
  expiresAt: string;
}

// AI Service API Contracts
export interface AIChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
}

export interface AIChatRequest {
  messages: AIChatMessage[];
  model?: string;
  temperature?: number;
  maxTokens?: number;
  stream?: boolean;
}

export interface AIChatResponse {
  message: AIChatMessage;
  usage: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
}

export interface EmbeddingRequest {
  texts: string[];
  model?: string;
}

export interface EmbeddingResponse {
  embeddings: number[][];
  model: string;
  dimensions: number;
}

// Admin Analytics Types
export interface SystemMetric {
  name: string;
  value: number;
  change: number; // percentage
  status: 'up' | 'down' | 'neutral';
}

export interface AIUsageStats {
  date: string;
  totalTokens: number;
  activeRequests: number;
  averageLatencyMs: number;
}

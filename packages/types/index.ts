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

// -------------------------------------------------------------
// Career Diagnostic Assessment Types (#19 - #23)
// -------------------------------------------------------------
export interface DiagnosticPromptResponse {
  questionNumber: number;
  questionText: string;
  transcript: string;
  audioDurationSeconds: number;
  wpm: number;
  clarityScore: number;
  structureScore: number;
  starCompliance: number;
  confidenceRating: number;
}

export interface DiagnosticIntakeData {
  id?: string;
  userId?: string | null;
  targetRole: string;
  seniorityTier: string;
  targetCompanyTypes: string[];
  focusAreas: string[];
  completedQuestionsCount: number;
  totalDurationSeconds: number;
  status: 'in_progress' | 'completed' | 'analyzed';
  responses: DiagnosticPromptResponse[];
  createdAt?: string;
}

export interface DiagnosticPipelineResult {
  intakeId: string;
  overallScore: number;
  technicalRigorScore: number;
  systemsBreadthScore: number;
  leadershipStarScore: number;
  communicationDeliveryScore: number;
  strengths: string[];
  growthAreas: string[];
  calibratedSeniority: string;
  recommendedTrackIds: string[];
  timestamp: string;
}

// -------------------------------------------------------------
// AI Profile Analysis Dossier Types (#24)
// -------------------------------------------------------------
export interface CompetencyRadarScores {
  distributedSystems: number;
  architecturalTradeoffs: number;
  engineeringLeadership: number;
  communicationClarity: number;
  executionVelocity: number;
  cloudReliability: number;
}

export interface ProfileAnalysisDossier {
  id?: string;
  userId?: string | null;
  targetTitle: string;
  seniorityTier: string;
  primaryStack: string[];
  confidenceScore: number;
  readinessPercentage: number;
  verifiedDossierStatus: boolean;
  competencyScores: CompetencyRadarScores;
  coreStrengths: Array<{ title: string; desc: string; tag: string }>;
  priorityFocusAreas: Array<{ title: string; gap: string; recommendation: string }>;
  calibratedTrajectory: string;
  lastUpdated: string;
}

// -------------------------------------------------------------
// Recommended Interviews Types (#25)
// -------------------------------------------------------------
export interface RecommendedTrackItem {
  id: string;
  title: string;
  domain: string;
  matchScore: number;
  isHero?: boolean;
  isBookmarked?: boolean;
  questionsCount: number;
  estimatedDuration: string;
  difficulty: string;
  responseMode: string;
  skills: string[];
  rationale: string;
  concurrencyTarget?: string;
  rubricSummary: Array<{ title: string; weight: string; description: string }>;
}

// -------------------------------------------------------------
// AI CV Analysis & Dossier Extraction Types (#26)
// -------------------------------------------------------------
export interface CvSkillTaxonomyCategory {
  title: string;
  skills: string[];
}

export interface CvWorkExperienceItem {
  title: string;
  badge?: string;
  company: string;
  location: string;
  duration: string;
  tenureScore: string;
  bullets: string[];
  stack: string[];
  metricsCount?: number;
}

export interface CvProjectItem {
  title: string;
  badge?: string;
  badgeColor?: string;
  role?: string;
  subtitle?: string;
  timeframe?: string;
  description: string;
  metrics?: string;
  stack?: string[];
  skills?: string[];
}

export interface CvRoleAlignmentItem {
  title: string;
  matchScore: string;
  badgeBg: string;
  badgeColor: string;
  badgeBorder: string;
  description: string;
  actionLink?: string;
}

export interface CvAnalysisResult {
  professionalSummary: string;
  overallStrengthScore: number;
  readinessPercentage: number;
  skillsTaxonomy: CvSkillTaxonomyCategory[];
  workExperience: CvWorkExperienceItem[];
  projects: CvProjectItem[];
  roleAlignments: CvRoleAlignmentItem[];
  technicalCoverage: Record<string, number>;
  improvements: string[];
  createdAt?: string;
}

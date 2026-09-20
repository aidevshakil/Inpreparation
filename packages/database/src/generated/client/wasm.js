
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  name: 'name',
  passwordHash: 'passwordHash',
  role: 'role',
  avatarUrl: 'avatarUrl',
  targetRole: 'targetRole',
  seniority: 'seniority',
  isEmailVerified: 'isEmailVerified',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ConversationScalarFieldEnum = {
  id: 'id',
  title: 'title',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MessageScalarFieldEnum = {
  id: 'id',
  conversationId: 'conversationId',
  role: 'role',
  content: 'content',
  tokensUsed: 'tokensUsed',
  createdAt: 'createdAt'
};

exports.Prisma.SimulationSessionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  roleTrack: 'roleTrack',
  seniorityLevel: 'seniorityLevel',
  overallScore: 'overallScore',
  technicalScore: 'technicalScore',
  structureScore: 'structureScore',
  pacingScore: 'pacingScore',
  gazeScore: 'gazeScore',
  wpmAverage: 'wpmAverage',
  fillerCount: 'fillerCount',
  durationSeconds: 'durationSeconds',
  status: 'status',
  feedbackSummary: 'feedbackSummary',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SimulationAnswerScalarFieldEnum = {
  id: 'id',
  sessionId: 'sessionId',
  questionNumber: 'questionNumber',
  questionText: 'questionText',
  candidateTranscript: 'candidateTranscript',
  starScore: 'starScore',
  suggestedRewrite: 'suggestedRewrite',
  coachingNotes: 'coachingNotes',
  createdAt: 'createdAt'
};

exports.Prisma.ResumeProfileScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  fileName: 'fileName',
  fileSize: 'fileSize',
  fileUrl: 'fileUrl',
  targetRole: 'targetRole',
  skills: 'skills',
  experienceYears: 'experienceYears',
  parsedSummary: 'parsedSummary',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DiagnosticIntakeScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  targetRole: 'targetRole',
  seniorityTier: 'seniorityTier',
  targetCompanyTypes: 'targetCompanyTypes',
  focusAreas: 'focusAreas',
  completedQuestionsCount: 'completedQuestionsCount',
  totalDurationSeconds: 'totalDurationSeconds',
  overallScore: 'overallScore',
  technicalRigorScore: 'technicalRigorScore',
  systemsBreadthScore: 'systemsBreadthScore',
  leadershipStarScore: 'leadershipStarScore',
  communicationScore: 'communicationScore',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DiagnosticPromptResponseScalarFieldEnum = {
  id: 'id',
  intakeId: 'intakeId',
  questionNumber: 'questionNumber',
  questionText: 'questionText',
  transcript: 'transcript',
  audioDurationSeconds: 'audioDurationSeconds',
  wpm: 'wpm',
  clarityScore: 'clarityScore',
  structureScore: 'structureScore',
  starCompliance: 'starCompliance',
  confidenceRating: 'confidenceRating',
  createdAt: 'createdAt'
};

exports.Prisma.ProfileAnalysisScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  targetTitle: 'targetTitle',
  seniorityTier: 'seniorityTier',
  primaryStack: 'primaryStack',
  confidenceScore: 'confidenceScore',
  readinessPercentage: 'readinessPercentage',
  verifiedDossierStatus: 'verifiedDossierStatus',
  distributedSystems: 'distributedSystems',
  architecturalTradeoffs: 'architecturalTradeoffs',
  engineeringLeadership: 'engineeringLeadership',
  communicationClarity: 'communicationClarity',
  executionVelocity: 'executionVelocity',
  cloudReliability: 'cloudReliability',
  calibratedTrajectory: 'calibratedTrajectory',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.UserSavedTrackScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  trackId: 'trackId',
  trackTitle: 'trackTitle',
  domain: 'domain',
  matchScore: 'matchScore',
  createdAt: 'createdAt'
};

exports.Prisma.AuditLogScalarFieldEnum = {
  id: 'id',
  action: 'action',
  details: 'details',
  userId: 'userId',
  createdAt: 'createdAt'
};

exports.Prisma.VerificationTokenScalarFieldEnum = {
  id: 'id',
  email: 'email',
  code: 'code',
  type: 'type',
  expiresAt: 'expiresAt',
  createdAt: 'createdAt'
};

exports.Prisma.CandidateProfileScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  phone: 'phone',
  location: 'location',
  language: 'language',
  currentRole: 'currentRole',
  targetRole: 'targetRole',
  seniority: 'seniority',
  yearsOfExperience: 'yearsOfExperience',
  currentIndustry: 'currentIndustry',
  targetIndustry: 'targetIndustry',
  skills: 'skills',
  skillDepths: 'skillDepths',
  jobTypes: 'jobTypes',
  workModalities: 'workModalities',
  interviewFocusAreas: 'interviewFocusAreas',
  difficulty: 'difficulty',
  careerGoal: 'careerGoal',
  allowSessionRecording: 'allowSessionRecording',
  allowAnonymizedTelemetry: 'allowAnonymizedTelemetry',
  allowAiTrainingUsage: 'allowAiTrainingUsage',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AiImprovementPlanScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  targetRole: 'targetRole',
  readinessScore: 'readinessScore',
  predictedTarget: 'predictedTarget',
  starMethodologyScore: 'starMethodologyScore',
  systemDesignScore: 'systemDesignScore',
  behavioralScore: 'behavioralScore',
  velocityWpm: 'velocityWpm',
  fillerRate: 'fillerRate',
  calibrationStatus: 'calibrationStatus',
  provenanceAssessment: 'provenanceAssessment',
  provenanceDate: 'provenanceDate',
  provenanceConfidence: 'provenanceConfidence',
  provenanceQuestionsCount: 'provenanceQuestionsCount',
  customTargetScore: 'customTargetScore',
  customIntensity: 'customIntensity',
  customFocusAreas: 'customFocusAreas',
  notes: 'notes',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PlanPracticeVectorScalarFieldEnum = {
  id: 'id',
  planId: 'planId',
  name: 'name',
  baselineScore: 'baselineScore',
  projectedScore: 'projectedScore',
  order: 'order'
};

exports.Prisma.PlanPracticeModuleScalarFieldEnum = {
  id: 'id',
  planId: 'planId',
  title: 'title',
  category: 'category',
  recommendedMin: 'recommendedMin',
  priority: 'priority',
  status: 'status',
  order: 'order'
};

exports.Prisma.PlanDayScheduleScalarFieldEnum = {
  id: 'id',
  planId: 'planId',
  dayNumber: 'dayNumber',
  title: 'title',
  focusArea: 'focusArea',
  durationMin: 'durationMin',
  drills: 'drills',
  status: 'status',
  completed: 'completed',
  order: 'order'
};

exports.Prisma.QuestionPerformanceDossierScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  questionNumber: 'questionNumber',
  questionText: 'questionText',
  category: 'category',
  score: 'score',
  starScore: 'starScore',
  clarityScore: 'clarityScore',
  impactScore: 'impactScore',
  durationSec: 'durationSec',
  wpm: 'wpm',
  fillerWords: 'fillerWords',
  candidateAnswer: 'candidateAnswer',
  suggestedRewrite: 'suggestedRewrite',
  breakdown: 'breakdown',
  strengths: 'strengths',
  weaknesses: 'weaknesses',
  coachingNotes: 'coachingNotes',
  tags: 'tags',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};


exports.Prisma.ModelName = {
  User: 'User',
  Conversation: 'Conversation',
  Message: 'Message',
  SimulationSession: 'SimulationSession',
  SimulationAnswer: 'SimulationAnswer',
  ResumeProfile: 'ResumeProfile',
  DiagnosticIntake: 'DiagnosticIntake',
  DiagnosticPromptResponse: 'DiagnosticPromptResponse',
  ProfileAnalysis: 'ProfileAnalysis',
  UserSavedTrack: 'UserSavedTrack',
  AuditLog: 'AuditLog',
  VerificationToken: 'VerificationToken',
  CandidateProfile: 'CandidateProfile',
  AiImprovementPlan: 'AiImprovementPlan',
  PlanPracticeVector: 'PlanPracticeVector',
  PlanPracticeModule: 'PlanPracticeModule',
  PlanDaySchedule: 'PlanDaySchedule',
  QuestionPerformanceDossier: 'QuestionPerformanceDossier'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

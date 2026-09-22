import path from 'path';
import dotenv from 'dotenv';

// Load root .env first, then local .env to override
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });
dotenv.config();

import express from 'express';
import cors from 'cors';
import rateLimit, { ipKeyGenerator } from 'express-rate-limit';
import pino from 'pino';
import pinoHttp from 'pino-http';
import { userRouter } from './routes/user.routes';
import { aiRouter } from './routes/ai.routes';
import { simulationRouter } from './routes/simulation.routes';
import { resumeRouter } from './routes/resume.routes';
import { authRouter } from './routes/auth.routes';
import { diagnosticRouter } from './routes/diagnostic.routes';
import { profileAnalysisRouter } from './routes/profile-analysis.routes';
import { profileRouter } from './routes/profile.routes';
import { recommendationsRouter } from './routes/recommendations.routes';
import { improvementPlanRouter } from './routes/improvement-plan.routes';
import { questionPerformanceRouter } from './routes/question-performance.routes';
import { adminRouter } from './routes/admin.routes';
import { roleCatalogRouter } from './routes/role-catalog.routes';
import { questionDossierCatalogRouter } from './routes/question-dossier-catalog.routes';
import { analyticsRouter } from './routes/analytics.routes';
import { sessionRecordingRouter } from './routes/session-recording.routes';
import { notificationRouter } from './routes/notification.routes';
import { requireRole } from './middleware/requireRole';
import { attachUser } from './middleware/authenticate';
import { errorHandler, notFoundHandler } from './middleware/errorHandler';

const app = express();
const PORT = process.env.PORT || process.env.BACKEND_PORT || 5000;

const logger = pino();
const httpLogger = pinoHttp({
  logger,
});

// CORS: parse comma-separated CORS_ORIGINS env var into allowlist.
// In development, default to localhost dev ports. In production, CORS_ORIGINS must be explicitly set.
const defaultDevOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
  'http://localhost:3002',
  'http://localhost:5173',
  'http://localhost:5174',
];
const configuredOrigins = (process.env.CORS_ORIGINS || '')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean);
const allowedOrigins =
  configuredOrigins.length > 0
    ? configuredOrigins
    : process.env.NODE_ENV === 'production'
    ? []
    : defaultDevOrigins;

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (curl, server-to-server, mobile apps)
      if (!origin) return callback(null, true);
      if (
        allowedOrigins.includes('*') ||
        allowedOrigins.includes(origin) ||
        origin.endsWith('.onrender.com')
      ) {
        return callback(null, true);
      }
      return callback(new Error(`CORS: origin ${origin} not allowed`));
    },
    credentials: true,
  })
);
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));
app.use(httpLogger);
app.use(attachUser);

// Rate limiters
const authOtpLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many OTP requests. Please try again in 15 minutes.' },
  keyGenerator: (req, res) => `${ipKeyGenerator(req.ip || '', 56)}:${(req.body?.email || '').toLowerCase()}`,
});
const authLoginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many login attempts. Please try again in 15 minutes.' },
  keyGenerator: (req, res) => `${ipKeyGenerator(req.ip || '', 56)}:${(req.body?.email || '').toLowerCase()}`,
});
const authVerifyLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many verification attempts. Please try again in 15 minutes.' },
  keyGenerator: (req, res) => `${ipKeyGenerator(req.ip || '', 56)}:${(req.body?.email || '').toLowerCase()}`,
});

// Apply per-endpoint auth limiters before mounting the router
app.use('/api/auth/register', authOtpLimiter);
app.use('/api/auth/send-otp', authOtpLimiter);
app.use('/api/auth/verify-otp', authVerifyLimiter);
app.use('/api/auth/login', authLoginLimiter);
app.use('/api/auth/google', authLoginLimiter);

// Mount API Routes
app.use('/api/users', userRouter);
app.use('/api/ai', aiRouter);
app.use('/api/simulations', simulationRouter);
app.use('/api/resumes', resumeRouter);
app.use('/api/auth', authRouter);
app.use('/api/diagnostic', diagnosticRouter);
app.use('/api/profile-analysis', profileAnalysisRouter);
app.use('/api/profile', profileRouter);
app.use('/api/recommendations', recommendationsRouter);
app.use('/api/improvement-plan', improvementPlanRouter);
app.use('/api/question-performance', questionPerformanceRouter);
app.use('/api/admin', requireRole('admin'), adminRouter);
app.use('/api/role-catalog', roleCatalogRouter);
app.use('/api/question-dossiers', questionDossierCatalogRouter);
app.use('/api/analytics', requireRole('admin'), analyticsRouter);
app.use('/api/session-recordings', sessionRecordingRouter);
app.use('/api/notifications', notificationRouter);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Node.js Prisma API Backend', timestamp: new Date() });
});

// 404 for unmatched routes and centralized error handler (must be last)
app.use(notFoundHandler);
app.use(errorHandler);

export { app };

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    logger.info(
      {
        port: PORT,
        baseUrl: `http://localhost:${PORT}/api`,
        allowedOrigins,
      },
      'Central API listening'
    );
  });
}

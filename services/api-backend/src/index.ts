import path from 'path';
import dotenv from 'dotenv';

// Load root .env first, then local .env to override
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });
dotenv.config();

import express from 'express';
import cors from 'cors';
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

const app = express();
const PORT = process.env.BACKEND_PORT || 5000;

const logger = pino();
const httpLogger = pinoHttp({
  logger,
});

app.use(cors());
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));
app.use(httpLogger);

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

app.listen(PORT, () => {
  logger.info(
    {
      port: PORT,
      baseUrl: `http://localhost:${PORT}/api`,
      allowedOrigins: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002'],
    },
    'Central API listening'
  );
});

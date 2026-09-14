import path from 'path';
import dotenv from 'dotenv';

// Load root .env first, then local .env to override
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });
dotenv.config();

import express from 'express';
import cors from 'cors';
import { userRouter } from './routes/user.routes';
import { aiRouter } from './routes/ai.routes';
import { simulationRouter } from './routes/simulation.routes';
import { resumeRouter } from './routes/resume.routes';
import { authRouter } from './routes/auth.routes';
import { diagnosticRouter } from './routes/diagnostic.routes';
import { profileAnalysisRouter } from './routes/profile-analysis.routes';
import { profileRouter } from './routes/profile.routes';
import { recommendationsRouter } from './routes/recommendations.routes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

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

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Node.js Prisma API Backend', timestamp: new Date() });
});

app.listen(PORT, () => {
  console.log(`🚀 Node.js Prisma API Backend running on http://localhost:${PORT}`);
});

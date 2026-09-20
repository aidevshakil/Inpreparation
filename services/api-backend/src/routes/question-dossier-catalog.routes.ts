import { Router, Request, Response } from 'express';
import { QUESTION_DOSSIER_CATALOG } from '../data/questionDossiers';

export const questionDossierCatalogRouter = Router();

questionDossierCatalogRouter.get('/catalog', async (_req: Request, res: Response) => {
  try {
    res.json(QUESTION_DOSSIER_CATALOG);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

import { Router, Request, Response } from 'express';
import { ROLE_DATA_CATALOG } from '../data/roleCatalog';

export const roleCatalogRouter = Router();

roleCatalogRouter.get('/', async (_req: Request, res: Response) => {
  try {
    const list = Object.keys(ROLE_DATA_CATALOG).map((slug) => ({
      slug,
      displayName: ROLE_DATA_CATALOG[slug].roleName || slug,
    }));
    res.json(list);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

roleCatalogRouter.get('/:roleSlug', async (req: Request, res: Response) => {
  try {
    const slug = decodeURIComponent(req.params.roleSlug);
    const data = ROLE_DATA_CATALOG[slug];
    if (!data) {
      return res.status(404).json({ error: `Role catalog not found: ${slug}` });
    }
    res.json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

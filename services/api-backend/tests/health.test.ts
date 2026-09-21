import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { app } from '../src/index';

describe('Health & 404', () => {
  it('GET /api/health returns ok', async () => {
    const res = await request(app).get('/api/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  it('unknown route returns 404 via notFoundHandler', async () => {
    const res = await request(app).get('/api/definitely-not-a-route');
    expect(res.status).toBe(404);
    expect(res.body.error).toMatch(/Route not found/);
  });
});

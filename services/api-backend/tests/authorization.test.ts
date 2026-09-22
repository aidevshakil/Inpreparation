import { describe, it, expect } from 'vitest';
import request from 'supertest';
import jwt from 'jsonwebtoken';
import { app } from '../src/index';

const JWT_SECRET = process.env.JWT_SECRET!;

describe('requireAuth / requireRole', () => {
  it('rejects admin routes without token (401)', async () => {
    const res = await request(app).get('/api/admin/stats');
    expect(res.status).toBe(401);
  });

  it('rejects admin routes with non-admin token (403)', async () => {
    const token = jwt.sign({ id: 'u1', role: 'user' }, JWT_SECRET);
    const res = await request(app)
      .get('/api/admin/stats')
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(403);
  });

  it('rejects invalid tokens (401 downstream)', async () => {
    const res = await request(app)
      .get('/api/admin/stats')
      .set('Authorization', 'Bearer garbage.token.here');
    expect(res.status).toBe(401);
  });

  it('set-password requires auth', async () => {
    const res = await request(app)
      .post('/api/auth/set-password')
      .send({ password: 'newpassword123' });
    expect(res.status).toBe(401);
  });
});

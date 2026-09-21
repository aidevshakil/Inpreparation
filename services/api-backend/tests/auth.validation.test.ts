import { describe, it, expect, beforeEach } from 'vitest';
import request from 'supertest';
import { app } from '../src/index';
import { prismaMock, resetPrismaMock } from './setup';
import bcrypt from 'bcryptjs';

beforeEach(() => resetPrismaMock());

describe('Auth validation (zod)', () => {
  it('rejects register with invalid email', async () => {
    const res = await request(app).post('/api/auth/register').send({ email: 'not-an-email' });
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('Validation failed');
    expect(res.body.details[0].path).toBe('email');
  });

  it('rejects verify-otp with non-6-digit code', async () => {
    const res = await request(app)
      .post('/api/auth/verify-otp')
      .send({ email: 'a@b.com', code: 'abc' });
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('Validation failed');
  });

  it('rejects login without password', async () => {
    const res = await request(app).post('/api/auth/login').send({ email: 'a@b.com' });
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('Validation failed');
  });

  it('rejects google with no token fields', async () => {
    const res = await request(app).post('/api/auth/google').send({});
    expect(res.status).toBe(400);
  });
});

describe('Login flow', () => {
  it('returns 401 for unknown user', async () => {
    prismaMock.user.findUnique.mockResolvedValueOnce(null);
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'nobody@example.com', password: 'password123' });
    expect(res.status).toBe(401);
    expect(res.body.error).toBe('Invalid credentials');
  });

  it('returns 401 for wrong password', async () => {
    const hash = await bcrypt.hash('correct-password', 4);
    prismaMock.user.findUnique.mockResolvedValueOnce({
      id: 'u1',
      email: 'u@x.com',
      role: 'user',
      passwordHash: hash,
    });
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'u@x.com', password: 'wrong-password' });
    expect(res.status).toBe(401);
  });

  it('issues JWT on successful login', async () => {
    const hash = await bcrypt.hash('correct-password', 4);
    prismaMock.user.findUnique.mockResolvedValueOnce({
      id: 'u1',
      email: 'u@x.com',
      role: 'user',
      passwordHash: hash,
      simulations: [],
    });
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'u@x.com', password: 'correct-password' });
    expect(res.status).toBe(200);
    expect(res.body.token).toBeTypeOf('string');
    expect(res.body.user.id).toBe('u1');
  });
});

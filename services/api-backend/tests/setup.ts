import { vi } from 'vitest';

process.env.NODE_ENV = 'test';
process.env.JWT_SECRET = 'test-secret-key-for-vitest-suite-only';

// Mock the shared prisma client so tests don't hit a real database.
export const prismaMock = {
  user: {
    findUnique: vi.fn(),
    create: vi.fn(),
    update: vi.fn(),
    count: vi.fn(),
    findMany: vi.fn(),
  },
  verificationToken: {
    findFirst: vi.fn(),
    deleteMany: vi.fn(),
    create: vi.fn(),
    delete: vi.fn(),
  },
  candidateProfile: {
    findUnique: vi.fn(),
  },
  simulationSession: {
    count: vi.fn(),
    findMany: vi.fn(),
    aggregate: vi.fn(),
  },
};

vi.mock('@packages/database', () => ({
  prisma: prismaMock,
}));

// Silence email sending in tests.
vi.mock('../src/services/email.service', () => ({
  sendOtpEmail: vi.fn(async () => ({ success: true, simulated: true })),
}));

export function resetPrismaMock() {
  for (const model of Object.values(prismaMock)) {
    for (const fn of Object.values(model)) {
      (fn as any).mockReset();
    }
  }
}

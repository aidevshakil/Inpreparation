import { PrismaClient } from './generated/client';
declare global {
    var prismaGlobal: PrismaClient | undefined;
}
export declare const prisma: PrismaClient<import("./generated/client").Prisma.PrismaClientOptions, never, import("./generated/client/runtime/library").DefaultArgs>;
export * from './generated/client';
export default prisma;
//# sourceMappingURL=index.d.ts.map
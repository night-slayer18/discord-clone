import {PrismaClient} from '@prisma/client'

declare global {
    var prisma: PrismaClient | undefined
};

export const db = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = db // only save the db instance if we're not in production

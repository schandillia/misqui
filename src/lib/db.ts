import { PrismaClient } from "@prisma/client"

declare global {
	// eslint-disable-next-line vars-on-top, no-var
	var prisma: PrismaClient | undefined
}

// eslint-disable-next-line import/prefer-default-export
export const db = globalThis.prisma || new PrismaClient()

if (process.env.NODE_ENV !== "production") globalThis.prisma = db

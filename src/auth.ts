import NextAuth from "next-auth"
import authConfig from "@/auth.config"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "@/lib/db"

export const {
	handlers: { GET, POST },
	auth,
	signOut,
} = NextAuth({
	secret: process.env.NEXTAUTH_SECRET,
	adapter: PrismaAdapter(db),
	session: { strategy: "jwt" },
	...authConfig,
})

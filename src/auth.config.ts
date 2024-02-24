import Google from "next-auth/providers/google"
import AppleProvider from "next-auth/providers/apple"
import type { NextAuthConfig } from "next-auth"
// import { LoginSchema } from "@/schemas"

export default {
	providers: [
		Google({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		AppleProvider,
	],
} satisfies NextAuthConfig

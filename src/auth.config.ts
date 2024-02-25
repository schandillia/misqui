import Google from "next-auth/providers/google"
import AppleProvider from "next-auth/providers/apple"
// import EmailProvider from "next-auth/providers/email"
import type { NextAuthConfig } from "next-auth"

export default {
	providers: [
		// EmailProvider({
		// 	server: {
		// 		host: process.env.SMTP_HOST,
		// 		port: Number(process.env.SMTP_PORT),
		// 		auth: {
		// 			user: process.env.SMTP_USER,
		// 			pass: process.env.SMTP_PASSWORD,
		// 		},
		// 	},
		// 	from: process.env.EMAIL_FROM,
		// }),
		Google({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		AppleProvider,
	],
} satisfies NextAuthConfig

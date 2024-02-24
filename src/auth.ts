import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import AppleProvider from "next-auth/providers/apple"

export const {
	handlers: { GET, POST },
	auth,
} = NextAuth({
	providers: [Google, AppleProvider],
})

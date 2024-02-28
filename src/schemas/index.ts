import * as z from "zod"

export const LoginSchema = z.object({
	email: z.string().email({
		message: "Please enter a valid email.",
	}),
})

export const ProfileSchema = z.object({
	email: z.string().email({
		message: "Please enter a valid email.",
	}),
})

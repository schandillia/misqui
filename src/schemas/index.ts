import * as z from "zod"

export const LoginSchema = z.object({
	email: z.string().email({
		message: "Please enter a valid email.",
	}),
})

// ProfileSchema:
// First name
// Last name
// Display name
// Date of birth

// AccountSchema:
// Username
// secondary email
// country
// Delete account

// PrivacySchema:
// Search index toggle
// Allow LLM toggle

// DisplaySchema:
// Theme
// Font size

export const AccountSchema = z.object({
	username: z.string().trim().optional(),
	secondaryEmail: z.string().email({
		message: "Please enter a valid email.",
	}),
	country: z.string().trim().min(2, "Please enter a valid country code."),
})

import * as z from "zod"

const LoginSchema = z.object({
	email: z.string().email({
		message: "Please enter a valid email",
	}),
})

export default LoginSchema

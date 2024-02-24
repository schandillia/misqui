"use server"

import * as z from "zod"
import LoginSchema from "@/schemas"

const login = async (values: z.infer<typeof LoginSchema>) => {
	const validatedFields = LoginSchema.safeParse(values)
	if (!validatedFields.success) return { error: "Invalid email" }
	return { success: "Email sent" }
}

export default login

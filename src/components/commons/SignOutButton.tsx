"use client"

import logout from "@/actions/logout"

export default function SignoutButton() {
	const handleSignout = async () => {
		await logout()
	}

	return (
		<button type="submit" onClick={handleSignout}>
			Sign out
		</button>
	)
}
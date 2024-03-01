// Example of session retrieval in client component

"use client"

import useCurrentUser from "@/hooks/use-current-user"

function Page() {
	const user = useCurrentUser()

	return (
		<main className="flex flex-col items-center justify-between p-24">
			<div className="container">
				<div>CLIENT</div>
				<div>{user?.id}</div>
				<div>{user?.name}</div>
				<div>{user?.email}</div>
				<div>{user?.image}</div>
			</div>
		</main>
	)
}

export default Page

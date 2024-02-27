// Example of session retrieval in server component

import { auth } from "@/auth"

const Page = async () => {
	const session = await auth()
	const user = session?.user

	return (
		<main className="flex flex-col items-center justify-between p-24">
			<div className="container">
				<div>SERVER</div>
				<div>{user?.id}</div>
				<div>{user?.name}</div>
				<div>{user?.email}</div>
				<div>{user?.image}</div>
			</div>
		</main>
	)
}

export default Page

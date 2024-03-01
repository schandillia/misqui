import React from "react"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Privacy",
}

function Page() {
	return (
		<main className="flex flex-col items-center justify-between p-24">
			<div className="container">
				<div>PRIVACY</div>
			</div>
		</main>
	)
}

export default Page

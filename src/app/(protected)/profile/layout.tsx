import Footer from "@/components/commons/Footer"
import MaxWidthWrapper from "@/components/commons/MaxWidthWrapper"
import Navbar from "@/components/commons/Navbar"
import type { Metadata } from "next"
import { SessionProvider } from "next-auth/react"
import { auth } from "@/auth"

const brand = process.env.NEXT_PUBLIC_BRAND

export const metadata: Metadata = {
	title: `${brand} Profile`,
	description: "Custom profile page",
}

export default async function Layout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const session = await auth()
	return (
		<SessionProvider session={session}>
			<div className="flex flex-col min-h-screen">
				<Navbar />
				<MaxWidthWrapper>{children}</MaxWidthWrapper>
				<Footer />
			</div>
		</SessionProvider>
	)
}

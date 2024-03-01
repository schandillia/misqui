import Footer from "@/components/commons/Footer"
import MaxWidthWrapper from "@/components/commons/MaxWidthWrapper"
import Navbar from "@/components/commons/Navbar"
import type { Metadata } from "next"

const brand = process.env.NEXT_PUBLIC_BRAND

export const metadata: Metadata = {
	title: `${brand} Server`,
	description: "Custom server component page",
}

export default async function Layout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<MaxWidthWrapper>{children}</MaxWidthWrapper>
			<Footer />
		</div>
	)
}

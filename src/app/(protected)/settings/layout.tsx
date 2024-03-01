import Footer from "@/components/commons/Footer"
import MaxWidthWrapper from "@/components/commons/MaxWidthWrapper"
import Navbar from "@/components/commons/Navbar"
import type { Metadata } from "next"
import Sidebar from "@/app/(protected)/settings/_components/sidebar"
import { Separator } from "@/components/ui/separator"

const brand = process.env.NEXT_PUBLIC_BRAND

export const metadata: Metadata = {
	title: {
		template: `%s | ${brand} Settings`,
		default: `Account | ${brand} Settings`,
	},
	description: `${brand} settings page.`,
}

export default async function Layout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<MaxWidthWrapper>
				<div className="py-5">
					<h1 className="text-5xl font-bold text-soft dark:text-soft-dark leading-tight">
						Settings
					</h1>
					<Separator className="my-2" />
				</div>
				<div className="flex flex-row gap-3">
					<Sidebar />
					{children}
				</div>
			</MaxWidthWrapper>
			<Footer />
		</div>
	)
}

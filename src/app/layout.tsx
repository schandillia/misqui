import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { SessionProvider } from "next-auth/react"
import { auth } from "@/auth"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Misqui",
	description: "Generic style template for Misqui websites",
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const session = await auth()
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.className} flex flex-col min-h-screen`}>
				<SessionProvider session={session}>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						{children}
					</ThemeProvider>
				</SessionProvider>
			</body>
		</html>
	)
}

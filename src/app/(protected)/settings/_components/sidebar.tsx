"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

const settingsLinks = [
	{
		path: "/settings",
		text: "Account",
	},
	{
		path: "/settings/privacy",
		text: "Privacy",
	},
	{
		path: "/settings/appearance",
		text: "Appearance",
	},
	{
		path: "/settings/notifications",
		text: "Notifications",
	},
	{
		path: "/settings/subscription",
		text: "Subscription",
	},
]

function Sidebar() {
	const pathname = usePathname()
	return (
		<div className="flex flex-col gap-2">
			{settingsLinks.map((link) => (
				<Button
					key={link.path}
					asChild
					variant={pathname === link.path ? "secondary" : "ghost"}
					className="justify-start"
				>
					<Link href={link.path}>{link.text}</Link>
				</Button>
			))}
		</div>
	)
}

export default Sidebar

"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

function Sidebar() {
	const pathname = usePathname()
	return (
		<div className="flex flex-col">
			<Button
				asChild
				variant={pathname === "/settings" ? "default" : "ghost"}
			>
				<Link href="/settings">Account and Security</Link>
			</Button>
			<Button
				asChild
				variant={pathname === "/settings/privacy" ? "default" : "ghost"}
			>
				<Link href="/settings/privacy">Privacy</Link>
			</Button>
			<Button
				asChild
				variant={
					pathname === "/settings/appearance" ? "default" : "ghost"
				}
			>
				<Link href="/settings/appearance">Appearance</Link>
			</Button>
		</div>
	)
}

export default Sidebar

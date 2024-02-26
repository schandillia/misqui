import React from "react"
import Link from "next/link"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import initials from "@/lib/initials"
import { User } from "lucide-react"
import SignoutButton from "@/components/commons/SignOutButton"

interface UserAccountNavProps {
	email: string | undefined
	name: string | undefined
	imageUrl: string
}

function UserAccountNav({ email, imageUrl, name }: UserAccountNavProps) {
	let displayName

	if (name) {
		displayName = initials(name)
	} else if (email) {
		displayName = email.trim().charAt(0)
	} else {
		displayName = <User />
	}

	const menuItems = [
		{ label: "Dashboard", href: "/dashboard" },
		{ label: "Settings", href: "/settings" },
	]

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild className="overflow-visible">
				<Button className="rounded-full size-6 aspect-square text-primary dark:text-softer">
					<Avatar>
						<AvatarImage src={imageUrl} alt={name} />
						<AvatarFallback>{displayName}</AvatarFallback>
					</Avatar>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<div className="flex items-center justify-start gap-2 p-2">
					<div className="flex flex-col space-y-0.5 leading-none">
						{name && <p className="font-medium text-sm">{name}</p>}
						{email && (
							<p className="w-[200px] truncate text-xs text-gray-600 dark:text-gray-400">
								{email}
							</p>
						)}
					</div>
				</div>
				<DropdownMenuSeparator />
				{menuItems.map((menuItem) => {
					return (
						<React.Fragment key={menuItem.label}>
							<DropdownMenuItem
								asChild
								className="cursor-pointer"
							>
								<Link href={menuItem.href}>
									{menuItem.label}
								</Link>
							</DropdownMenuItem>
							<DropdownMenuSeparator />
						</React.Fragment>
					)
				})}
				<DropdownMenuItem className="cursor-pointer">
					<SignoutButton />
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default UserAccountNav

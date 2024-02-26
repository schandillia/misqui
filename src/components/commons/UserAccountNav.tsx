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

interface UserAccountNavProps {
	email: string | undefined
	name: string
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

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild className="overflow-visible">
				<Button className="rounded-full size-8 aspect-square text-primary dark:text-softer">
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
				<DropdownMenuItem asChild>
					<Link href="/dashboard">Dashboard</Link>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem asChild>
					<Link href="/dashboard">Something Else</Link>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem className="cursor-pointer">
					{/* <SignoutButton /> */}
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
export default UserAccountNav

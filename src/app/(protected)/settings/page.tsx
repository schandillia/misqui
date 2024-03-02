"use client"

import { Input } from "@/components/ui/input"
import useCurrentUser from "@/hooks/use-current-user"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

function Page() {
	const user = useCurrentUser()

	return (
		<main className="flex flex-col justify-between px-5">
			<Table>
				<TableBody>
					<TableRow className="hover:bg-transparent hover:text-inherit">
						<TableCell className="font-medium">Username</TableCell>
						<TableCell>
							<Input
								disabled
								type="text"
								defaultValue="someone123"
								className="border-0 shadow-none focus:ring-0 h-full"
							/>
						</TableCell>
					</TableRow>
					<TableRow className="hover:bg-transparent hover:text-inherit">
						<TableCell className="font-medium">
							Primary email
						</TableCell>
						<TableCell>
							<Input
								disabled
								type="email"
								defaultValue={user?.email || ""}
								className="border-0 shadow-none focus:ring-0 h-full"
							/>
						</TableCell>
					</TableRow>
					<TableRow className="hover:bg-transparent hover:text-inherit">
						<TableCell className="font-medium">
							Secondary email
						</TableCell>
						<TableCell>
							<Input
								disabled
								type="email"
								defaultValue="some@secondemail.com"
								className="border-0 shadow-none focus:ring-0 h-full"
							/>
						</TableCell>
					</TableRow>
					<TableRow className="hover:bg-transparent hover:text-inherit">
						<TableCell className="font-medium">Country</TableCell>
						<TableCell>
							<Input
								disabled
								type="text"
								defaultValue="India"
								className="border-0 shadow-none focus:ring-0 h-full"
							/>
						</TableCell>
					</TableRow>
					<TableRow className="hover:bg-transparent hover:text-inherit">
						<TableCell>
							<Button
								variant="link"
								className="text-destructive dark:text-red-500 hover:no-underline pl-0"
							>
								Delete Account
							</Button>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>

			{/* <div className="container">
				<div>SETTINGS</div>
				<div>{user?.id}</div>
				<div>{user?.name}</div>
				<div>{user?.email}</div>
				<div>{user?.image}</div>
			</div> */}
		</main>
	)
}

export default Page

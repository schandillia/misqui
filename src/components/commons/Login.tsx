import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FcGoogle } from "react-icons/fc"
import { FaApple } from "react-icons/fa6"
import { LogIn } from "lucide-react"
import Divider from "@/components/commons/Divider"

export default function Login() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button size="sm">
					Login <LogIn className="ml-2" />
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px] flex flex-col">
				<DialogHeader>
					<DialogTitle className="text-center text-3xl">
						Login
					</DialogTitle>
					<DialogDescription className="text-center">
						Welcome back
					</DialogDescription>
				</DialogHeader>
				<div className="flex flex-col gap-4 py-4">
					<div className="flex flex-col gap-2">
						<Label htmlFor="email" className="font-semibold">
							Email
						</Label>
						<Input
							id="email"
							defaultValue="john@doe.com"
							className="flex-grow"
						/>
					</div>
				</div>
				<DialogFooter>
					<div className="flex flex-col w-full gap-5">
						<Button type="submit" className="w-full">
							Login
						</Button>
						<Divider text="Or login using" />
						<div className="flex flex-row gap-2 w-full">
							<Button
								type="submit"
								variant="outline"
								className="w-1/2"
							>
								<FcGoogle className="size-5" />
							</Button>
							<Button
								type="submit"
								variant="outline"
								className="w-1/2"
							>
								<FaApple className="size-5" />
							</Button>
						</div>
					</div>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}

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
import { FcGoogle } from "react-icons/fc"
import { FaApple } from "react-icons/fa6"
import { LogIn } from "lucide-react"
import Divider from "@/components/commons/Divider"
import Link from "next/link"

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
						{process.env.BRAND}
					</DialogTitle>
					<DialogDescription className="text-center">
						Login to continue
					</DialogDescription>
				</DialogHeader>
				<div className="flex flex-col mt-5 gap-2">
					<Button type="submit" variant="outline" className="w-full">
						<FcGoogle className="size-5 mr-2" />
						Continue with Google
					</Button>
					<Button type="submit" variant="outline" className="w-full">
						<FaApple className="size-5 mr-2" />
						Continue with Apple
					</Button>
				</div>
				<Divider text="Or" />
				<form
					method="post"
					action="/api/auth/signin/email"
					className="flex flex-col"
				>
					<div className="flex flex-col gap-2">
						<Input
							id="email"
							placeholder="john@doe.com"
							className="flex-grow bg-softest dark:bg-softest-dark"
						/>
						<Button type="submit" className="w-full mt-2">
							Continue with email
						</Button>
					</div>
				</form>
				<DialogFooter>
					<div className="w-full mt-5 text-xs">
						<p className="text-center text-softer dark:text-softer-dark">
							By continuing, you agree to {process.env.BRAND}’s
						</p>
						<p className="text-center text-softer dark:text-softer-dark">
							<Link href="/terms" className="text-primary">
								Terms of Service
							</Link>{" "}
							and{" "}
							<Link href="/terms" className="text-primary">
								Privacy Policy
							</Link>
							.
						</p>
					</div>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}

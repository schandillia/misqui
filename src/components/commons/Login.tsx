/* eslint-disable react/jsx-props-no-spreading */

"use client"

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
import { Loader2, LogIn } from "lucide-react"
import Divider from "@/components/commons/Divider"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form"
import * as z from "zod"
import { LoginSchema } from "@/schemas"
import FormError from "@/components/commons/FormError"
import FormSuccess from "@/components/commons/FormSuccess"
import login from "@/actions/login"
import { useTransition, useState } from "react"
import logo from "@/app/brand/logo.svg"
import Image from "next/image"
import { signIn } from "next-auth/react"
import { usePathname } from "next/navigation"

export default function Login() {
	const [isPending, startTransition] = useTransition()
	const [error, setError] = useState<string | undefined>("")
	const [success, setSuccess] = useState<string | undefined>("")

	const pathname = usePathname()

	const form = useForm<z.infer<typeof LoginSchema>>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: "",
		},
	})

	const onSubmit = (values: z.infer<typeof LoginSchema>) => {
		setError("")
		setSuccess("")
		startTransition(() => {
			login(values).then((data) => {
				setError(data.error)
				setSuccess(data.success)
			})
		})
	}

	const handleOpenChange = () => {
		form.reset()
		setError("")
		setSuccess("")
	}

	const onClick = (provider: "google" | "apple") => {
		signIn(provider, { callbackUrl: pathname })
	}

	return (
		<Dialog onOpenChange={handleOpenChange}>
			<DialogTrigger asChild>
				<Button size="sm">
					Login <LogIn className="ml-2" />
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px] flex flex-col">
				<DialogHeader>
					<DialogTitle className="text-center text-3xl mx-auto">
						<Image
							src={logo}
							alt={process.env.NEXT_PUBLIC_BRAND!}
							className="size-16"
							style={{
								filter: "invert(33%) sepia(88%) saturate(5555%) hue-rotate(255deg) brightness(95%) contrast(95%)",
							}}
						/>
					</DialogTitle>
					<DialogDescription className="text-center">
						Login to continue
					</DialogDescription>
				</DialogHeader>
				<div className="flex flex-col mt-5 gap-2">
					<Button
						type="submit"
						variant="outline"
						className="w-full"
						onClick={() => onClick("google")}
					>
						<FcGoogle className="size-5 mr-2" />
						Continue with Google
					</Button>
					<Button
						type="submit"
						variant="outline"
						className="w-full"
						onClick={() => onClick("apple")}
					>
						<FaApple className="size-5 mr-2" />
						Continue with Apple
					</Button>
				</div>
				<Divider text="Or" />
				<Form {...form}>
					<form
						method="post"
						action="/api/auth/signin/email"
						className="flex flex-col gap-5"
						onSubmit={form.handleSubmit(onSubmit)}
					>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											{...field}
											disabled={isPending}
											placeholder="john.doe@example.com"
											type="email"
											autoComplete="email"
											className="bg-softest dark:bg-softest-dark"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormSuccess message={success} />
						<FormError message={error} />
						<Button
							type="submit"
							className="w-full"
							disabled={isPending}
						>
							{isPending ? (
								<span className="gap-2 flex flex-row items-center">
									<Loader2 className="size-4 animate-spin" />
									Sending email...
								</span>
							) : (
								"Continue with email"
							)}
						</Button>
					</form>
				</Form>
				<DialogFooter>
					<div className="w-full mt-5 text-xs">
						<p className="text-center text-softer dark:text-softer-dark">
							By continuing, you agree to the
						</p>
						<p className="text-center text-softer dark:text-softer-dark">
							<Link href="/terms" className="text-primary">
								{process.env.NEXT_PUBLIC_BRAND} Terms of Service
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

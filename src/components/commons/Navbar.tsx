import Link from "next/link"
import MaxWidthWrapper from "@/components/commons/MaxWidthWrapper"
import ThemeToggle from "@/components/theme/theme-toggle"
import NavbarLogo from "@/components/commons/NavbarLogo"
import Login from "@/components/commons/Login"
import { auth } from "@/auth"
import UserAccountNav from "@/components/commons/UserAccountNav"

const Navbar = async () => {
	const session = await auth()
	const user = session?.user

	return (
		<nav className="sticky h-14 inset-x-0 top-0 z-30 w-full backdrop-blur-lg transition-all">
			<MaxWidthWrapper>
				<div className="flex h-14 items-center justify-between">
					<Link
						href="/"
						className="flex z-40 font-semibold gap-2 items-center"
					>
						<NavbarLogo />
						<span className="text-lg">
							{process.env.NEXT_PUBLIC_BRAND}
						</span>
					</Link>
					{/* add mobile hamburger menu here */}

					{/* desktop menu below */}
					<div className="hidden items-center space-x-4 sm:flex">
						{/* User profile dropdown */}
						{!user ? (
							<Login />
						) : (
							<UserAccountNav
								name={
									!user.name
										? `${user.email}`
										: `${user.name}`
								}
								email={user.email ?? ""}
								imageUrl={user.image ?? ""}
							/>
						)}
						<ThemeToggle />
					</div>
				</div>
			</MaxWidthWrapper>
		</nav>
	)
}
export default Navbar

import Link from "next/link"
import MaxWidthWrapper from "@/components/commons/MaxWidthWrapper"
import ThemeToggle from "@/components/theme/theme-toggle"
import Login from "@/components/commons/Login"
import NavbarLogo from "@/components/commons/NavbarLogo"

const Navbar = async () => {
	return (
		<nav className="sticky h-14 inset-x-0 top-0 z-30 w-full backdrop-blur-lg transition-all">
			<MaxWidthWrapper>
				<div className="flex h-14 items-center justify-between">
					<Link href="/" className="flex z-40 font-semibold gap-2">
						<NavbarLogo />
						<span>{process.env.BRAND}</span>
					</Link>
					{/* add mobile hamburger menu here */}

					{/* desktop menu below */}
					<div className="hidden items-center space-x-4 sm:flex">
						<Login />
						<ThemeToggle />
					</div>
				</div>
			</MaxWidthWrapper>
		</nav>
	)
}
export default Navbar

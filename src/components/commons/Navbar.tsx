import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import ThemeToggle from "../theme/theme-toggle"

const Navbar = async () => {
	return (
		<nav className="sticky h-14 inset-x-0 top-0 z-30 w-full backdrop-blur-lg transition-all">
			<MaxWidthWrapper>
				<div className="flex h-14 items-center justify-between">
					<Link href="/" className="flex z-40 font-semibold">
						<span>{process.env.BRAND}</span>
					</Link>
					{/* add mobile navbar */}
					<div className="hidden items-center space-x-4 sm:flex">
						<ThemeToggle />
					</div>
				</div>
			</MaxWidthWrapper>
		</nav>
	)
}
export default Navbar

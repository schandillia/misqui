import Link from "next/link"
import MaxWidthWrapper from "@/components/commons/MaxWidthWrapper"
import ThemeToggle from "@/components/theme/theme-toggle"
import LoginButton from "@/components/commons/LoginButton"
import Image from "next/image"
import logo from "@/app/logo.png"

const Navbar = async () => {
	return (
		<nav className="sticky h-14 inset-x-0 top-0 z-30 w-full backdrop-blur-lg transition-all">
			<MaxWidthWrapper>
				<div className="flex h-14 items-center justify-between">
					<Link href="/" className="flex z-40 font-semibold gap-2">
						<Image
							src={logo}
							alt="logo"
							width={20}
							height={20}
							placeholder="blur"
						/>
						<span>{process.env.BRAND}</span>
					</Link>
					{/* add mobile navbar */}
					<div className="hidden items-center space-x-4 sm:flex">
						<LoginButton />
						<ThemeToggle />
					</div>
				</div>
			</MaxWidthWrapper>
		</nav>
	)
}
export default Navbar

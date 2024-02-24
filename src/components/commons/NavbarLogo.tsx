"use client"

import { useTheme } from "next-themes"
import Image from "next/image"
import logoDark from "@/app/brand/logo-dark.png"
import logoLight from "@/app/brand/logo-light.png"
import logo from "@/app/brand/logo.svg"

export default function NavbarLogo() {
	const { resolvedTheme } = useTheme() // Use type assertion for clarity

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const logoSrc = resolvedTheme === "dark" ? logoLight : logoDark

	return <Image src={logo} alt="logo" className="dark:invert size-5" />
}

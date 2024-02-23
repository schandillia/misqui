"use client"

import { useTheme } from "next-themes"
import Image from "next/image"
import logoDark from "@/app/brand/logo-dark.png"
import logoLight from "@/app/brand/logo-light.png"

export default function NavbarLogo() {
	const { resolvedTheme } = useTheme() // Use type assertion for clarity

	const logoSrc = resolvedTheme === "dark" ? logoLight : logoDark

	return <Image src={logoSrc} alt="logo" width={20} height={20} />
}

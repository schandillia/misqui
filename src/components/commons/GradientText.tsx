import React, { ReactNode } from "react"
import { cn } from "@/lib/utils"

const tags: string[] = ["h1", "h2", "h3", "h4", "h5", "h6"]

interface GradientTextProps extends React.HTMLAttributes<HTMLElement> {
	children: ReactNode // Specify ReactNode type for children prop
	className?: string
	type?: string
}

export default function GradientText({
	children,
	className = "",
	type = "p",
}: GradientTextProps) {
	const style = `leading-tight ${cn(
		"bg-gradient-to-r from-primary via-red-400 to-pink-500 text-transparent bg-clip-text",
		className,
	)}`
	if (tags.includes(type))
		return React.createElement(type, { className: style }, children)
	return React.createElement("p", { className: style }, children)
}

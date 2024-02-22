import React, { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GradientTextProps extends React.HTMLAttributes<HTMLElement> {
	children: ReactNode // Specify ReactNode type for children prop
	className?: string
	type?: string
}

export default function GradientText({
	children,
	className,
	type,
}: GradientTextProps) {
	const style = `leading-tight ${cn(
		"bg-gradient-to-r from-primary via-red-400 to-pink-500 text-transparent bg-clip-text",
		className,
	)}`
	// Get the corresponding JSX component based on the 'type' prop
	if (type === "h1") return <h1 className={style}>{children}</h1>
	if (type === "h2") return <h2 className={style}>{children}</h2>
	if (type === "h3") return <h3 className={style}>{children}</h3>
	if (type === "h4") return <h4 className={style}>{children}</h4>
	if (type === "h5") return <h5 className={style}>{children}</h5>
	if (type === "h6") return <h6 className={style}>{children}</h6>
	return <p className={style}>{children}</p>
}

// Set defaultProps for className
GradientText.defaultProps = {
	className: "",
	type: "p",
}

import { ReactNode } from "react"
import { cn } from "@/lib/utils"

function MaxWidthWrapper({
	className,
	children,
}: {
	// eslint-disable-next-line react/require-default-props
	className?: string
	children: ReactNode
}) {
	return (
		<div
			className={cn(
				"mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
				className,
			)}
		>
			{children}
		</div>
	)
}

export default MaxWidthWrapper

import MaxWidthWrapper from "@/components/commons/MaxWidthWrapper"
import Link from "next/link"
import React from "react"

const d = new Date()

interface LinkItem {
	id: string // Unique identifier
	text: string
}

const links: LinkItem[] = [
	{ id: "privacy", text: "Privacy" },
	{ id: "terms", text: "Terms" },
	{ id: "legal", text: "Legal" },
	{ id: "sitemap", text: "Site Map" },
]

export default function Footer() {
	return (
		<>
			<div className="flex-grow" />
			<div className="h-14 inset-x-0 bottom-0 w-full bg-softest dark:bg-softest-dark text-sm text-softer dark:text-softer-dark">
				<MaxWidthWrapper>
					<div className="flex flex-col sm:flex-row py-5 sm:h-14 items-center justify-between">
						{/* Copyright */}
						<div className="flex py-2 sm:py-0">
							&copy; {d.getFullYear()}{" "}
							{process.env.NEXT_PUBLIC_BRAND_LONG} All rights
							reserved.
						</div>
						{/* Links */}
						<div className="flex py-2 sm:py-0 gap-2">
							{links.map((link, index) => (
								<React.Fragment key={link.id}>
									<Link href={link.id}>{link.text}</Link>
									{index !== links.length - 1 && (
										<span>|</span>
									)}
								</React.Fragment>
							))}
						</div>
					</div>
				</MaxWidthWrapper>
			</div>
		</>
	)
}

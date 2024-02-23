import GradientText from "@/components/commons/GradientText"
import MaxWidthWrapper from "@/components/commons/MaxWidthWrapper"
import Navbar from "@/components/commons/Navbar"
import { Button } from "@/components/ui/button"

export default function Home() {
	return (
		<>
			<Navbar />
			<MaxWidthWrapper>
				<main className="flex min-h-screen flex-col items-center justify-between p-24">
					<h1 className="text-7xl font-bold text-soft dark:text-soft-dark">
						{process.env.BRAND}
					</h1>
					<GradientText type="h1" className="text-7xl font-bold">
						gradient header
					</GradientText>
					<GradientText>gradient paragraph</GradientText>

					<div className="p-10 bg-lightest dark:bg-lightest-dark">
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Impedit, numquam.
						</p>
						<p className="text-softer dark:text-softer-dark">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Fugit, rationes.
						</p>
					</div>
					<Button
						variant="default"
						className="focus:ring-0 focus:ring-offset-0 focus-visible:ring-offset-0 focus-visible:ring-0 focus:outline-none focus-visible:outline-none"
					>
						BUTTON
					</Button>
				</main>
			</MaxWidthWrapper>
		</>
	)
}

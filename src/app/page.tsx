import ThemeToggle from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<ThemeToggle />
			<h1 className="text-7xl font-bold text-soft dark:text-soft-dark">
				Soft
			</h1>
			<h1 className="text-7xl font-bold bg-gradient-to-r from-primary via-red-400 to-pink-500 inline-block text-transparent bg-clip-text">
				Gradient
			</h1>

			<div className="p-10 bg-lightest dark:bg-lightest-dark">
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Impedit, numquam.
				</p>
				<p className="text-softer dark:text-softer-dark">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Fugit, ratione.
				</p>
			</div>
			<Button variant="default">BUTTON</Button>
		</main>
	)
}

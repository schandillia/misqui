import ThemeToggle from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<ThemeToggle />
			<Button variant="default">Button</Button>
			<Button variant="destructive">Button</Button>
			<Button variant="secondary">Button</Button>
			<Button variant="outline">Button</Button>
			<Button variant="ghost">Button</Button>
		</main>
	)
}

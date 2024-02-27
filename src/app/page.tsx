import Footer from "@/components/commons/Footer"
import GradientText from "@/components/commons/GradientText"
import MaxWidthWrapper from "@/components/commons/MaxWidthWrapper"
import Navbar from "@/components/commons/Navbar"
import { Button } from "@/components/ui/button"

export default function Home() {
	return (
		<>
			<Navbar />
			<MaxWidthWrapper>
				<main className="flex flex-col items-center justify-between p-24">
					<h1 className="text-7xl font-bold text-soft dark:text-soft-dark">
						{process.env.NEXT_PUBLIC_BRAND}
					</h1>
					<GradientText type="h1" className="text-6xl font-bold">
						gradient header
					</GradientText>
					<GradientText>gradient paragraph</GradientText>

					<div className="p-10 bg-softest dark:bg-softest-dark shadow-lg">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Voluptate recusandae officiis nostrum
							distinctio blanditiis porro minima at totam
							voluptatem eos debitis quo voluptatum repudiandae
							praesentium vel, provident labore. Atque,
							repellendus.
						</p>
						<p className="text-softer dark:text-softer-dark">
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Voluptatibus earum esse quo non necessitatibus
							cupiditate sit odio laborum reprehenderit dolorem
							perferendis omnis, nisi, similique repellendus
							neque, ducimus dolor obcaecati corporis odit
							molestias recusandae. Modi natus nulla recusandae
							laborum dicta nemo odit impedit aliquid! Recusandae
							itaque adipisci illum porro consectetur, architecto
							maiores odit ipsum aliquam perspiciatis molestiae
							quis? Minima dolorum delectus doloribus facere minus
							at, tempore velit neque, vitae quis tempora ipsa
							recusandae hic odit unde eius ipsum non! Animi, sed.
						</p>
					</div>
					<Button variant="default">Button</Button>
				</main>
			</MaxWidthWrapper>
			<Footer />
		</>
	)
}

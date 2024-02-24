import { auth } from "@/auth"
import MaxWidthWrapper from "@/components/commons/MaxWidthWrapper"
import Navbar from "@/components/commons/Navbar"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"

const page = async () => {
	const session = await auth()

	return (
		<>
			<Navbar />
			<MaxWidthWrapper>
				<Card>
					<CardContent>
						<div>{JSON.stringify(session)}</div>
					</CardContent>
					<CardFooter>
						<Link href="/">Home</Link>
					</CardFooter>
				</Card>
			</MaxWidthWrapper>
		</>
	)
}

export default page

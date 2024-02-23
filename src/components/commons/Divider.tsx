import { Separator } from "@/components/ui/separator"

interface DividerProps {
	text?: string
}

export default function Divider({ text }: DividerProps) {
	return text ? (
		<div className="relative flex flex-row py-5 items-center">
			<Separator className="flex-1" />
			<span className="flex-shrink mx-2 text-softer">{text}</span>
			<Separator className="flex-1" />
		</div>
	) : (
		<Separator />
	)
}

Divider.defaultProps = {
	text: null,
}

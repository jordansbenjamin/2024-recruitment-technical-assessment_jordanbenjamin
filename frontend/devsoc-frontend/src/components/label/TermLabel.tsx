export default function TermLabel({ term }: { term: string }) {
	return (
		<div className="bg-sky-200 w-14 py-1 flex justify-center rounded-full">
			<p className="text-xs font-light">{term}</p>
		</div>
	);
}

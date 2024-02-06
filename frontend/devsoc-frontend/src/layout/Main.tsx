export default function Main() {
	return (
		<main className="bg-slate-50 w-full flex flex-col items-center gap-12">
			<section className="w-[60rem] mt-6">
				<h2 className="text-gray-600 mb-[-.7rem]">DevSoc presents</h2>
				<h1 className="text-[5.5rem] text-blue-500 font-bold">unilectives</h1>
				<p className="font-bold mt-[-.6rem] text-lg">Your one-stop shop for UNSW course and elective reviews.</p>
			</section>
			<section className="bg-green-100 w-[60rem] flex flex-col">
				<input type="text" placeholder="Search for a course e.g COMP1511" className="bg-slate-50 border border-blue-500 rounded-md p-2 placeholder-sky-600"/>
				<p>Sort</p>
			</section>
			<section></section>
		</main>
	);
}

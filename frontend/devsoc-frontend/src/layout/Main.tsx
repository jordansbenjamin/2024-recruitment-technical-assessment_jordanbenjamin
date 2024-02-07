import SearchIcon from "../components/nav-icons/SearchIcon";

export default function Main() {
	return (
		<main className="bg-slate-50 w-full flex flex-col items-center gap-12">
			<section className="w-[60rem] mt-6">
				<h2 className="text-gray-600 mb-[-.7rem]">DevSoc presents</h2>
				<h1 className="text-[5.5rem] text-blue-500 font-bold">unilectives</h1>
				<p className="font-bold mt-[-.6rem] text-lg">Your one-stop shop for UNSW course and elective reviews.</p>
			</section>

			<section className="w-[60rem] flex flex-col">
				<div className="w-full p-2 border-2 border-blue-400 rounded-md relative flex items-center">
					<SearchIcon />
					<input
						type="text"
						placeholder="Search for a course e.g COMP1511"
						className="bg-slate-50 placeholder-blue-400 placeholder:text-[.9rem] w-full ml-9 focus:outline-none"
					/>
				</div>
				<p>Sort</p>
			</section>

			<section></section>
		</main>
	);
}

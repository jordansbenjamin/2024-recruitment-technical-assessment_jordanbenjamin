import CourseCard from "../components/cards/CourseCard";
import DownArrIcon from "../components/nav-icons/DownArrIcon";
import SearchIcon from "../components/nav-icons/SearchIcon";
import courses from '../data/courses.json'

export default function Main() {
	return (
		<main className="bg-slate-50 w-full flex flex-col items-center gap-12">
			<section className="w-[62rem] mt-6">
				<h2 className="text-gray-600 mb-[-.7rem]">DevSoc presents</h2>
				<h1 className="text-[5.5rem] text-blue-500 font-bold">unilectives</h1>
				<p className="font-bold mt-[-.6rem] text-lg">Your one-stop shop for UNSW course and elective reviews.</p>
			</section>

			<section className="w-[62rem] flex flex-col gap-5">
				{/* TODO: turn into component? */}
				<div className="w-full p-2 border-2 border-blue-400 rounded-md relative flex items-center">
					<SearchIcon />
					<input
						type="text"
						placeholder="Search for a course e.g COMP1511"
						className="bg-slate-50 placeholder-blue-400 placeholder:text-[.9rem] w-full ml-9 focus:outline-none"
					/>
				</div>

				{/* TODO: turn into component? */}
				<div className="">
					<button className="bg-slate-50 px-3 py-2 border-[.09rem] border-gray-400 rounded-md flex gap-[7rem] shadow-md">
						<span className="text-gray-400 text-[1rem]">Sort By</span>
						<DownArrIcon />
					</button>
				</div>
			</section>

			<section className="w-[62rem] flex flex-wrap gap-7">
				{courses.map((course) => (
					<CourseCard code={course.course_prefix + course.course_code} title={course.course_title} reviews={course.total_reviews} stars={course.average_stars} terms={course.offered_terms}/>
				))}
			</section>
		</main>
	);
}

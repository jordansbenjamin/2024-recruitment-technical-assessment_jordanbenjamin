import SearchInput from "../components/SearchInput";
import SortDropdown from "../components/SortDropdown";
import CourseCard from "../components/cards/CourseCard";
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
				<SearchInput/>
				<SortDropdown/>
			</section>

			<section className="w-[62rem] flex flex-wrap gap-7">
				{courses.map((course) => (
					<CourseCard code={course.course_prefix + course.course_code} title={course.course_title} reviews={course.total_reviews} stars={course.average_stars} terms={course.offered_terms}/>
				))}
			</section>
		</main>
	);
}

import TermLabel from "../label/TermLabel";
import StarRating from "../star/StarRating";
import { type CourseCardProps } from "../../interfaces/propTypes";

export default function CourseCard({ code, title, reviews, stars, terms }: CourseCardProps) {
	return (
		<article className="py-6 px-6 w-[21rem] h-[13.5rem] flex flex-col bg-slate-50 rounded-xl shadow-lg">
			<div>
				<div className="mb-2 flex gap-10">
					<h3 className="font-extrabold text-2xl mb-1">{code}</h3>

					<div>
						<StarRating rating={stars} />
						<p className="text-xs text-gray-400 mt-[.3rem]">{reviews} reviews</p>
					</div>
				</div>

				<p className="font-light text-sm mt-3">{title}</p>
			</div>

			<div className="mt-16 flex gap-2">
				{terms.map((term, i) => (
					<TermLabel key={i} term={term} />
				))}
			</div>
		</article>
	);
}

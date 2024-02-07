import TermLabel from "../label/TermLabel";
import StarRating from "../star/StarRating";

interface CourseCardProps {
	code: string;
	title: string;
	reviews: number;
	stars: number;
	terms: string[];
}

export default function CourseCard({ code, title, reviews, stars, terms }: CourseCardProps) {
	return (
		<article className="py-6 px-6 w-[19rem] h-[14.5rem] flex flex-col bg-slate-50 rounded-lg shadow-lg">
			<div className="">
				<h3 className="font-extrabold text-2xl mb-1">{code}</h3>

				<div className="mb-2">
					<StarRating rating={stars} />
					<p className="text-xs text-gray-400 mt-[.3rem]">{reviews} reviews</p>
				</div>

				<p className="font-light text-sm">{title}</p>
			</div>

			{/* TODO: abstract to own component */}
			<div className="mt-12 flex gap-2">
				{terms.map((term) => <TermLabel term={term}/>)}
			</div>
		</article>
	);
}

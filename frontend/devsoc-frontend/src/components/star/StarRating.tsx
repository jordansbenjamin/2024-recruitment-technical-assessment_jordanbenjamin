import Star from "./Star";


export default function StarRating({ maxRating = 5, color = "#B789E5", size = 26, rating = 3}) {
return (
		<div className="flex items-center">
			<div className="flex">
				{Array.from({ length: maxRating }, (_, i) => (
					<Star key={i} size={size} color={color} isFull={rating >= i+1}/>
				))}
			</div>
		</div>
	);
}

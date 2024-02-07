interface StarProps {
	key?: number;
	color?: string;
	size?: number;
	isFull?: boolean;
}

export default function Star({ size, color, isFull }: StarProps) {
	return (
		<span>
			{isFull ? (
				<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color}>
					<path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" />
				</svg>
			) : (
				<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="#DDDDDD">
					<path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" />
				</svg>
			)}
		</span>
	);
}

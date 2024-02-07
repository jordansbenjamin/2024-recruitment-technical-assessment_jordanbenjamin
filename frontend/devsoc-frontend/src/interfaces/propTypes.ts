export interface AppProps {
	children: React.ReactNode;
}

export interface CourseCardProps {
	code: string;
	title: string;
	reviews: number;
	stars: number;
	terms: string[];
}

export interface StarProps {
	key?: number;
	color?: string;
	size?: number;
	isFull?: boolean;
}
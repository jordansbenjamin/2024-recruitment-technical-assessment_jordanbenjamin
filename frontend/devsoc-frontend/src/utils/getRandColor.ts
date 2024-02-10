export function getRandColor() {
	return `rgb(${getRandInt()},${getRandInt()},${getRandInt()})`;
}

function getRandInt() {
	return Math.trunc(Math.random() * 255);
}

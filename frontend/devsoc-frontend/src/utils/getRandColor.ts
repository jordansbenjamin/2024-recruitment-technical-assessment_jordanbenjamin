export function getRandColor() {
	// console.log(`rgb(${getRandInt()},${getRandInt()},${getRandInt()})`);
	return `rgb(${getRandInt()},${getRandInt()},${getRandInt()})`;
}

function getRandInt() {
	return Math.trunc(Math.random() * 255);
}

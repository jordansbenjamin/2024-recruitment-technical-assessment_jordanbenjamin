/**
 * Task 1
 */
function leafFiles(files) {
	// filter out leaf files by '.' extension
	return files.filter((file) => file.name.includes(".")).map((file) => file.name);
}

/**
 * Task 2
 */
function kLargestCategories(files, k) {
	const largestC = new Map();

	// count categories and map category name and its count
	files.forEach((file) => {
		const category = file.categories[0];
		largestC.set(category, (largestC.get(category) || 0) + 1);
	});

	// transform to arr and sort in descending + alphabetical if count === count
	const sortableC = Array.from(largestC.entries()).sort((a, b) => {
		if (b[1] - a[1] !== 0) {
			return b[1] - a[1];
		} else {
			return a[0].localeCompare(b[0]);
		}
	});

	// slice to k amount and return just the category name
	return sortableC.slice(0, k).map((c) => c[0]);
}

/**
 * Task 3
 */
function largestFileSize(files) {
	// we have to assume that this would work with any file structure
	// organise the folders/files into its respective structure?
	// we have to track the children and parent (folder -> sub folders || files)
	// graph traversal?
	// resursion?

	// edge case if files dont exist
	if (files.length === 0) {
		return 0;
	}

	// var to store largest file size
	let LFSize = 0;
	// to map and store total filse size
	const FSizes = {};

	// recursive func
	const calculateTotalSize = (id) => {
		// determines initial size (base case) and size of children (recursive case)
		let totalS = files.find((file) => file.id === id).size;
		// any leaf files with its id matching its parent
		const children = files.filter((file) => file.parent === id);

		// main recursive process
		for (const child of children) {
			totalS += calculateTotalSize(child.id);
		}

		// at any level, once a case is met, store its size
		FSizes[id] = totalS;

		return totalS;
	};

	// initial call of recursion on the top lvl files/folders
	files.forEach((file) => {
		if (file.parent === -1) {
			calculateTotalSize(file.id);
		}
	});

	// find LFSize (Largest File Size)
	for (const id in FSizes) {
		if (FSizes[id] > LFSize) {
			LFSize = FSizes[id];
		}
	}

	// console.log(LFSize);
	return LFSize;
}

function arraysEqual(a, b) {
	if (a === b) return true;
	if (a == null || b == null) return false;
	if (a.length !== b.length) return false;

	for (let i = 0; i < a.length; ++i) {
		if (a[i] !== b[i]) return false;
	}
	return true;
}

const testFiles = [
	{ id: 1, name: "Document.txt", categories: ["Documents"], parent: 3, size: 1024 },
	{ id: 2, name: "Image.jpg", categories: ["Media", "Photos"], parent: 34, size: 2048 },
	{ id: 3, name: "Folder", categories: ["Folder"], parent: -1, size: 0 },
	{ id: 5, name: "Spreadsheet.xlsx", categories: ["Documents", "Excel"], parent: 3, size: 4096 },
	{ id: 8, name: "Backup.zip", categories: ["Backup"], parent: 233, size: 8192 },
	{ id: 13, name: "Presentation.pptx", categories: ["Documents", "Presentation"], parent: 3, size: 3072 },
	{ id: 21, name: "Video.mp4", categories: ["Media", "Videos"], parent: 34, size: 6144 },
	{ id: 34, name: "Folder2", categories: ["Folder"], parent: 3, size: 0 },
	{ id: 55, name: "Code.py", categories: ["Programming"], parent: -1, size: 1536 },
	{ id: 89, name: "Audio.mp3", categories: ["Media", "Audio"], parent: 34, size: 2560 },
	{ id: 144, name: "Spreadsheet2.xlsx", categories: ["Documents", "Excel"], parent: 3, size: 2048 },
	{ id: 233, name: "Folder3", categories: ["Folder"], parent: -1, size: 4096 },
];

console.assert(
	arraysEqual(
		leafFiles(testFiles).sort((a, b) => a.localeCompare(b)),
		[
			"Audio.mp3",
			"Backup.zip",
			"Code.py",
			"Document.txt",
			"Image.jpg",
			"Presentation.pptx",
			"Spreadsheet.xlsx",
			"Spreadsheet2.xlsx",
			"Video.mp4",
		]
	)
);

console.assert(arraysEqual(kLargestCategories(testFiles, 3), ["Documents", "Folder", "Media"]));

console.assert(largestFileSize(testFiles) == 20992);

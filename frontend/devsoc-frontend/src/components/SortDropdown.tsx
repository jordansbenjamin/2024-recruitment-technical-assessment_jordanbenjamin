import DownArrIcon from "../components/nav-icons/DownArrIcon";

export default function SortDropdown() {
	return (
		<div>
			<button className="bg-slate-50 px-3 py-2 border-[.09rem] border-gray-400 rounded-md flex gap-[7rem] shadow-md">
				<span className="text-gray-400 text-[1rem]">Sort By</span>
				<DownArrIcon />
			</button>
		</div>
	);
}

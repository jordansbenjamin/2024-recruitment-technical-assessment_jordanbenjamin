import SearchIcon from "../components/nav-icons/SearchIcon";
import useModalStore from "../store/modalStore";

export default function SearchInput() {
	const {openModal} = useModalStore()

	return (
		<div className="w-full p-2 border-2 border-blue-400 rounded-md relative flex items-center">
			<SearchIcon />
			<input
				type="text"
				placeholder="Search for a course e.g COMP1511"
				className="bg-slate-50 placeholder-blue-400 placeholder:text-[.9rem] w-full ml-9 focus:outline-none"
				onFocus={openModal}
			/>
		</div>
	);
}

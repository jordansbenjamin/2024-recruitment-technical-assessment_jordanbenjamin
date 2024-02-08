import useModalStore from "../../store/modalStore";

export default function Modal() {
	const {closeModal} = useModalStore()

	return (
		<div className="bg-slate-50 border border-black rounded-md w-[40rem] h-[40rem] p-6 absolute translate-x-[-50%] translate-y-[-50%] left-1/2 top-1/2 z-10">
			<button className="bg-red-200 p-2 rounded-lg w-20 block ml-auto" onClick={closeModal}>Close</button>
		</div>
	);
}

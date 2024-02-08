import { create } from "zustand";
import { type ModalState } from "../interfaces/propTypes";

const useModalStore = create<ModalState>()((set) => ({
	isOpen: false,
	openModal: () => set({ isOpen: true }),
	closeModal: () => set({ isOpen: false }),
}));

export default useModalStore;

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Roles } from "@/constants/constants";

interface RoleModalState {
	isOpen: boolean;
	role: Roles | null
	setOpen: (open: boolean) => void;
	setRole: (role: Roles) => void;
}

export const useRoleModalStore = create<RoleModalState>()(
	persist(
		(set) => ({
			isOpen: false,
			role: null,
			setOpen: (open) => set({ isOpen: open }),
			setRole: (role) => set({ role }),
		}),
		{
			name: "role-modal-storage",
		}
	)
);

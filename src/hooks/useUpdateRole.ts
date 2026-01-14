import { Roles } from "@/constants/constants";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

type UpdateRolePayload = {
	role: Roles;
};

export function useUpdateRole() {
	return useMutation({
		mutationFn: async ({ role }: UpdateRolePayload) => {
			const res = await axios.patch("/api/auth/role", { role });
			return res.data;
		},
	});
}

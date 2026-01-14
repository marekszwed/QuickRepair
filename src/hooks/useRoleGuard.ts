import { Roles } from "@/constants/constants";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function useRoleGuard(requiredRole: Roles) {
	const router = useRouter();

	const { data: role, isLoading } = useQuery({
		queryKey: ["user-role"],
		queryFn: async () => {
			const { data } = await axios.get("/api/auth/role");
			return data.role;
		},
	});

	useEffect(() => {
		if (!isLoading && role !== undefined && role !== requiredRole) {
			router.replace("/");
		}
	}, [role, isLoading, requiredRole, router]);

	return { role, isLoading };
}

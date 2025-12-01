import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useAuthCheck() {
	return useQuery({
		queryKey: ["auth-user"],
		queryFn: async () => {
			const response = await axios.get("/api/auth/user");
			if (!response) return null;
			return response.data;
		},
		staleTime: 1000 * 60 * 5,
	});
}

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export type UserData = {
	name: string;
	email: string;
};

export function useConcreteUser() {
	const { data, isLoading, error } = useQuery<UserData>({
		queryKey: ["user"],
		queryFn: async () => {
			const { data } = await axios.get("/api/auth/user");
			return data.user;
		},
	});

	return { data, isLoading, error };
}

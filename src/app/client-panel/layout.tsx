"use client";
import axios from "axios";
import { Routes } from "@/routes/routes";
import { useQuery } from "@tanstack/react-query";
import { LoadingCircle } from "@/components";
import { useRouter } from "next/navigation";
import { Roles } from "@/constants/constants";
import { useEffect } from "react";

function ClientPanelRootLayout() {
	const router = useRouter();
	const {
		data: role,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["user-role"],
		queryFn: async () => {
			const { data } = await axios.get("/api/auth/role");
			return data.role;
		},
	});

	useEffect(() => {
		if (!isLoading) {
			if (role === Roles.Customer) router.replace(Routes.customerPanel);
			if (role === Roles.Specialist) router.replace(Routes.specialistPanel);
			if (!role) router.replace(Routes.rolepage);
		}
	}, [role, isLoading, router]);

	if (isLoading) return <LoadingCircle />;
	if (error) return console.error(error);
}

export default ClientPanelRootLayout;

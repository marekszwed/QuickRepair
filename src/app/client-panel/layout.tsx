"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Routes } from "@/routes/routes";
import SpecialistDahboardContent from "@/components/dashboard/SpecialistDashboardContent";
import CustomerDashboardContent from "@/components/dashboard/CustomerDashboardContent";
import ClientDashboardLayout from "@/components/dashboard/ClientDashboardLayout/ClientDashboardLayout";

function ClientPanelRootLayout() {
	const [role, setRole] = useState<string | null>(null);

	useEffect(() => {
		const checkRole = async () => {
			try {
				const { data } = await axios.get("/api/auth/set-role");
				console.log("Pobrana rola:", data.role);
				setRole(data.role);
			} catch (error) {
				console.error(error);
			}
		};
		checkRole();
	}, []);

	if (!role) return <p>Loading...</p>;

	const Content =
		role === "customer" ? CustomerDashboardContent : SpecialistDahboardContent;

	return (
		<ClientDashboardLayout pathname={Routes.clientPanel}>
			<Content />
		</ClientDashboardLayout>
	);
}

export default ClientPanelRootLayout;

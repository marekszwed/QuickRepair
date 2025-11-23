"use client";
import { ClientDashboardLayout, LoadingCircle } from "@/components";
import { Roles } from "@/constants/constants";
import { useRoleGuard } from "@/hooks/useRoleGuard";
import { Routes } from "@/routes/routes";
import { ReactNode } from "react";

interface SpecialistPanelProps {
	children: ReactNode;
}

function SpecialistPanelLayout({ children }: SpecialistPanelProps) {
	const { isLoading } = useRoleGuard(Roles.Specialist);

	if (isLoading) return <LoadingCircle />;

	return (
		<ClientDashboardLayout pathname={Routes.customerPanel}>
			{children}
		</ClientDashboardLayout>
	);
}

export default SpecialistPanelLayout;

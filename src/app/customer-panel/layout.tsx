"use client";
import { ClientDashboardLayout, LoadingCircle } from "@/components";
import { Roles } from "@/constants/constants";
import { useRoleGuard } from "@/hooks/useRoleGuard";
import { Routes } from "@/routes/routes";
import { ReactNode } from "react";

interface CustomerPanelProps {
	children: ReactNode;
}

function CustomerPanelLayout({ children }: CustomerPanelProps) {
	const { isLoading } = useRoleGuard(Roles.Customer);

	if (isLoading) return <LoadingCircle />;

	return (
		<ClientDashboardLayout pathname={Routes.customerPanel}>
			{children}
		</ClientDashboardLayout>
	);
}

export default CustomerPanelLayout;

"use server";
import { getRoleFromServer } from "@/backend/auth/getRoleFromServer";
import { Roles } from "@/constants/constants";
import { Routes } from "@/routes/routes";
import { redirect } from "next/navigation";

export default async function ClientPanelRootLayout() {
	const { role } = await getRoleFromServer();

	if (role === Roles.Customer) redirect(Routes.customerPanel);
	if (role === Roles.Specialist) redirect(Routes.specialistPanel);
	if (!role) redirect(Routes.rolepage);
}

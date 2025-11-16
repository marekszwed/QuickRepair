"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import { navigation } from "../../../app/client-panel/navigation/navigation";
import { useRouter } from "next/navigation";
import { Routes } from "@/routes/routes";
import PrimaryButton from "@/components/common/Button";
import { ReactNode } from "react";

const demoTheme = createTheme({
	cssVariables: {
		colorSchemeSelector: "data-toolpad-color-scheme",
	},
	colorSchemes: { light: true, dark: true },
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 600,
			lg: 1200,
			xl: 1536,
		},
	},
});

type DashboardProps = {
	pathname: string;
	children?: ReactNode;
};

function ClientDashboardLayout({ pathname, children }: DashboardProps) {
	const router = useDemoRouter("/dashboard");
	const rout = useRouter();

	function handleLogOut() {
		rout.push(Routes.landingPage);
	}
	return (
		<AppProvider navigation={navigation} router={router} theme={demoTheme}>
			<DashboardLayout
				slots={{
					toolbarActions: () => (
						<PrimaryButton
							onClick={handleLogOut}
							text="Log out"
							sx={{ mr: 1 }}
						/>
					),
				}}
			>
				{children ?? (
					<Box
						sx={{
							py: 4,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							textAlign: "center",
						}}
					>
						<Typography>Dashboard content for {pathname}</Typography>
					</Box>
				)}
			</DashboardLayout>
		</AppProvider>
	);
}

export default ClientDashboardLayout;

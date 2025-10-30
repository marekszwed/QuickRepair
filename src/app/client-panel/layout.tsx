"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import { navigation } from "./navigation/navigation";


type Pathname = {
	pathname: string
}

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

function DemoPageContent({ pathname }: Pathname) {
	return (
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
	);
}

function DashboardLayoutBranding() {
	const router = useDemoRouter("/dashboard");

	return (
		<AppProvider
			navigation={navigation}
			branding={{
				logo: <img src="https://mui.com/static/logo.png" alt="MUI logo" />,
				title: "MUI",
				homeUrl: "/toolpad/core/introduction",
			}}
			router={router}
			theme={demoTheme}
			
		>
			<DashboardLayout>
				<DemoPageContent pathname={router.pathname} />
			</DashboardLayout>
		</AppProvider>
	);
}

export default DashboardLayoutBranding;

"use client";

import GlobalStyles from "@/styles/GlobalStyles";
import theme from "@/styles/theme";
import { ThemeProvider } from "@mui/material/styles";

type AppType = {
	children: React.ReactNode;
};

function AppThemeProvider({ children }: AppType) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			{children}
		</ThemeProvider>
	);
}

export default AppThemeProvider;

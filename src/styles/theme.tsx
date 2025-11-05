import { createTheme, responsiveFontSizes } from "@mui/material/styles";

declare module "@mui/material/styles" {
	interface Palette {
		blue100: string;
	}

	interface PaletteOptions {
		blue100: string;
	}
}

let theme = createTheme({
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 3,
				},
			},
		},
	},
});

theme = responsiveFontSizes(theme);

export default theme;

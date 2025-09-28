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
	palette: {
		primary: { main: "#2C73D2" },
		blue100: "",
	},
});

theme = responsiveFontSizes(theme);

export default theme;

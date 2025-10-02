"use client";
import { GlobalStyles as MUIGlobalStyles } from "@mui/material";

const GlobalStyles = () => {
	return (
		<MUIGlobalStyles
			styles={{
				"*": {
					fontFamily: `"Roboto", sans-serif`,
					fontStyle: "normal",
				},
				body: {
					margin: "0",
					padding: "0",
					fontSize: "1.6rem",
				},
				button: {
					cursor: "pointer",
				},
				a: {
					textDecoration: "none",
				},
			}}
		/>
	);
};

export default GlobalStyles;

import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import { TypographyProps } from "@mui/material";

export const Header = styled(AppBar)(({ theme }) => ({
	position: "fixed",
	backgroundColor: theme.palette.grey[50],
}));

type LogoProps = TypographyProps<"a">;

export const Logo = styled("h1")(({ theme }) => ({
	marginRight: theme.spacing(2),
	fontWeight: 700,
	fontFamily: `"roboto", sans-serif`,
	fontSize: theme.typography.h4.fontSize,
	textDecoration: "none",
	letterSpacing: ".2rem",

	[theme.breakpoints.down("md")]: {
		letterSpacing: ".3rem",
		flexGrow: 1,
		overflow: "visible",
	},

	"& a": {
		textDecoration: "none",
		color: theme.palette.common.black,
		cursor: "pointer",
	},
}));

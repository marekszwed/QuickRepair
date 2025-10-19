import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import { Typography, TypographyProps } from "@mui/material";

export const Header = styled(AppBar)(({ theme }) => ({
	position: "fixed",
	backgroundColor: theme.palette.primary.main,
}));

type LogoProps = TypographyProps<"a">;

export const Logo = styled(Typography)<LogoProps>(({ theme }) => ({
	marginRight: theme.spacing(2),
	fontWeight: 700,
	fontFamily: `"roboto", sans-serif`,
	color: "inherit",
	textDecoration: "none",
	cursor: "pointer",
	letterSpacing: ".2rem",

	[theme.breakpoints.down("md")]: {
		letterSpacing: ".3rem",
		flexGrow: 1,
		overflow: "visible",
	},
}));

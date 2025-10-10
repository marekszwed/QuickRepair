import { styled } from "@mui/material/styles";

export const Hero = styled("div")(({ theme }) => ({
	position: "relative",
	display: "flex",
	height: "100%",
	width: "100%",
	backgroundColor: theme.palette.secondary.light,
}));

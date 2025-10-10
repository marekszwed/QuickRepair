import { overlayMixin } from "@/styles/mixins";
import { Paper, styled } from "@mui/material";

export const Overlay = styled("div")({
	...overlayMixin,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	padding: "0 16px",
});

export const StyledPaper = styled(Paper)(({ theme }) => ({
	width: "90%",
	maxWidth: "600px",
	minWidth: "300px",
	margin: "0 auto",
	padding: theme.spacing(1),
	borderRadius: 16,
	boxShadow: theme.shadows[6],
}));

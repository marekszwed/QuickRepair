import { overlayMixin } from "@/styles/mixins";
import { Paper, styled } from "@mui/material";

export const Overlay = styled("div")(({ theme }) => ({
	...overlayMixin,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	paddingBlock: 0,
	paddingInline: theme.spacing(2),
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
	width: "90%",
	maxWidth: "600px",
	minWidth: "300px",
	margin: "0 auto",
	padding: theme.spacing(1),
	borderRadius: theme.spacing(1),
	boxShadow: theme.shadows[6],
}));

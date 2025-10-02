import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SnapCard = styled(Card)({
	display: "flex",
	justifyContent: "center",
	maxWidth: "20rem",
	width: "100%",
	border: `-webkit-box-shadow: 0px 0px 18px 1px rgba(185, 185, 185, 1);
-moz-box-shadow: 0px 0px 18px 1px rgba(185, 185, 185, 1);
box-shadow: 0px 0px 18px 1px rgba(185, 185, 185, 1);`,
});

import { Box, styled } from "@mui/material";

export const RadioBox = styled(Box)(({ theme }) => ({
	display: "flex",
	gap: 10,
	zIndex: theme.zIndex.modal,

	"& label": {
		display: "flex",
		alignItems: "center",
		gap: 3,
		fontSize: "20px",
		color: "#fff",
	},

	"& input[type='radio']": {
		width: "20px",
		height: "20px",
	},
}));

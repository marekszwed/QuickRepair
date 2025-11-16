import { Box, styled } from "@mui/material";

export const RoleBox = styled(Box)(({ theme }) => ({
	position: "fixed",
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	background: "rgba(0, 0, 0, 0.8)",
	zIndex: theme.zIndex.modal,
}));

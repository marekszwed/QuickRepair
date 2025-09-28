import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";

export const Header = styled(AppBar)(({ theme }) => ({
	position: "fixed",
	backgroundColor: theme.palette.primary.main,
}));

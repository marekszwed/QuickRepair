import { styled } from "@mui/material";

export const HeroTitle = styled("h3")(({ theme }) => ({
	fontSize: theme.typography.h3.fontSize,
	marginBlock: theme.spacing(2),
}));

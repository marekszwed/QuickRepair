import { Box, styled } from "@mui/material";

export const CarouselBox = styled(Box)({
	display: "flex",
	width: "100%",

	"& .swiper": {
		display: "flex",
		position: "relative",
	},

	"& .swiper-slide": {
		padding: "1rem 0",
	},

	"& .swiper-wrapper": {
		marginBottom: "3rem",
	},
});

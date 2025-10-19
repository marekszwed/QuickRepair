import { overlayMixin } from "@/styles/mixins";
import { styled } from "@mui/material";

export const ModalOverlay = styled("div")({
	...overlayMixin,
});

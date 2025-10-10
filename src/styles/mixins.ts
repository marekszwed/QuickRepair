import { CSSObject } from "@emotion/react";

export const overlayMixin: CSSObject = {
	position: "fixed",
	top: 0,
	left: 0,
	right: 0,
	width: "100vw",
	height: "100vh",
	background: "rgba(0, 0, 0, 0.8)",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	zIndex: 2500,
};

export const flexColumnCenter: CSSObject = {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
};

export const flexRowCenter: CSSObject = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
};

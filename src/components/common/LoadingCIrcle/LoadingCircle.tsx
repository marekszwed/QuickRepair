import { Box, CircularProgress } from "@mui/material";

function LoadingCircle() {
	return (
		<Box sx={{ display: "flex" }}>
			<CircularProgress />
		</Box>
	);
}

export default LoadingCircle;

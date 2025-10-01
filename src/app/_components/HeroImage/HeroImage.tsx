"use client";
import * as S from "./HeroImage.styled";
import { Box, Container, Typography } from "@mui/material";

function HeroImage() {
	return (
		<Box sx={{ height: "70svh", mb: "5rem" }}>
			<Container sx={{ height: "100%" }} maxWidth="xl">
				<S.Hero>
					<Typography variant="h3">Fachowiec w zasięgu kliknięcia</Typography>
				</S.Hero>
			</Container>
		</Box>
	);
}

export default HeroImage;

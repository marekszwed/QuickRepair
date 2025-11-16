"use client";
import * as S from "./ProfessionGrid.styled";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { professions } from "@/types/professionTypes";
import { Typography } from "@mui/material";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import React, { useRef } from "react";
import { flexColumnCenter } from "@/styles/mixins";

function ProfessionGrid() {
	const lottieRefs = useRef<React.RefObject<LottieRefCurrentProps | null>[]>(
		[]
	);

	const handleMouseEnter = (index: number) => () => {
		lottieRefs.current[index]?.current?.play();
	};

	const handleMouseLeave = (index: number) => () => {
		lottieRefs.current[index]?.current?.stop();
	};
	return (
		<Box sx={{ maxWidth: "1024px", width: "100%", mt: 10, flexGrow: 1 }}>
			<Typography variant="h3" sx={{ marginBlock: 7 }}>
				What we offer
			</Typography>
			<Grid
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
			>
				{professions.map((c, index) => {
					if (!lottieRefs.current[index]) {
						lottieRefs.current[index] =
							React.createRef<LottieRefCurrentProps>();
					}
					return (
						<Grid key={c.category} size={{ xs: 2, sm: 4, md: 4 }}>
							<S.Item
								sx={{
									...flexColumnCenter,
									cursor: "pointer",
								}}
								onMouseEnter={handleMouseEnter(index)}
								onMouseLeave={handleMouseLeave(index)}
							>
								<Typography>{c.category}</Typography>
								<Lottie
									animationData={c.animation}
									loop={false}
									autoplay={false}
									lottieRef={lottieRefs.current[index]}
									style={{ width: 150, height: 150, pointerEvents: "none" }}
								/>
							</S.Item>
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
}

export default ProfessionGrid;

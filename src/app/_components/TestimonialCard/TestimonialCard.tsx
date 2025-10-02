"use client";
import * as S from "./TestimonialCard.styled";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Avatar } from "@mui/material";

type TestimonialCardProps = {
	image: string;
	altAttribute: string;
	name: string;
	review: string;
};

function TestimonialCard({
	image,
	altAttribute,
	name,
	review,
}: TestimonialCardProps) {
	return (
		<S.SnapCard>
			<CardActionArea sx={{ display: "flex", justifyContent: "center" }}>
				<Avatar
					src={image}
					alt={altAttribute}
					sx={{ height: 60, width: 60, marginLeft: "1rem" }}
				/>
				<CardContent>
					<Typography
						gutterBottom
						variant="h5"
						component="div"
						sx={{ textAlign: "left" }}
					>
						{name}
					</Typography>
					<Typography
						variant="body2"
						sx={{ color: "text.secondary", textAlign: "left" }}
					>
						{review}
					</Typography>
				</CardContent>
			</CardActionArea>
		</S.SnapCard>
	);
}

export default TestimonialCard;

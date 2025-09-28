"use client";
import * as S from "./page.styled";
import HeroImage from "./landingComponents/HeroImage/HeroImage";
import OpinionCarousel from "./landingComponents/OpinionCarousel";

function LandingPage() {
	return (
		<S.LandingPage>
			<HeroImage />
			<OpinionCarousel />
		</S.LandingPage>
	);
}

export default LandingPage;

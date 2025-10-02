"use client";
import * as S from "./styled";
import HeroImage from "./_components/HeroImage/HeroImage";
import OpinionCarousel from "./_components/OpinionCarousel";

function LandingPage() {
	return (
		<S.LandingPage>
			<HeroImage />
			<OpinionCarousel />
		</S.LandingPage>
	);
}

export default LandingPage;

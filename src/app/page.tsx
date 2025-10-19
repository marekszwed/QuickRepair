"use client";
import * as S from "./styled";
import HeroImage from "@/components/HeroImage";
import OpinionCarousel from "@/components/OpinionCarousel";

function LandingPage() {
	return (
		<S.LandingPage>
			<HeroImage />
			<OpinionCarousel />
		</S.LandingPage>
	);
}

export default LandingPage;

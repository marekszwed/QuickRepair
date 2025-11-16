"use client";
import * as S from "./styled";
import { Contractors, ProfessionGrid } from "@/components";

function Services() {
	return (
		<S.ServicesBox>
			<ProfessionGrid />
			<Contractors />
		</S.ServicesBox>
	);
}

export default Services;

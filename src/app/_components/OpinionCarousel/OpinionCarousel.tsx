"use client";
import * as S from "./OpinionCarousel.styled";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import TestimonialCard from "../TestimonialCard";
import { participants } from "../TestimonialCard/ParticipantsList";

function OpinionCarousel() {
	return (
		<S.CarouselBox>
			<Swiper
				slidesPerView={5}
				spaceBetween={30}
				centeredSlides
				navigation
				loop
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				modules={[Autoplay, Navigation]}
				className="reviewCard"
			>
				{participants.map((participant, id) => (
					<SwiperSlide key={id}>
						<TestimonialCard
							image={participant.picture}
							altAttribute={participant.alt}
							name={participant.name}
							review={participant.review}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</S.CarouselBox>
	);
}

export default OpinionCarousel;

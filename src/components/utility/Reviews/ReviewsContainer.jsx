import React from "react";
import SwiperContainer from "../Swiper/SwiperContainer";
import { SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";
const ReviewsContainer = ({ results }) => {
  return (
    <SwiperContainer
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 2,
        },
      }}
    >
      {results?.map((card, index) => {
        
        return (
          <SwiperSlide key={index}>
            <ReviewCard {...card} />
          </SwiperSlide>
        );
      })}
    </SwiperContainer>
  );
};

export default ReviewsContainer;

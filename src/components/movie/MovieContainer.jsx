import React from "react";
import { SwiperSlide } from "swiper/react";
import SwiperContainer from "../utility/Swiper/SwiperContainer";
import { breakpoints } from "./defaultSwiperProps";
import SkeletonContainer from "../utility/SkeletonContainer";

const MovieContainer = ({ loading, data }) => {
  if (loading) return <SkeletonContainer />;
  return (
    <SwiperContainer breakpoints={breakpoints}>
      {data?.map((card, index) => {
        return (
          <SwiperSlide key={index}>
            <SwiperContainer.SwiperCard {...card} />
          </SwiperSlide>
        );
      })}
    </SwiperContainer>
  );
};

export default MovieContainer;

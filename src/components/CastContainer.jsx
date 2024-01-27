import React from "react";
import SwiperContainer from "./utility/Swiper/SwiperContainer";
import { SwiperSlide } from "swiper/react";
import CastCard from "./CastCard";
import SkeletonContainer from "./utility/SkeletonContainer";
import { useSelector } from "react-redux";

const CastContainer = ({ cast, isLoading = false }) => {
  const { lang } = useSelector((state) => state.SettingsReducer);
  if (isLoading) return <SkeletonContainer />;
  return (
    <SwiperContainer
      className={`${lang == "ar" ? "flex flex-row-reverse" : ""}`}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      {cast?.map((actor, index) => {
        if (!actor.profile_path) return <></>;
        return (
          <SwiperSlide key={index}>
            <CastCard {...actor} />
          </SwiperSlide>
        );
      })}
    </SwiperContainer>
  );
};

export default CastContainer;

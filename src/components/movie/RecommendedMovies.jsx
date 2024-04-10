import React from "react";
import TypeOfMovieHeader from "../utility/TypeOfMovieHeader";
import SwiperContainer from "../utility/Swiper/SwiperContainer";
import { breakpoints } from "./defaultSwiperProps";
import { SwiperSlide } from "swiper/react";
const RecommendedMovies = ({ movies }) => {
  return (
    <div>
      <TypeOfMovieHeader
        title={"recommended"}
        className={"uppercase light_text_shadow"}
      />
      {
        <SwiperContainer breakpoints={breakpoints} dir="ltr">
          {movies.map((card, index) => {
            if (!card.poster_path) return <></>;

            return (
              <SwiperSlide
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                key={index}
              >
                <SwiperContainer.SwiperCard {...card} />
              </SwiperSlide>
            );
          })}
        </SwiperContainer>
      }
    </div>
  );
};

export default RecommendedMovies;

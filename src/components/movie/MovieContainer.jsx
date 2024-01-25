import React from "react";
import { SwiperSlide } from "swiper/react";
import SwiperContainer from "../utility/Swiper/SwiperContainer";
import { breakpoints } from "./defaultSwiperProps";
import SkeletonContainer from "../utility/SkeletonContainer";
import TypeOfMovieHeader from "../utility/TypeOfMovieHeader";
import { Link } from "react-router-dom";

const MovieContainer = ({ loading, data, title, seeMoreLink = "" }) => {
  if (loading)
    return (
      <>
        <div className="container mx-auto">
          <div className="skeleton outline-2 outline-white outline  outline-offset-4 bg-gray-800 w-24 h-10"></div>
        </div>
        <SkeletonContainer />;
      </>
    );
  return (
    <>
      {data && data?.length && (
        <>
          <div className="container">
            <div className="flex flex-wrap justify-between items-center">
              <TypeOfMovieHeader
                title={title}
                className={"uppercase light_text_shadow"}
              />
              {seeMoreLink && seeMoreLink.length && (
                <>
                  <Link
                    to={seeMoreLink}
                    className="light_text_shadow font-bold border-b-2 text-xl capitalize"
                  >
                    see more
                  </Link>
                </>
              )}
            </div>
          </div>
          <SwiperContainer breakpoints={breakpoints}>
            {data?.map((card, index) => {
              return (
                <SwiperSlide key={index}>
                  <SwiperContainer.SwiperCard {...card} />
                </SwiperSlide>
              );
            })}
          </SwiperContainer>
        </>
      )}
    </>
  );
};

export default MovieContainer;

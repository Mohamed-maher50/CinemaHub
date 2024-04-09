import React, { useEffect, useRef } from "react";
import TypeOfMovieHeader from "../utility/TypeOfMovieHeader";
import { SwiperSlide } from "swiper/react";
import SwiperContainer from "../utility/Swiper/SwiperContainer";
import { Link, useSearchParams, useParams } from "react-router-dom";
import { breakpoints } from "./defaultSwiperProps";
import { useSelector } from "react-redux";

import WithLoader from "../../lib/WithLoader";
import SkeletonCard from "./SkeletonCard";
import SkeletonContainer from "../utility/SkeletonContainer";

const MovieLoader = ({ genre, ...otherProps }) => {
  // Construct the URL for the API call
  const [searchparams, setSearchParams] = useSearchParams();
  const { lang } = useParams();

  const apiUrl = `/3/discover/movie?language=${lang}&with_genres=${
    genre.id
  }&with_original_language=en&${searchparams.toString()}`;

  return (
    <WithLoader
      Element={MovieHomeContainer}
      url={apiUrl}
      Skeleton={SkeletonContainer}
      key={genre.id}
      {...otherProps}
    />
  );
};
const MovieHomeContainer = ({
  seeMoreLink,
  title,
  gene,
  results,
  ...other
}) => {
  return (
    <>
      {results?.length && (
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
        </>
      )}{" "}
      <SwiperContainer className={"w-full  pb-5"} breakpoints={breakpoints}>
        {results?.map((card, index) => {
          return (
            <SwiperSlide key={index}>
              <SwiperContainer.SwiperCard {...card} />
            </SwiperSlide>
          );
        })}
      </SwiperContainer>
    </>
  );
};

export const HomeMoviesWithLoader = ({ genre, ...props }) => {
  const { lang } = useParams();
  const [searchparams, setSearchParams] = useSearchParams();

  return (
    <WithLoader
      Element={MovieHomeContainer}
      url={`/3/discover/movie?language=${lang}&with_genres=${
        genre.id
      }&with_original_language=en&${searchparams.toString()}`}
      {...props}
      title={genre.name}
      Skeleton={SkeletonContainer}
    />
  );
};
export default MovieHomeContainer;

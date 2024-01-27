import React, { useEffect, useState } from "react";
import ReviewsContainer from "../components/Reviews/ReviewsContainer";
import VideoContainer from "../components/movie/VideoContainer";
import CastContainer from "../components/CastContainer";
import TypeOfMovieHeader from "../components/utility/TypeOfMovieHeader";
import { useLocation, useParams } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import SwiperContainer from "../components/utility/Swiper/SwiperContainer";
import { getData } from "../api/getData";
import { formatDuration } from "../lib/runtimeFormat";
import StarRatings from "react-star-ratings";
import SkeletonContainer from "../components/utility/SkeletonContainer";
import { breakpoints } from "../components/movie/defaultSwiperProps";
import { useSelector } from "react-redux";

const MoviePage = () => {
  const [movieDitails, setMovieDitails] = useState({});
  const location = useLocation();
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const { lang } = useSelector((state) => state.SettingsReducer);

  useEffect(() => {
    (async () => {
      const [result, reultError] = await getData(
        `/3/movie/${movieId}?append_to_response=videos,credits,recommendations,reviews&language=${lang}`
      );
      console.log(result);
      if (!reultError) setMovieDitails(result);
    })();
  }, [movieId, location, lang]);

  return (
    <div className="md:py-4 ">
      <div className={`relative  `}>
        <img
          src={`https://image.tmdb.org/t/p/original/${movieDitails?.backdrop_path}`}
          alt=""
          className=" w-full object-cover h-[900px] md:h-[700px] "
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-poster">
          <div className="container mx-auto ">
            <div className="grid  pt-16 gap-2 md:grid-cols-9">
              <div className=" md:col-span-2 ">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movieDitails?.poster_path}`}
                  alt=""
                  className="rounded-md shadow-2xl w-52 md:w-auto"
                />
              </div>
              <div className=" md:col-span-7 text-white">
                <div className="flex flex-col gap-5">
                  <h1 className=" text-3xl md:text-6xl mtext-6xl font-[700]">
                    {movieDitails?.title}
                  </h1>
                  {movieDitails.vote_average && (
                    <StarRatings
                      starRatedColor="gold"
                      rating={movieDitails.vote_average / 2}
                      numberOfStars={5}
                      starDimension="30"
                      starSpacing="1px"
                    />
                  )}
                  <p className="text-xl  col-span-full text-white font-light">
                    {movieDitails?.overview}
                  </p>

                  <div className="flex gap-1 flex-wrap">
                    {movieDitails?.genres?.map((genre) => {
                      return (
                        <div className=" badge badge-outline">{genre.name}</div>
                      );
                    })}
                  </div>
                  <div className="flex gap-2">
                    {movieDitails.release_date && (
                      <div className="badge badge-secondary">
                        {movieDitails.release_date}
                      </div>
                    )}
                    {movieDitails.runtime && (
                      <span className="badge badge-secondary   text-md ">
                        {formatDuration(movieDitails.runtime)}
                      </span>
                    )}
                    <span className="badge-secondary   badge   ">
                      {movieDitails.original_language}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-20 mx-auto">
        <TypeOfMovieHeader title={"Trillers"} />

        {movieDitails.videos && <VideoContainer {...movieDitails?.videos} />}

        <TypeOfMovieHeader
          title={"Cast"}
          className={"uppercase light_text_shadow"}
        />

        {movieDitails.credits && (
          <div>
            <CastContainer cast={movieDitails.credits.cast} />
          </div>
        )}

        {!!movieDitails.reviews?.results?.length && (
          <div>
            <TypeOfMovieHeader
              title={"Reviews"}
              className={"uppercase light_text_shadow"}
            />
            {movieDitails.reviews?.results && (
              <ReviewsContainer results={movieDitails.reviews.results} />
            )}
          </div>
        )}

        {loading ? (
          <SkeletonContainer />
        ) : movieDitails.recommendations?.results.length ? (
          <div>
            <TypeOfMovieHeader
              title={"recommended"}
              className={"uppercase light_text_shadow"}
            />
            {
              <SwiperContainer breakpoints={breakpoints} dir="ltr">
                {movieDitails?.recommendations?.results?.map((card, index) => {
                  if (!card.poster_path) return <></>;

                  return (
                    <SwiperSlide key={index}>
                      <SwiperContainer.SwiperCard {...card} />
                    </SwiperSlide>
                  );
                })}
              </SwiperContainer>
            }
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default MoviePage;

import React from "react";
import ReviewsContainer from "../components/Reviews/ReviewsContainer";
import VideoContainer from "../components/movie/VideoContainer";
import CastContainer from "../components/CastContainer";
import TypeOfMovieHeader from "../components/utility/TypeOfMovieHeader";
import { useParams } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import SwiperContainer from "../components/utility/Swiper/SwiperContainer";

import SkeletonContainer from "../components/utility/SkeletonContainer";
import { breakpoints } from "../components/movie/defaultSwiperProps";
import useMovieHook from "../hooks/useMovieHook";
import MovieOverview, {
  MovieOverviewSkeleton,
} from "../components/MovieOverview";
import RecommendedMovies from "../components/movie/RecommendedMovies";

const MoviePage = () => {
  const { movieId, lang } = useParams();
  const { isLoading, movie } = useMovieHook({
    query: `?append_to_response=videos,credits,recommendations,reviews&language=${lang}`,
    movieId,
  });

  return (
    <div className="md:py-4 ">
      {isLoading ? (
        <div className="mt-7">
          <MovieOverviewSkeleton />
        </div>
      ) : movie ? (
        <MovieOverview {...movie} />
      ) : (
        ""
      )}

      <div className="container mt-20 mx-auto">
        {!!movie?.videos?.results?.length && (
          <>
            <TypeOfMovieHeader
              title={"Trillers"}
              className={"light_text_shadow uppercase"}
            />
            <VideoContainer {...movie?.videos} />
          </>
        )}

        {movie?.credits?.cast && (
          <>
            <TypeOfMovieHeader
              title={"Cast"}
              className={"uppercase light_text_shadow"}
            />
            <CastContainer cast={movie.credits.cast} />
          </>
        )}

        {!!movie?.reviews?.results?.length && (
          <>
            <TypeOfMovieHeader
              title={"Reviews"}
              className={"uppercase light_text_shadow"}
            />
            {movie?.reviews?.results && (
              <ReviewsContainer results={movie.reviews.results} />
            )}
          </>
        )}

        {isLoading ? (
          <SkeletonContainer />
        ) : movie && movie.recommendations?.results.length ? (
          <RecommendedMovies movies={movie.recommendations.results} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default MoviePage;

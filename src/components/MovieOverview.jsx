import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import { formatDuration } from "../lib/runtimeFormat";

const MovieOverview = ({
  backdrop_path,
  poster_path,
  title,
  vote_average,
  genres,
  overview,
  release_date,
  runtime,
  original_language,
  id,
}) => {
  const [coverImageLoaded, setCoverImageLoaded] = useState(false);
  useEffect(() => {
    setCoverImageLoaded(false);
  }, [id]);

  return (
    <div className={`relative  `}>
      <img
        style={{
          display: coverImageLoaded ? "block" : "none",
        }}
        key={id}
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        alt=""
        className=" w-full object-cover min-h-[900px] md:h-[700px] "
        onLoad={() => setCoverImageLoaded(true)}
      />
      <img
        key={id + 1}
        style={{
          display: !coverImageLoaded ? "block" : "none",
        }}
        src={`/images/movie/pexels-tima-miroshnichenko-7991581.jpg`}
        alt=""
        className=" w-full object-cover h-[900px] md:h-[700px] "
      />

      <div className="absolute top-0 left-0 right-0 bottom-0 bg-poster">
        <div className="container mx-auto ">
          <div className="grid bg-[#0000007a]  shadow-md rounded-md p-3 mt-16 gap-2 md:grid-cols-9">
            <div className=" md:col-span-2 ">
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt=""
                className="rounded-md aspect-square shadow-2xl  h-96  max-md:w-full md:w-auto"
              />
            </div>
            <div className=" md:col-span-7  p-2  text-white">
              <div className="flex flex-col gap-5">
                <h1 className=" text-3xl md:text-6xl mtext-6xl font-[700]">
                  {title}
                </h1>
                {vote_average && (
                  <StarRatings
                    starRatedColor="gold"
                    rating={vote_average / 2}
                    numberOfStars={5}
                    starDimension="30"
                    starSpacing="1px"
                  />
                )}
                <p className="text-xl  col-span-full text-white font-light">
                  {overview}
                </p>

                <div className="flex gap-1 flex-wrap">
                  {genres?.map((genre) => {
                    return (
                      <div className=" badge badge-outline">{genre.name}</div>
                    );
                  })}
                </div>
                <div className="flex gap-2">
                  {release_date && (
                    <div className="badge badge-secondary">{release_date}</div>
                  )}
                  {runtime && (
                    <span className="badge badge-secondary   text-md ">
                      {formatDuration(runtime)}
                    </span>
                  )}
                  <span className="badge-secondary   badge   ">
                    {original_language}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const MovieOverviewSkeleton = () => {
  return (
    <div className="min-h-screen w-full  bg-black">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-5  p-3">
          <div className="skeleton w-64  bg-gray-800 shadow-sm shadow-indigo-800 max-md:w-full   h-96"></div>
          <div className="grow flex flex-col gap-3 min-w-96 h-96   ">
            <div className="skeleton h-10 w-2/5 bg-gray-800 shadow-sm shadow-indigo-800 "></div>
            <div className="skeleton h-48 w-full  bg-gray-800 shadow-sm  "></div>
            <div className="flex gap-3">
              <div className="skeleton h-8 w-32 bg-gray-800 shadow-sm shadow-indigo-800  "></div>
              <div className="skeleton h-8 w-28 bg-gray-800 shadow-sm shadow-indigo-800  "></div>
              <div className="skeleton h-8 w-28  bg-gray-800 shadow-sm shadow-indigo-800  "></div>
            </div>
            <div className="flex gap-3">
              <div className="skeleton h-5 w-10  bg-gray-800 shadow-sm shadow-indigo-800  "></div>
              <div className="skeleton h-5 w-12  bg-gray-800 shadow-sm shadow-indigo-800  "></div>
              <div className="skeleton h-5 w-10  bg-gray-800 shadow-sm shadow-indigo-800  "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieOverview;

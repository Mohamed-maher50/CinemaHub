import React from "react";
import SwiperCard from "../components/utility/Swiper/SwiperCard";

import { FaFilter } from "react-icons/fa";
import Pagination from "../components/Pagination";
import GenresNav from "../components/utility/GenresNav";
import MovieProvides from "../MovieProvides";
import useMoviesHook from "../hooks/useMoviesHook";
import { useSearchParams, useParams } from "react-router-dom";
import { GrPowerReset } from "react-icons/gr";

const DiscoverMovies = () => {
  const [searchparams, setSearchParams] = useSearchParams();
  const { lang } = useParams();

  const { isLoading, movies } = useMoviesHook({
    query: `?language=${lang}&${searchparams.toString()}`,
  });
  const restAllFiltrationValues = () => setSearchParams(new URLSearchParams());

  // const { genres } = useSelector((state) => state.genresReducer);

  // const handleSortBy = (val) => {
  //   setQuery("sort_by", val.value);
  // };
  const pagePaginationHandler = (val) => {
    setSearchParams((prev) => {
      prev.set("page", val);
      return prev;
    });
  };
  if (isLoading)
    return (
      <div className="fixed top-0 items-center justify-center flex  z-50 left-0 bottom-0 right-0 bg-[rgba(0,0,0,0.8)]">
        <div className="text-center grid gap-2">
          <img src="/camera.svg" alt="loader" />
          <h1>loading...</h1>
        </div>
      </div>
    );

  return (
    <div className="text-white">
      <div className="container mx-auto">
        <div className="my-2">
          <MovieProvides
            onClick={(id) => {
              setSearchParams((prev) => {
                prev.set("with_watch_providers", id);
                prev.set("watch_region", "US");
                return prev;
              });
            }}
          />
        </div>
        <div className="py-2 flex justify-between">
          <label
            htmlFor="discover-drawer"
            className="flex items-center gap-2 cursor-pointer text-white"
          >
            <FaFilter />
            Filter
          </label>
          <button
            onClick={restAllFiltrationValues}
            className="flex group/loader items-center gap-1"
          >
            <GrPowerReset className="text-white group-hover/loader:rotate-[360deg]  duration-500" />
            <span> REST</span>
          </button>
        </div>

        <div className="grid  pt-8 ">
          {/* <div className="col-span-3 hidden relative p-3 md:flex flex-col gap-3">
            <SelectBox
              onChange={handleSortBy}
              options={sortOption}
              className={"z-30 absolute "}
            />
            <div className="flex flex-wrap gap-y-2 gap-x-1">
              {genres.map((gen, index) => {
                return (
                  <span
                    onClick={() => {
                      setQuery("with_genres", gen.id);
                    }}
                    className="badge badge-accent cursor-pointer hover:bg-white hover:text-black duration-500"
                    key={index}
                  >
                    {gen.name}
                  </span>
                );
              })}
            </div>
            <div className="relative z-0">
              <SelectBox
                onChange={handleOnChange}
                options={languages}
                className={"z-0 absolute"}
                getOptionLabel={(obj) => {
                  return (
                    <div>
                      <span>{obj.english_name}</span>
                    </div>
                  );
                }}
                getOptionValue={(obj) => obj.iso_639_1}
              />
            </div>

            <button
              className="btn btn-secondary text-white text-lg  uppercase"
              onClick={() => {
                clear();
              }}
            >
              clear
            </button>
          </div> */}
          <div className="grid  grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 ">
            {isLoading ? (
              "loading..."
            ) : movies?.results?.length ? (
              movies?.results?.map((move, index) => {
                return <SwiperCard {...move} key={index} index={index} />;
              })
            ) : (
              <h1 className="w-fit mx-auto text-3xl block col-span-full">
                🙆‍♂️No Results🍿
              </h1>
            )}
            {movies?.total_pages > 1 && (
              <div className="flex text-white col-span-full">
                <Pagination
                  page={searchparams.get("page") || 1}
                  className={
                    "w-fit mx-auto  my-3 outline-offset-4 outline-white outline text-white text-xl "
                  }
                  onChange={pagePaginationHandler}
                  pageCount={movies?.total_pages}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverMovies;

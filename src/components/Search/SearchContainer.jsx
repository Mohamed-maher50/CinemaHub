import React, { useContext, useRef, useState } from "react";
import SearchInput from "./SearchInput";
import SearchContext from "../../contexts/SearchContext";
import { IoIosClose } from "react-icons/io";
import MovieSearchBox from "./MovieSearchBox";
import { debounce } from "../../lib/waitToRequest";
import useSearchMoviesHook from "../../hooks/useSearchMoviesHook";
import { useParams } from "react-router-dom";
import StaticLoader from "../Loaders/StaticLoader";
import { CiSearch } from "react-icons/ci";
import { PiFilmReelLight } from "react-icons/pi";

const SearchContainer = () => {
  const { isResultBoxOpen, closeResultBox } = useContext(SearchContext);
  const SearchInputRef = useRef(null);
  const [query, setQuery] = useState("");
  const { movies, isLoading } = useSearchMoviesHook({
    query,
  });
  let { lang } = useParams();
  const getSearchMovies = async (value) => {
    setQuery(`?query=${value}&include_adult=false&language=${lang}&page=1`);
  };

  const debounceSearch = debounce(getSearchMovies, 500);
  const handleSearch = (e) => {
    debounceSearch(SearchInputRef.current.value);
  };

  return (
    <div
      className={` fixed  min-h-screen overflow-y-auto h-0.5 top-0 left-0 right-0 bottom-0 bg-black  ${
        isResultBoxOpen ? "animate-shaw pt-40 z-50 " : "animate-hidden hidden"
      }`}
    >
      <IoIosClose
        onClick={closeResultBox}
        className="absolute  cursor-pointer right-10 top-10 text-white text-6xl"
      />
      <div className="mx-auto w-fit">
        <SearchInput ref={SearchInputRef} onChange={handleSearch} />
      </div>
      <div className="container mx-auto">
        <div className="absolute w-full left-0 right-0">
          {isLoading ? (
            <StaticLoader />
          ) : movies?.results?.length ? (
            <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              {movies?.results?.map((movie, index) => {
                return (
                  <MovieSearchBox
                    {...movie}
                    key={index}
                    index={index}
                    onClick={closeResultBox}
                  />
                );
              })}
            </div>
          ) : SearchInputRef.current?.value.trim() ? (
            <div className="text-gray-100 text-lg animate-pulse flex justify-center items-center pt-40">
              <CiSearch className="text-4xl" /> Not Found Result
            </div>
          ) : (
            <span className="text-gray-100 text-xl flex justify-center items-center pt-40">
              <PiFilmReelLight className="bg-base-orange text-[#FFD32E] text-3xl" />{" "}
              Search For Movies
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchContainer;

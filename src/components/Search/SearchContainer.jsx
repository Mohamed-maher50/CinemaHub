import React, { useContext, useState } from "react";
import SearchInput from "./SearchInput";
import SearchContext from "../../contexts/SearchContext";
import { IoIosClose } from "react-icons/io";
import MovieSearchBox from "./MovieSearchBox";
import { debounce } from "../../lib/waitToRequest";
import { SearchMovies } from "../../api/getData";

const SearchContainer = () => {
  const { isResultBoxOpen, closeResultBox } = useContext(SearchContext);
  const [SearchResult, setSearchResult] = useState({});
  const getSearchMovies = async (value) => {
    const [data, err] = await SearchMovies(
      `?query=${value}&include_adult=false&language=en-US&page=1`
    );
    if (!err) setSearchResult(data);
  };
  const debounceSearch = debounce(getSearchMovies, 500);
  const handleSearch = (e) => {
    debounceSearch(e.target.value);
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
        <SearchInput onChange={handleSearch} />
      </div>
      <div className="container mx-auto">
        <div className="absolute">
          <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {SearchResult?.results?.map((movie, index) => {
              return (
                <MovieSearchBox
                  {...movie}
                  key={index}
                  onClick={closeResultBox}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchContainer;

import React, { useEffect, useState } from "react";
import SwiperCard from "../components/utility/Swiper/SwiperCard";
import { Link, useLocation } from "react-router-dom";
import useQuery from "../lib/SearchPrams";
import { getData } from "../api/getData";
import SelectBox from "../components/SelectBox/SelectBox";
import { genres, languages, sortOption } from "../lib/basedConfig";
import { useSelector } from "react-redux";
import Pagination from "../components/Pagination";
import GenresNav from "../components/utility/GenresNav";

const DiscoverMovies = () => {
  const [query, setQuery, clear] = useQuery();
  const [discoverdMovies, setDiscoverdMovies] = useState([]);
  const { genres } = useSelector((state) => state.genresReducer);
  const location = useLocation();
  useEffect(() => {
    (async () => {
      const [data, err] = await getData(
        `/3/discover/movie?${query.toString()}`
      );
      if (!err) setDiscoverdMovies(data);
    })();
  }, [location]);
  const handleOnChange = (obj) => {
    setQuery("with_original_language", obj.iso_639_1);
  };
  const handleSortBy = (val) => {
    setQuery("sort_by", val.value);
  };
  const handlePageClick = (val) => {
    setQuery("page", val);
  };
  return (
    <div className="text-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-12 pt-8 ">
          <div className="col-span-3 hidden p-3 md:flex flex-col gap-3">
            <SelectBox onChange={handleSortBy} options={sortOption} />
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

            <SelectBox
              onChange={handleOnChange}
              options={languages}
              getOptionLabel={(obj) => {
                return (
                  <div>
                    <span>{obj.english_name}</span>
                    {/* <span className={`fi fi-${obj.iso_639_1}`}></span> */}
                  </div>
                );
              }}
              getOptionValue={(obj) => obj.iso_639_1}
            />
            <button
              className="btn btn-secondary text-white text-lg  uppercase"
              onClick={() => {
                clear();
              }}
            >
              clear
            </button>
          </div>
          <div className="grid col-span-9 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 ">
            {/* for small screens */}
            <div className="grid col-span-full grid-cols-2 gap-2 md:hidden">
              <div>
                <span className="label capitalize">movie language</span>
                <SelectBox
                  onChange={handleOnChange}
                  options={languages}
                  getOptionLabel={(obj) => {
                    return (
                      <div>
                        <span>{obj.english_name}</span>
                        {/* <span className={`fi fi-${obj.iso_639_1}`}></span> */}
                      </div>
                    );
                  }}
                  getOptionValue={(obj) => obj.iso_639_1}
                />
              </div>
              <div>
                <span className="label capitalize">sort by</span>
                <SelectBox onChange={handleSortBy} options={sortOption} />
              </div>
            </div>
            <div className="md:hidden col-span-full  ">
              <span className="label">genres</span>
              <GenresNav />
            </div>
            {discoverdMovies?.results?.map((move, index) => {
              return <SwiperCard {...move} key={index} />;
            })}
            <div className="flex text-white col-span-full">
              <Pagination
                page={query.get("page") || 1}
                className={
                  "w-fit mx-auto my-3 outline-offset-4 outline-white outline text-white text-xl "
                }
                onChange={handlePageClick}
                pageCount={discoverdMovies?.total_pages}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverMovies;

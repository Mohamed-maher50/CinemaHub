import React from "react";
import { MdDone } from "react-icons/md";
import { useSelector } from "react-redux";
import FilterHeaderList from "./FilterHeaderList";
import { useSearchParams } from "react-router-dom";
function FilterGenresItem() {
  const { genres } = useSelector((state) => state.genresReducer);
  const [searchparams, setSearchParams] = useSearchParams();
  const onGenresChange = (value) => {
    setSearchParams((prev) => {
      const prevGenres = prev.has("with_genres")
        ? prev.getAll("with_genres").toString().split(",")
        : [];
      if (prevGenres.includes(value.toString())) {
        const index = prevGenres.indexOf(value.toString());
        prevGenres.splice(index, 1);
      } else prevGenres.push(value.toString());
      if (prevGenres.length) prev.set("with_genres", prevGenres.join(","));
      else prev.delete("with_genres");
      return prev;
    });
  };

  const genresRest = () => {
    setSearchParams((prev) => {
      prev.delete("with_genres");
      return prev;
    });
  };

  return (
    <ul className="pt-4">
      <FilterHeaderList header={"Genies"} restHandler={genresRest} />

      <ul className=" gap-1 grid-cols-2 w-full grid ">
        {genres?.map((gene) => {
          return (
            <span
              onClick={() => onGenresChange(gene.id)}
              className={`${
                searchparams
                  .get("with_genres")
                  ?.split(",")
                  .includes(gene.id.toString()) &&
                " border py-1 bg-secondary rounded-sm text-white"
              } text-gray-400 gap-2 cursor-pointer duration-500 hover:text-white flex flex-nowrap`}
            >
              <span>
                <MdDone style={{ fill: "white" }} className="text-white " />
              </span>
              <span>{gene.name}</span>
            </span>
          );
        })}
      </ul>
    </ul>
  );
}

export default FilterGenresItem;

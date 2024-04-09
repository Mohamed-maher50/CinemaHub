import React, { useState } from "react";
import FilterHeaderList from "./FilterHeaderList";
import Slider from "react-slider";
import { useSearchParams } from "react-router-dom";
function FilterReleaseDateItem() {
  const [searchparams, setSearchParams] = useSearchParams();

  let initialValues = [
    searchparams.get("release_date.gte")
      ? +searchparams.get("release_date.gte").split("-")[0]
      : 1900,
    searchparams.get("release_date.lte")
      ? +searchparams.get("release_date.lte").split("-")[0]
      : new Date().getFullYear(),
  ];

  const [values, setValues] = useState(initialValues);

  const onReleaseDateChange = ([min, max]) => {
    setSearchParams((prev) => {
      prev.set("release_date.gte", `${min}-1-1`);
      prev.set("release_date.lte", `${max}-1-1`);
      return prev;
    });
  };
  const restReleaseDate = () => {
    setSearchParams((prev) => {
      prev.delete("release_date.gte");
      prev.delete("release_date.lte");
      return prev;
    });
    setValues(initialValues);
  };

  return (
    <>
      <FilterHeaderList header="Release Date" restHandler={restReleaseDate} />
      <span className="px-2">
        <Slider
          min={1900}
          onChange={setValues}
          value={values}
          defaultValue={values}
          onAfterChange={onReleaseDateChange}
          max={new Date().getFullYear()}
          className=" h-0.5 rounded-lg bg-indigo-500   w-full"
          thumbClassName="h-4 w-4 bg-indigo-300 cursor-pointer -translate-y-1/2 outline-none rounded-full"
        />
      </span>
    </>
  );
}

export default FilterReleaseDateItem;

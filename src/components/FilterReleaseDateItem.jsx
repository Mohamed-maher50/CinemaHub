import React, { useEffect, useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import FilterHeaderList from "./FilterHeaderList";
import { useSearchParams } from "react-router-dom";
function FilterReleaseDateItem() {
  const [searchparams, setSearchParams] = useSearchParams();
  let initialValues = {
    min: searchparams.get("release_date.gte")
      ? +searchparams.get("release_date.gte").split("-")[0]
      : 1900,
    max: searchparams.get("release_date.lte")
      ? +searchparams.get("release_date.lte").split("-")[0]
      : new Date().getFullYear(),
  };

  const [minValue, setMinValue] = useState(initialValues);

  const onReleaseDateChange = ({ min, max }) => {
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
    setMinValue(initialValues);
  };
  return (
    <>
      <FilterHeaderList header="Release Date" restHandler={restReleaseDate} />
      <span className="px-2">
        <InputRange
          minValue={1900}
          maxValue={new Date().getFullYear()}
          formatLabel={(val) => {
            return val;
          }}
          value={minValue}
          onChange={setMinValue}
          onChangeComplete={onReleaseDateChange}
        />
      </span>
    </>
  );
}

export default FilterReleaseDateItem;

import React, { useEffect, useState } from "react";
import FilterHeaderList from "./FilterHeaderList";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { useSearchParams } from "react-router-dom";
function FilterRatingItem() {
  const [searchparams, setSearchParams] = useSearchParams();
  let initialValues = {
    min: searchparams.get("vote_average.gte") || 0,
    max: searchparams.get("vote_average.lte") || 10,
  };
  const [minValue, setMinValue] = useState(initialValues);
  const onRatingChange = ({ min, max }) => {
    setSearchParams((prev) => {
      prev.set("vote_average.gte", min);
      prev.set("vote_average.lte", max);
      return prev;
    });
  };
  useEffect(() => {
    setMinValue(initialValues);
  }, [searchparams]);
  const restRating = () => {
    setSearchParams((prev) => {
      prev.delete("vote_average.gte");
      prev.delete("vote_average.lte");
      return prev;
    });
  };
  return (
    <>
      <FilterHeaderList header="Rating" restHandler={restRating} />
      <InputRange
        maxValue={10}
        minValue={0}
        formatLabel={() => ""}
        value={minValue}
        onChange={setMinValue}
        onChangeComplete={onRatingChange}
      />
    </>
  );
}

export default FilterRatingItem;

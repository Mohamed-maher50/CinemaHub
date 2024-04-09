import React, { useEffect, useState } from "react";
import FilterHeaderList from "./FilterHeaderList";
import { useSearchParams } from "react-router-dom";
import Slider from "react-slider";
function FilterRatingItem() {
  const [searchparams, setSearchParams] = useSearchParams();
  let initialValues = [
    searchparams.get("vote_average.gte") || 0,
    searchparams.get("vote_average.lte") || 10,
  ];
  const [values, setValues] = useState(initialValues);

  const onRatingChange = ([min, max]) => {
    setSearchParams((prev) => {
      prev.set("vote_average.gte", min);
      prev.set("vote_average.lte", max);
      return prev;
    });
  };
  useEffect(() => {
    setValues(initialValues);
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
      <Slider
        min={0}
        onChange={setValues}
        value={values}
        defaultValue={values}
        onAfterChange={onRatingChange}
        max={10}
        className=" h-0.5 rounded-lg bg-indigo-500   w-full"
        thumbClassName="h-4 w-4 bg-indigo-300 cursor-pointer -translate-y-1/2 outline-none rounded-full"
      />
    </>
  );
}

export default FilterRatingItem;

import React from "react";
import FilterHeaderList from "./FilterHeaderList";
import { LuArrowUpZA, LuArrowDownAZ } from "react-icons/lu";
import { useSearchParams } from "react-router-dom";

const SortByOptions = [
  {
    label: "popularity",
    Icon: LuArrowDownAZ,
    value: "popularity.desc",
  },

  {
    label: "revenue",
    Icon: LuArrowDownAZ,
    value: "revenue.desc",
  },
  {
    label: "release date",
    Icon: LuArrowDownAZ,
    value: "primary_release_date.desc",
  },
  {
    label: "vote count ",
    Icon: LuArrowDownAZ,
    value: "vote_count.desc",
  },

  {
    label: "title",
    Icon: LuArrowUpZA,
    value: "title.asc",
  },
  {
    label: "revenue",
    Icon: LuArrowUpZA,
    value: "revenue.asc",
  },
  {
    label: "title",
    Icon: LuArrowDownAZ,
    value: "title.desc",
  },

  {
    label: "release date",
    Icon: LuArrowUpZA,
    value: "primary_release_date.asc",
  },
  {
    label: "popularity",
    Icon: LuArrowUpZA,
    value: "popularity.asc",
  },
  {
    label: "vote count ",
    Icon: LuArrowUpZA,
    value: "vote_count.asc",
  },
];
function FilterSortByItem() {
  const [searchparams, setSearchParams] = useSearchParams();
  const onSortByChange = (value) => {
    setSearchParams((prev) => {
      prev.set("sort_by", value);
      return prev;
    });
  };
  const restSortBy = () => {
    setSearchParams((prev) => {
      prev.delete("sort_by");
      return prev;
    });
  };
  return (
    <>
      <FilterHeaderList header="Sort By" restHandler={restSortBy} />
      <ul className=" gap-1 grid-cols-2 w-full grid ">
        {SortByOptions?.map(({ label, Icon, value }) => {
          return (
            <span
              onClick={() => onSortByChange(value)}
              className={`${
                searchparams.get("sort_by") === value &&
                "bg-secondary shadow-sm rounded-sm shadow-gray-600"
              } text-gray-400 px-3 py-2  gap-2 items-center cursor-pointer hover:text-white flex flex-nowrap`}
            >
              <span>{Icon && <Icon className="text-white" />}</span>
              <span>{label}</span>
            </span>
          );
        })}
      </ul>
    </>
  );
}

export default FilterSortByItem;

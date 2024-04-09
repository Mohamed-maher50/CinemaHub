import React from "react";
import { GrPowerReset } from "react-icons/gr";

function FilterHeaderList({ header, restHandler }) {
  return (
    <ul className="flex  mb-2 pt-5 pb-4 text-base group/loader col-span-full justify-between w-full">
      <li className="">{header}</li>
      <span
        onClick={restHandler}
        className="flex gap-1  cursor-pointer    items-center  "
      >
        <span className="">
          <GrPowerReset className="text-white group-hover/loader:rotate-[360deg]  duration-500" />
        </span>
        <>Reset</>
      </span>
    </ul>
  );
}

export default FilterHeaderList;

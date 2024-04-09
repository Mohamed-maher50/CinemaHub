import React from "react";
import {
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from "react-icons/tb";

const Pagination = ({ className, page = 1, onChange, pageCount, ...props }) => {
  const nextChange = () => {
    if (page < pageCount) onChange(++page);
  };
  const prevChange = () => {
    if (page > 1) onChange(--page);
  };
  if (pageCount <= 1) return <></>;
  return (
    <div
      className={`join text-white  text-3xl  ${className ? className : ""}`}
      {...props}
    >
      <button
        className="join-item   btn-sm bg-secondary text-inherit text-xl border-none btn hover:bg-black"
        onClick={prevChange}
      >
        <TbPlayerTrackPrevFilled />
      </button>
      <button className="join-item  btn btn-sm text-inherit bg-secondary border-none hover:bg-black">
        Page {page}
      </button>
      <button
        className="join-item  btn text-inherit btn-sm bg-secondary text-xl border-none hover:bg-black"
        onClick={nextChange}
      >
        <TbPlayerTrackNextFilled />
      </button>
    </div>
  );
};

export default Pagination;

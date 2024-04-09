import React, { forwardRef } from "react";

const SearchInput = forwardRef(({ ...props }, ref) => {
  return (
    <input
      ref={ref}
      type="search"
      className="input input-bordered rounded-full  text-[rgba(255,255,255,.8)] bg-[rgba(255,255,255,.12)] h-10 w-96 font-light"
      placeholder="Search"
      {...props}
      spellCheck={false}
    />
  );
});

export default SearchInput;

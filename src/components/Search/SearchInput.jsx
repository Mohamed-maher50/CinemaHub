import React from "react";

const SearchInput = ({ onChange }) => {
  return (
    <input
      className="input input-bordered rounded-full  text-[rgba(255,255,255,.8)] bg-[rgba(255,255,255,.12)] h-10 w-96 font-light"
      placeholder="Search"
      onChange={onChange}
      spellCheck={false}
    />
  );
};

export default SearchInput;

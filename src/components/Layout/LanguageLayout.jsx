import React from "react";
import { Outlet } from "react-router-dom";
import { SearchProvider } from "../../contexts/SearchContext";
import Navbar from "../utility/Navbar";
import SearchContainer from "../Search/SearchContainer";
function LanguageLayout() {
  return (
    <>
      <SearchProvider>
        <Navbar />
        <SearchContainer />
      </SearchProvider>
      <Outlet />
    </>
  );
}

export default LanguageLayout;

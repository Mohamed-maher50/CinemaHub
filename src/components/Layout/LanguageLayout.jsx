import React from "react";
import { Outlet } from "react-router-dom";
import { SearchProvider } from "../../contexts/SearchContext";
import Navbar from "../utility/Navbar";
import SearchContainer from "../Search/SearchContainer";
import Footer from "../Footer";
function LanguageLayout() {
  return (
    <>
      <SearchProvider>
        <Navbar />
        <SearchContainer />
      </SearchProvider>
      <Outlet />
      <Footer />
    </>
  );
}

export default LanguageLayout;

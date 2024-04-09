import { createContext, useEffect, useState } from "react";

const SearchContext = createContext();
export const SearchProvider = ({ children }) => {
  const [isResultBoxOpen, setIsResultBoxOpen] = useState(false);
  const [resulting, setResulting] = useState([]);
  const closeResultBox = () => {
    setIsResultBoxOpen(false);
  };
  useEffect(() => {
    if (isResultBoxOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isResultBoxOpen]);
  const openResultBox = () => {
    setIsResultBoxOpen(true);
  };
  return (
    <SearchContext.Provider
      value={{ isResultBoxOpen, closeResultBox, openResultBox }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;

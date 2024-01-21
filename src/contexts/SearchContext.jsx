import { createContext, useState } from "react";

const SearchContext = createContext();
export const SearchProvider = ({ children }) => {
  const [isResultBoxOpen, setIsResultBoxOpen] = useState(false);
  const [resulting, setResulting] = useState([]);
  const closeResultBox = () => {
    setIsResultBoxOpen(false);
  };
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

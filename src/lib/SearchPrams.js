import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const pushSearchParams = (key, value) => {
  const url = new URLSearchParams(window.location.search.toString());
  if (!url.get(key)) url.append(key, value);
  return url.toString();
};
const useQuery = () => {
  const location = useLocation();
  const nav = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const setQuery = (key, value) => {
    if (!queryParams.get(key)) queryParams.append(key, value);
    if (queryParams.get(key)) queryParams.set(key, value);
    nav(`?${queryParams.toString()}`);
  };
  const clear = () => {
    nav("?");
  };
  return [queryParams, setQuery, clear];
};

export default useQuery;

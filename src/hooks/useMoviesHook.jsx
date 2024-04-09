import { useEffect } from "react";
import { useState } from "react";
import { getData } from "../api/getData";

const useMoviesHook = ({ query = "" }) => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);

    getData(`/3/discover/movie${query}`)
      .then(([data, err]) => {
        if (!err) setMovies(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [query]);
  return { movies, isLoading };
};

export default useMoviesHook;

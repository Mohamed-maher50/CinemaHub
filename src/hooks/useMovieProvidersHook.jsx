import { useEffect } from "react";
import { useState } from "react";
import { getData } from "../api/getData";

const useMovieProvidersHook = () => {
  const [providers, setProviders] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getData(`https://api.themoviedb.org/3/watch/providers/movie`)
      .then((result) => {
        setProviders(result[0]?.results);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return { providers, isLoading };
};

export default useMovieProvidersHook;

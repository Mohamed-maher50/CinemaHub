import { useEffect } from "react";
import { useState } from "react";
import { getData } from "../api/getData";

const useMovieHook = ({ movieId, query = "" }) => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getData(`https://api.themoviedb.org/3/movie/${movieId}${query}`)
      .then((result) => {
        setMovie(result[0]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [query, movieId]);
  return { movie, isLoading };
};

export default useMovieHook;

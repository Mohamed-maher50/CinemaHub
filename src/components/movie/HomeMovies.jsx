import React from "react";
import { HomeMoviesWithLoader } from "./MovieHomeContainer";
import { useInView } from "react-intersection-observer";

const HomeMovies = ({ ...props }) => {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "100px",
    triggerOnce: true,
  });
  return <span ref={ref}>{inView && <HomeMoviesWithLoader {...props} />}</span>;
};

export default HomeMovies;

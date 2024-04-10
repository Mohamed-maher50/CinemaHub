import React, { useEffect, useState } from "react";
import { getData } from "../api/getData";
import { useSelector } from "react-redux";
import HeroMovies from "../components/HeroMovies";
import { useSearchParams, useParams, useNavigate } from "react-router-dom";
import HomeMovies from "../components/movie/HomeMovies";
import MovieProvides from "../MovieProvides";

const Home = () => {
  const { genres } = useSelector((state) => state.genresReducer);
  const [topRatingMovies, setTopRatingMovies] = useState([]);
  const [searchparams] = useSearchParams();
  const { lang } = useParams();
  const nav = useNavigate();
  useEffect(() => {
    (async () => {
      const [data, err] = await getData(
        `/3/movie/top_rated?language=${lang}&${searchparams.toString()} `
      );
      if (!err) setTopRatingMovies(data);
    })();
  }, [lang, genres]);
  const providerOnClick = (id) => {
    nav({
      pathname: `discover`,
      search: `with_watch_providers=${id}&watch_region=US`,
    });
  };
  return (
    <div className="flex flex-col gap-4">
      <HeroMovies data={topRatingMovies} />

      <MovieProvides key={lang} onClick={providerOnClick} />

      <>
        {genres?.map((gene, index) => {
          return (
            <div className="overflow-hidden" key={index}>
              <HomeMovies
                key={index}
                genre={gene}
                seeMoreLink={`discover?with_genres=${gene.id}`}
              />
            </div>
          );
        })}
      </>
    </div>
  );
};

export default Home;

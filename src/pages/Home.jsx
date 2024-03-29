import React, { useEffect, useState } from "react";
import MovieContainer from "../components/movie/MovieContainer";
import { getData } from "../api/getData";
import { useSelector } from "react-redux";
import SkeletonContainer from "../components/utility/SkeletonContainer";
import HeroMovies from "../components/HeroMovies";
const heroes = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: "/f1AQhx6ZfGhPZFTVKgxG91PhEYc.jpg",
      genre_ids: [36, 10752, 18],
      id: 753342,
      original_language: "en",
      original_title: "Napoleon",
      overview:
        "An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his wife, Josephine.",
      popularity: 2738.782,
      poster_path: "/jE5o7y9K6pZtWNNMEw3IdpHuncR.jpg",
      release_date: "2023-11-22",
      title: "Napoleon",
      video: false,
      vote_average: 6.5,
      vote_count: 1155,
    },
    {
      adult: false,
      backdrop_path: "/md848EEPm3dHZOqwGxxTVwH2vu5.jpg",
      genre_ids: [18, 36],
      id: 906126,
      original_language: "es",
      original_title: "La sociedad de la nieve",
      overview:
        "On October 13, 1972, Uruguayan Air Force Flight 571, chartered to take a rugby team to Chile, crashes into a glacier in the heart of the Andes.",
      popularity: 1568.827,
      poster_path: "/2e853FDVSIso600RqAMunPxiZjq.jpg",
      release_date: "2023-12-13",
      title: "Society of the Snow",
      video: false,
      vote_average: 2,
      vote_count: 852,
    },
    {
      adult: false,
      backdrop_path: "/dvNrgldueQciabkYmlCnyhmaPoO.jpg",
      genre_ids: [28, 9648, 53, 27],
      id: 899445,
      original_language: "en",
      original_title: "Deep Fear",
      overview:
        "A solo trip aboard a yacht takes a terrifying turn when a woman encounters three drug traffickers clinging to the shattered remains of a boat. They soon force her to dive into shark-infested waters to retrieve kilos of cocaine from the sunken wreck.",
      popularity: 1333.609,
      poster_path: "/ruujFw7J0Nd3BSjbN3QODym82Qs.jpg",
      release_date: "2023-10-18",
      title: "Deep Fear",
      video: false,
      vote_average: 4.8,
      vote_count: 44,
    },
    {
      adult: false,
      backdrop_path: "/jXJxMcVoEuXzym3vFnjqDW4ifo6.jpg",
      genre_ids: [28, 12, 14],
      id: 572802,
      original_language: "en",
      original_title: "Aquaman and the Lost Kingdom",
      overview:
        "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
      popularity: 1139.841,
      poster_path: "/8xV47NDrjdZDpkVcCFqkdHa3T0C.jpg",
      release_date: "2023-12-20",
      title: "Aquaman and the Lost Kingdom",
      video: false,
      vote_average: 6.5,
      vote_count: 500,
    },
    {
      adult: false,
      backdrop_path: "/4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg",
      genre_ids: [28, 53],
      id: 866398,
      original_language: "en",
      original_title: "The Beekeeper",
      overview:
        "One man’s campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as Beekeepers.",
      popularity: 865.04,
      poster_path: "/A7EByudX0eOzlkQ2FIbogzyazm2.jpg",
      release_date: "2024-01-10",
      title: "The Beekeeper",
      video: false,
      vote_average: 7.4,
      vote_count: 75,
    },
    {
      adult: false,
      backdrop_path: "/rsG3b17WzUaMKCgHjMRPNaBlfcM.jpg",
      genre_ids: [28, 53],
      id: 927107,
      original_language: "en",
      original_title: "The Bricklayer",
      overview:
        "Someone is blackmailing the CIA by assassinating foreign journalists and making it look like the agency is responsible. As the world begins to unite against the U.S., the CIA must lure its most brilliant – and rebellious – operative out of retirement, forcing him to confront his checkered past while unraveling an international conspiracy.",
      popularity: 783.378,
      poster_path: "/pwOQ9lqLX1OgsJRSybS662wMcu8.jpg",
      release_date: "2023-12-14",
      title: "The Bricklayer",
      video: false,
      vote_average: 6.5,
      vote_count: 38,
    },
    {
      adult: false,
      backdrop_path: "/bmlkLCjrIWnnZzdAQ4uNPG9JFdj.jpg",
      genre_ids: [35, 10751, 14],
      id: 787699,
      original_language: "en",
      original_title: "Wonka",
      overview:
        "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
      popularity: 754.896,
      poster_path: "/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
      release_date: "2023-12-06",
      title: "Wonka",
      video: false,
      vote_average: 7.1,
      vote_count: 998,
    },
    {
      adult: false,
      backdrop_path: "/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
      genre_ids: [18, 36],
      id: 872585,
      original_language: "en",
      original_title: "Oppenheimer",
      overview:
        "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
      popularity: 681.553,
      poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      release_date: "2023-07-19",
      title: "Oppenheimer",
      video: false,
      vote_average: 8.1,
      vote_count: 6135,
    },
    {
      adult: false,
      backdrop_path: "/k1KrbaCMACQiq7EA0Yhw3bdzMv7.jpg",
      genre_ids: [16, 10751, 10402, 14, 35],
      id: 901362,
      original_language: "en",
      original_title: "Trolls Band Together",
      overview:
        "When Branch's brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
      popularity: 647.677,
      poster_path: "/bkpPTZUdq31UGDovmszsg2CchiI.jpg",
      release_date: "2023-10-12",
      title: "Trolls Band Together",
      video: false,
      vote_average: 7.2,
      vote_count: 532,
    },
    {
      adult: false,
      backdrop_path: "/5a4JdoFwll5DRtKMe7JLuGQ9yJm.jpg",
      genre_ids: [18, 878, 28],
      id: 695721,
      original_language: "en",
      original_title: "The Hunger Games: The Ballad of Songbirds & Snakes",
      overview:
        "64 years before he becomes the tyrannical president of Panem, Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12.",
      popularity: 623.904,
      poster_path: "/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg",
      release_date: "2023-11-15",
      title: "The Hunger Games: The Ballad of Songbirds & Snakes",
      video: false,
      vote_average: 7.2,
      vote_count: 1477,
    },
    {
      adult: false,
      backdrop_path: "/t9rOTMHcE26MqcTSRF1LUicsY5b.jpg",
      genre_ids: [16, 35, 10751],
      id: 1075794,
      original_language: "en",
      original_title: "Leo",
      overview:
        "Jaded 74-year-old lizard Leo has been stuck in the same Florida classroom for decades with his terrarium-mate turtle. When he learns he only has one year left to live, he plans to escape to experience life on the outside but instead gets caught up in the problems of his anxious students — including an impossibly mean substitute teacher.",
      popularity: 615.909,
      poster_path: "/pD6sL4vntUOXHmuvJPPZAgvyfd9.jpg",
      release_date: "2023-11-17",
      title: "Leo",
      video: false,
      vote_average: 7.5,
      vote_count: 820,
    },
    {
      adult: false,
      backdrop_path: "/r9oTasGQofvkQY5vlUXglneF64Z.jpg",
      genre_ids: [28, 35],
      id: 1029575,
      original_language: "en",
      original_title: "The Family Plan",
      overview:
        "Dan Morgan is many things: a devoted husband, a loving father, a celebrated car salesman. He's also a former assassin. And when his past catches up to his present, he's forced to take his unsuspecting family on a road trip unlike any other.",
      popularity: 574.333,
      poster_path: "/a6syn9qcU4a54Lmi3JoIr1XvhFU.jpg",
      release_date: "2023-12-14",
      title: "The Family Plan",
      video: false,
      vote_average: 7.4,
      vote_count: 716,
    },
    {
      adult: false,
      backdrop_path: "/rz8GGX5Id2hCW1KzAIY4xwbQw1w.jpg",
      genre_ids: [28, 35, 80],
      id: 955916,
      original_language: "en",
      original_title: "Lift",
      overview:
        "An international heist crew, led by Cyrus Whitaker, race to lift $500 million in gold from a passenger plane at 40,000 feet.",
      popularity: 568.194,
      poster_path: "/46sp1Z9b2PPTgCMyA87g9aTLUXi.jpg",
      release_date: "2024-01-10",
      title: "Lift",
      video: false,
      vote_average: 6.1,
      vote_count: 172,
    },
    {
      adult: false,
      backdrop_path: "/sRLC052ieEzkQs9dEtPMfFxYkej.jpg",
      genre_ids: [878, 18, 28],
      id: 848326,
      original_language: "en",
      original_title: "Rebel Moon - Part One: A Child of Fire",
      overview:
        "When a peaceful colony on the edge of the galaxy finds itself threatened by the armies of the tyrannical Regent Balisarius, they dispatch Kora, a young woman with a mysterious past, to seek out warriors from neighboring planets to help them take a stand.",
      popularity: 552.621,
      poster_path: "/ui4DrH1cKk2vkHshcUcGt2lKxCm.jpg",
      release_date: "2023-12-15",
      title: "Rebel Moon - Part One: A Child of Fire",
      video: false,
      vote_average: 6.4,
      vote_count: 1228,
    },
    {
      adult: false,
      backdrop_path: "/1X7vow16X7CnCoexXh4H4F2yDJv.jpg",
      genre_ids: [80, 18, 36],
      id: 466420,
      original_language: "en",
      original_title: "Killers of the Flower Moon",
      overview:
        "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one—until the FBI steps in to unravel the mystery.",
      popularity: 535.607,
      poster_path: "/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg",
      release_date: "2023-10-18",
      title: "Killers of the Flower Moon",
      video: false,
      vote_average: 7.5,
      vote_count: 1899,
    },
    {
      adult: false,
      backdrop_path: "/15BnuDQ8pYRmLqPZKAk5vIhUu9J.jpg",
      genre_ids: [37, 53, 28],
      id: 843380,
      original_language: "en",
      original_title: "Dead for a Dollar",
      overview:
        "In 1897, veteran bounty hunter Max Borlund is deep into Mexico where he encounters professional gambler and outlaw Joe Cribbens — a sworn enemy he sent to prison years before. Max is on a mission to find and return Rachel Kidd, the wife of a wealthy businessman, who as the story is told to Max, has been abducted by Buffalo Soldier Elijah Jones. Max is ultimately faced with a showdown to save honor.",
      popularity: 529.629,
      poster_path: "/1AnXfjxFqMsQmUPSvt9YxUJhfFw.jpg",
      release_date: "2022-09-30",
      title: "Dead for a Dollar",
      video: false,
      vote_average: 5.7,
      vote_count: 186,
    },
    {
      adult: false,
      backdrop_path: "/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
      genre_ids: [16, 10751, 12, 14, 35],
      id: 502356,
      original_language: "en",
      original_title: "The Super Mario Bros. Movie",
      overview:
        "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
      popularity: 486.066,
      poster_path: "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
      release_date: "2023-04-05",
      title: "The Super Mario Bros. Movie",
      video: false,
      vote_average: 7.7,
      vote_count: 7797,
    },
    {
      adult: false,
      backdrop_path: "/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg",
      genre_ids: [28, 80, 53],
      id: 385687,
      original_language: "en",
      original_title: "Fast X",
      overview:
        "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
      popularity: 475.072,
      poster_path: "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
      release_date: "2023-05-17",
      title: "Fast X",
      video: false,
      vote_average: 7.2,
      vote_count: 4704,
    },
    {
      adult: false,
      backdrop_path: "/sLdlUypLzpQiJvO2dmqx5J7rigP.jpg",
      genre_ids: [27, 53, 9648],
      id: 1118595,
      original_language: "en",
      original_title: "The Jester",
      overview:
        "A malevolent being known as The Jester terrorizes the inhabitants of a small town on Halloween night, including two estranged sisters who must come together to find a way to defeat this evil entity.",
      popularity: 473.044,
      poster_path: "/jsOaCojcuxktg8w1UQkoFfn1y1g.jpg",
      release_date: "2023-09-20",
      title: "The Jester",
      video: true,
      vote_average: 6.2,
      vote_count: 131,
    },
    {
      adult: false,
      backdrop_path: "/9jPoyxjiEYPylUIMI3Ntixf8z3M.jpg",
      genre_ids: [16, 12, 35, 10751],
      id: 520758,
      original_language: "en",
      original_title: "Chicken Run: Dawn of the Nugget",
      overview:
        "A band of fearless chickens flock together to save poultry-kind from an unsettling new threat: a nearby farm that's cooking up something suspicious.",
      popularity: 465.193,
      poster_path: "/exNtEY8QUuQh9e23wSQjkPxKIU3.jpg",
      release_date: "2023-12-08",
      title: "Chicken Run: Dawn of the Nugget",
      video: false,
      vote_average: 7.2,
      vote_count: 460,
    },
  ],
  total_pages: 44219,
  total_results: 884367,
};
const Home = () => {
  const { genres } = useSelector((state) => state.genresReducer);
  const { lang } = useSelector((state) => state.SettingsReducer);
  const [topRatingMovies, setTopRatingMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [movieLoading, setMovieLoading] = useState(false);
  useEffect(() => {
    setMovieLoading(true);
    (async () => {
      const [data, err] = await getData(`/3/movie/top_rated?language=${lang}`);
      if (!err) setTopRatingMovies(data);
      const genresReq = genres?.map((gene) => {
        return getData(
          `/3/discover/movie?with_genres=${
            gene.id
          }&with_original_language=en&language=${lang || "en"}`
        );
      });
      const discoveredMovies = await Promise.all(genresReq).then((data) => {
        const result = data.map(([genre], index) => {
          return {
            genre,
            object: genres[index],
          };
        });
        return result;
      });
      setMovies(discoveredMovies);
      setMovieLoading(false);
    })();
  }, [lang, genres]);

  return (
    <div className="grid gap-y-4">
      <HeroMovies data={topRatingMovies} dir={lang == "ar" ? "rtl" : "ltr"} />
      {movieLoading && <SkeletonContainer />}
      {movieLoading && <SkeletonContainer />}
      {movieLoading && <SkeletonContainer />}
      {movieLoading && <SkeletonContainer />}
      {movieLoading && <SkeletonContainer />}
      {movies?.map((movie, index) => (
        <MovieContainer
          key={index}
          data={movie?.genre?.results}
          loading={movieLoading}
          title={movie?.object?.name}
          seeMoreLink={`/discover?with_genres=${movie?.object?.id}`}
        />
      ))}
    </div>
  );
};

export default Home;

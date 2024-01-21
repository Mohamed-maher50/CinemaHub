import React, { useState } from "react";
import SwiperContainer from "./Swiper/SwiperContainer";
import { SwiperSlide } from "swiper/react";
import { pushSearchParams } from "../../lib/SearchPrams";
import { useNavigate } from "react-router-dom";
const { genres } = {
  genres: [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ],
};
const GenresNav = () => {
  const nav = useNavigate();
  const [active] = useState(-1);
  const handleOnClick = (key, id) => {
    const url = pushSearchParams(key, id);
    nav("/discover?" + url);
  };
  return (
    <div role="tablist" className="tabs  tabs-boxed">
      <SwiperContainer
        slidesPerView={3}
        breakpoints={{
          640: {
            slidesPerView: 5,
            spaceBetween: 20,
          },

          1024: {
            slidesPerView: 6,
          },
          1300: {
            slidesPerView: 8,
          },
        }}
        className={"overflow-hidden genresNav"}
        loop={true}
      >
        {genres.map((genre, index) => {
          return (
            <SwiperSlide key={index}>
              <span
                onClick={() => handleOnClick("with_genres", genre.id)}
                role="tab"
                className={`tab ${active === index && "tab-active"}`}
                key={index}
              >
                {genre.name}
              </span>
            </SwiperSlide>
          );
        })}
      </SwiperContainer>
    </div>
  );
};

export default GenresNav;

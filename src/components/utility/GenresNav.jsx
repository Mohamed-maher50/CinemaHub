import React from "react";
import SwiperContainer from "./Swiper/SwiperContainer";
import { SwiperSlide } from "swiper/react";
import useQuery from "../../lib/SearchPrams";
import { useSelector } from "react-redux";

const GenresNav = () => {
  const { genres } = useSelector((state) => state.genresReducer);
  const [query, serQuery] = useQuery();
  const handleOnClick = (key, id) => {
    serQuery("with_genres", id);
  };

  return (
    <div role="tablist" className="tabs z-0 tabs-boxed">
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
        pagination={false}
        navigation={{
          enabled: false,
        }}
        className={"overflow-hidden genresNav"}
        loop={true}
        freeMode={{
          enabled: true,
          momentumBounce: true,
        }}
      >
        {genres?.map((genre, index) => {
          return (
            <SwiperSlide key={index}>
              <span
                onClick={() => handleOnClick("with_genres", genre.id)}
                role="tab"
                className={`tab  z-0 ${
                  query.get("with_genres") == genre.id && "tab-active"
                }`}
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

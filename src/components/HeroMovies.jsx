import React, { useRef } from "react";
import { SwiperSlide } from "swiper/react";
import SwiperContainer from "./utility/Swiper/SwiperContainer";
import ProgressCircle from "./utility/ProgressCircle";
import { FaPlay } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";

const defaultProps = {
  centeredSlidesBounds: true,
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: false,
  },
  freeMode: {
    enabled: true,
    momentum: true,
    momentumRatio: 0.2,
    sticky: true,
  },
  className: "h-[500px] mb-24",
};
const HeroMovies = ({ data, dir, ...props }) => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const { lang } = useParams();
  return (
    <SwiperContainer
      key={lang}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      {...defaultProps}
      {...props}
    >
      {data?.results?.map((card, index) => {
        return (
          <SwiperSlide
            key={index}
            dir={dir || "ltr"}
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${card.backdrop_path})`,
            }}
            className=" bg-cover"
          >
            <div className="absolute  flex flex-col top-0 left-0 bottom-0 right-0 bg-gradient-to-t from-black to-transparent">
              <div className="container mx-auto flex-grow gap-3 justify-end flex-col flex">
                <div className="join flex flex-col  gap-3">
                  <ProgressCircle
                    className={
                      "w-24 md:w-32 text-xl font-bold text-white join-item"
                    }
                    percent={(card.vote_average * 10).toFixed(2)}
                    steps={20}
                  />
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-4xl md:text-6xl text-white  bottom-12">
                    {card.title}
                  </h1>
                </div>
                <p className="text-white opacity-70 font-light">
                  {card.overview}
                </p>
                <span className="text-white badge-outline badge">
                  {card.release_date}
                </span>{" "}
                <Link
                  to={`movie/${card.id}`}
                  className="w-14 h-14 border-white border bg-white rounded-full shadow-sm  flex justify-center items-center cursor-pointer relative after:w-full duration-300 hover:scale-105 hover:after:w-0 hover:after:h-0 after:rounded-full after:duration-500  after:bg-secondary after:h-full  hover:after:text-secondary group  text-xl"
                >
                  <FaPlay className="absolute left-1/2 top-1/2 -translate-x-1/2  -translate-y-1/2 text-white group-hover:text-secondary text-2xl" />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
      <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
    </SwiperContainer>
  );
};

export default HeroMovies;

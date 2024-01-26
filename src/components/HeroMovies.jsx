import React, { useRef } from "react";
import { SwiperSlide } from "swiper/react";
import SwiperContainer from "./utility/Swiper/SwiperContainer";
import ProgressCircle from "./utility/ProgressCircle";

const defaultProps = {
  centeredSlidesBounds: true,

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
const HeroMovies = ({ data }) => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <SwiperContainer onAutoplayTimeLeft={onAutoplayTimeLeft} {...defaultProps}>
      {data?.results?.map((card, index) => {
        console.log(card.vote_average * 10);
        return (
          <SwiperSlide key={index} className=" relative overflow-hidden ">
            <SwiperContainer.SwiperHeroImage
              {...card}
              className=" h-[300px]  overflow-hidden"
            />
            <div className="absolute flex flex-col top-0 left-0 bottom-0 right-0 bg-gradient-to-t from-black to-transparent">
              <div className="container mx-auto flex-grow gap-3 justify-end flex-col flex">
                <div className="join flex flex-col  gap-3">
                  <ProgressCircle
                    className={
                      "w-24 md:w-32 text-xl font-bold text-white join-item"
                    }
                    percent={card.vote_average * 10}
                    steps={20}
                  />
                </div>
                <h1 className="text-4xl md:text-6xl text-white  bottom-12">
                  {card.title}
                </h1>
                <p className="text-white opacity-70 font-light">
                  {card.overview}
                </p>
                <span className="text-white badge-outline badge">
                  {card.release_date}
                </span>
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

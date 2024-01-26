import React from "react";
import { Swiper } from "swiper/react";
import {
  Autoplay,
  FreeMode,
  EffectFade,
  Pagination,
  Navigation,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCard from "./SwiperCard";
import SwiperVideo from "./SwiperVideo";
import SwiperHeroImage from "./SwiperHeroImage";
const SwiperContainer = ({ children, className, ...config }) => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={10}
      modules={[Autoplay, FreeMode, EffectFade, Pagination, Navigation]}
      navigation={{
        enabled: true,
      }}
      speed={1000}
      autoplay={{
        delay: 5000,
        pauseOnMouseEnter: true,
      }}
      effect="creative"
      freeMode={{
        enabled: true,
      }}
      {...config}
      className={`relative   w-full ${className} `}
    >
      {children}
    </Swiper>
  );
};
SwiperContainer.SwiperCard = SwiperCard;
SwiperContainer.SwiperVideo = SwiperVideo;
SwiperContainer.SwiperHeroImage = SwiperHeroImage;
export default SwiperContainer;

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import useMovieProvidersHook from "./hooks/useMovieProvidersHook";
import MovieProvidersCard from "./components/MovieProvidersCard";
import "swiper/css/navigation";
import { useSearchParams, useParams } from "react-router-dom";
let breakpoints = {
  640: {
    slidesPerView: 7,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 8,
  },
  1024: {
    slidesPerView: 10,
  },
  1300: {
    slidesPerView: 15,
  },
};
function MovieProvides() {
  const { providers } = useMovieProvidersHook();
  const [searchparams, setSearchParams] = useSearchParams();

  const movieProviderClickHandler = (provider_id) => {
    setSearchParams((prev) => {
      prev.set("with_watch_providers", provider_id);
      prev.set("watch_region", "US");
      return prev;
    }, {});
  };
  const { lang } = useParams();
  return (
    <>
      <Swiper
        key={lang}
        slidesPerView={5}
        modules={[Autoplay, Navigation]}
        breakpoints={breakpoints}
        speed={700}
        navigation
        slidesPerGroup={7}
        wrapperClass="z-10"
        freeMode
        loop
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
        }}
        className="select-none"
      >
        {providers?.map((provider) => {
          return (
            <SwiperSlide
              onClick={() => movieProviderClickHandler(provider.provider_id)}
            >
              <MovieProvidersCard {...provider} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default MovieProvides;

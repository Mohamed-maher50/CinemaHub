import React, { useState } from "react";
import SwiperContainer from "../utility/Swiper/SwiperContainer";
import YouTubePlayer from "react-player/youtube";
import { SwiperSlide } from "swiper/react";
import LoadingYoutubeVideo from "./LoadingYoutubeVideo";

const VideoContainer = ({ results }) => {
  const [loading, setLoading] = useState(true);
  const handleReadyToPlay = (d) => {
    setLoading(false);
  };
  const handleOnError = () => {
    setLoading(false);
  };
  return (
    <SwiperContainer
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
      }}
      autoplay={false}
    >
      {results.map((video, index) => {
        return (
          <>
            <SwiperSlide key={index}>
              {loading && (
                <LoadingYoutubeVideo
                  className={"w-[650px] bg-secondary h-[360px]"}
                />
              )}
              {
                <YouTubePlayer
                  onError={handleOnError}
                  onReady={handleReadyToPlay}
                  width={"100%"}
                  url={`https://www.youtube.com/watch?v=${video.key}`}
                  volume={100}
                  controls={true}
                  stopOnUnmount={true}
                  style={{ display: loading ? "none" : "block" }}
                />
              }
            </SwiperSlide>
          </>
        );
      })}
    </SwiperContainer>
  );
};

export default VideoContainer;

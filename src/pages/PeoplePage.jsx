import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import SocialIcons from "../components/People/SocialIcons";
import SwiperContainer from "../components/utility/Swiper/SwiperContainer";
import { SwiperSlide } from "swiper/react";
import SwiperCard from "../components/utility/Swiper/SwiperCard";
import TypeOfMovieHeader from "../components/utility/TypeOfMovieHeader";
import { useParams } from "react-router-dom";
import { getData } from "../lib/people";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const PeoplePage = () => {
  const [personalData, setPersonalData] = useState({});
  // const { language } = useLanguage();
  console.log(personalData);
  const { personId } = useParams();

  useEffect(() => {
    (async () => {
      const [data, err] = await getData(
        `/3/person/${personId}?append_to_response=movie_credits,external_ids&language=${i18n.language}`
      );
      console.log(data);
      if (!err) setPersonalData(data);
    })();

    console.log(i18n.language);
  }, [personId, i18n.language]);

  return (
    <div>
      <div className="container mx-auto text-white">
        <div className="grid md:grid-cols-5 gap-5 pt-14">
          <div className="md:col-span-1">
            <img
              src={`https://image.tmdb.org/t/p/original/${personalData?.profile_path}`}
              alt={personalData?.name}
              className=" rounded-lg shadow-lg  shadow-slate-900"
            />

            <div className="flex flex-col gap-2">
              <div className=" rounded-md p-1 flex  my-2 w-fit gap-2 text-yellow-500">
                <SocialIcons
                  link={`https://twitter.com/${personalData.external_ids?.twitter_id}`}
                >
                  <FaTwitter />
                </SocialIcons>
                <SocialIcons
                  link={`https://www.instagram.com/${personalData.external_ids?.instagram_id}`}
                >
                  <FaInstagram />
                </SocialIcons>
                <SocialIcons
                  link={`https://www.facebook.com/${personalData.external_ids?.facebook_id}`}
                >
                  <FaFacebookF />
                </SocialIcons>
              </div>
              <div className="badge  badge-secondary p-3">
                <span className="pr-2">known for department :</span>
                <span>{personalData?.known_for_department}</span>
              </div>
              <div className="badge  badge-secondary p-3">
                <span className="pr-2">Birthday :</span>
                <span>{personalData?.birthday}</span>
              </div>
              <div className="badge  badge-secondary p-3">
                <span className="pr-2">Gender :</span>
                <span>{personalData.gender === 2 ? "male" : "female"}</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-4">
            <h1 className="text-6xl font-[900] border-b-4 w-fit mb-2 pb-2 ">
              {personalData.name}
            </h1>
            <p className="font-light text-white opacity-80">
              {personalData.biography}
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <TypeOfMovieHeader title={"cruw"} className={"light_text_shadow"} />
      </div>
      <SwiperContainer
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1300: {
            slidesPerView: 5,
          },
        }}
      >
        {personalData.movie_credits?.crew?.map((movie, index) => {
          return (
            <SwiperSlide key={index}>
              <SwiperCard {...movie} />
            </SwiperSlide>
          );
        })}
      </SwiperContainer>
      <div className="container mx-auto">
        <TypeOfMovieHeader
          title={"movie credits"}
          className={"light_text_shadow"}
        />
      </div>
      <SwiperContainer
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1300: {
            slidesPerView: 5,
          },
        }}
      >
        {personalData.movie_credits?.cast?.map((movie, index) => {
          return (
            <SwiperSlide key={index}>
              <SwiperCard {...movie} />
            </SwiperSlide>
          );
        })}
      </SwiperContainer>
    </div>
  );
};

export default PeoplePage;

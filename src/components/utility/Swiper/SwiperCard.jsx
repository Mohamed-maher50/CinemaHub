import React from "react";
import { Link, useParams } from "react-router-dom";
import ProgressCircle from "../../ProgressCircle";
const SwiperCard = ({
  poster_path,
  title,
  vote_average,
  popularity,
  release_date,
  genres,
  profile_path,
  id,
}) => {
  console.log(profile_path);
  const { lang } = useParams();
  if (!poster_path) return <></>;
  console.log(poster_path);
  return (
    <Link
      to={`/${lang}/movie/${id}`}
      className="card rounded-md overflow-hidden shadow-lg shadow-secondary cursor-pointer group/item w-full h-80  "
    >
      <div className="relative h-full w-full overflow-hidden ">
        <div className="overflow-hidden h-full">
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt="Louvre"
            key={id}
            className="h-full object-cover  w-full group-hover/item:blur-sm  group-hover/item:scale-110 duration-500"
          />
        </div>
        <div className="absolute flex flex-col p-2 opacity-0 group-hover/item:opacity-100 bottom-0 right-0 left-0 duration-500 z-10 top-0 via-transparent  bg-gradient-to-t  from-black via-10% to-black">
          <div className="flex flex-col flex-grow justify-end h-fit   gap-3">
            <div className="flex flex-wrap  flex-col   justify-between">
              <h1 className=" text-white text-2xl  duration-500  font-bold font-Roboto">
                {title}
              </h1>
            </div>
            <div className="flex justify-between items-center">
              <ProgressCircle value={vote_average * 10} />
              <h2 className="badge badge-secondary text-white">
                {release_date}
              </h2>
            </div>
            {/* <div className="flex">
              {genres?.map((gen, index) => {
                return (
                  <div className="badge badge-accent" key={index}>
                    {gen.name}
                  </div>
                );
              })}
            </div> */}
          </div>
        </div>
        <div className="absolute bottom-0 z-10  left-0 right-0 top-0 h-full w-full  opacity-0 transition duration-300 ease-in-out hover:opacity-70"></div>
      </div>
    </Link>
  );
};

export default SwiperCard;

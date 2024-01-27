import React from "react";
import StarRatings from "react-star-ratings";

const ReviewCard = ({ author_details, author, content, created_at }) => {
  return (
    <div className="grid grid-cols-5 gap-2 p-2 text-white">
      <div className="avatar w-fit">
        <div className="w-24 rounded-full">
          <img
            src={
              author_details.avatar_path
                ? `https://image.tmdb.org/t/p/w500/${author_details?.avatar_path}`
                : "/3551739.jpg"
            }
            alt=""
          />
        </div>
      </div>
      <div className="col-span-full grid place-content-center items-center justify-start  lg:col-span-3 ">
        <div className="">
          <h2 className="text-2xl  font-bold">
            {author_details?.name || author || "User"}
          </h2>
          <span className="text-[#999999]">{created_at}</span>
        </div>

        <StarRatings
          starRatedColor="gold"
          rating={author_details.rating / 2}
          numberOfStars={5}
          starDimension="20"
          starSpacing="1px"
        />
      </div>

      <p className="font-light col-span-full  max-h-40 lines-3 pb-4   text-sm ">
        {content}
      </p>
    </div>
  );
};

export default ReviewCard;

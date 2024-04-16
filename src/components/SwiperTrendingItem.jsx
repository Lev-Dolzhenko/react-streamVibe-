import React from "react";

//images
import durationIcon from "../images/durationIcon.svg";
import countIcon from "../images/countIcon.svg";
import seasonIcon from "../images/seasonIcon.svg";

const SwiperTrendingItem = ({
  image,
  duration,
  count,
  name,
  isShow,
  seasons,
}) => {
  return (
    <div className="trending__item">
      <div className="trending__item_image_wrapper">
        <img src={image} alt={image} className="trending__item_image" />
        <span className="trending__item_name">{name}</span>
      </div>
      <div
        className={`${
          isShow
            ? "trending__item_info trending__item_info-shows"
            : "trending__item_info"
        }`}
      >
        <span>
          <img src={durationIcon} alt="duration Icon" />
          {duration}
        </span>
        <span>
          {isShow ? (
            <>
              <img src={seasonIcon} alt="season Icon" />
              {seasons} season
            </>
          ) : (
            <>
              <img src={countIcon} alt="count Icon" />
              {count}
            </>
          )}
        </span>
      </div>
    </div>
  );
};

export default SwiperTrendingItem;

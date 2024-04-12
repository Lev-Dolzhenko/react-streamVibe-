import React from "react";

//images
import seasonsIcon from "../images/seasonIcon.svg";
import durationIcon from "../images/durationIcon.svg";

const SwiperReleasesItem = ({
  image,
  data,
  name,
  seasons,
  isShow,
  duration,
}) => {
  return (
    <div className="releases__item">
      <div className="releases__item_wrapper">
        <img src={image} alt={image} className="trending__item_image" />
        <span className="releases__item_wrapper_name">{name}</span>
      </div>
      <div
        className={`${isShow ? "releases__item_shows" : "releases__item_data"}`}
      >
        {isShow ? (
          <>
            <div className="releases__wrapper_shows">
              <img src={durationIcon} alt="duration Icon" />
              <span>{duration}</span>
            </div>
            <div className="releases__wrapper_shows">
              <img src={seasonsIcon} alt="seasons Icon" />
              <span>{seasons} season</span>
            </div>
          </>
        ) : (
          <span>{data}</span>
        )}
      </div>
    </div>
  );
};

export default SwiperReleasesItem;

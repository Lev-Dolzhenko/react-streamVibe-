import React from "react";

//images
import durationIcon from "../images/durationIcon.svg";

const SwiperMustItem = ({ duration, count, stars, image }) => {
  return (
    <div className="must">
      <div className="must__image">
        <img src={image} alt={image} />
      </div>
      <div className="must__info">
        <div className="must__info_time">
          <img src={durationIcon} alt="duration Icon" />
          <span>{duration}</span>
        </div>
        <div className="must__info_raiting">{count}K</div>
      </div>
    </div>
  );
};

export default SwiperMustItem;

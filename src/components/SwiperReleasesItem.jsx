import React from "react";

const SwiperReleasesItem = ({ image, data, name }) => {
  return (
    <div className="releases__item">
      <div className="releases__item_wrapper">
        <img src={image} alt={image} className="trending__item_image" />
        <span className="releases__item_wrapper_name">{name}</span>
      </div>
      <div className="releases__item_data">
        <span>{data}</span>
      </div>
    </div>
  );
};

export default SwiperReleasesItem;

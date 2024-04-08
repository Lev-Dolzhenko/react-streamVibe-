import React from "react";

//images
import fade from "../images/fadeForGenresItem.png";
import genresIcon from "../images/genresItemIcon.svg";

const SwiperGenresItem = ({ genre, images, isTop=false }) => {
  return (
    <div className="genres__item">
      {images.map((image) => (
        <img key={image} src={image} alt={image}></img>
      ))}
      <div
        className={`${
          isTop ? "genres__item_wrapper genres__item_wrapper_isTop" : "genres__item_wrapper"
        }`}
      >
        {isTop ? (
          <>
            <div className="genres__item_wrapper_top">
              <span className="genres__item_top">Top 10 In</span>
              <span className="genres__item_title">{genre}</span>
            </div>
            <img
              className="genres__item_icon"
              src={genresIcon}
              alt="genresIcon"
            />
          </>
        ) : (
          <>
            <span className="genres__item_title">{genre}</span>
            <img
              className="genres__item_icon"
              src={genresIcon}
              alt="genresIcon"
            />
          </>
        )}
      </div>
      <img className="genres__item_fade" src={fade} alt="fade" />
    </div>
  );
};

export default SwiperGenresItem;

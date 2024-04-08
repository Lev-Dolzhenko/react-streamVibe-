import React from "react";

//components
import ButtonAccent from "../components/ButtonAccent";
import ButtonSmall from "./ButtonSmall";

//images
import bgFadeBottom from "../images/bgFadeBottom.png";
import playIcon from "../images/playIcon.svg";
import plusIcon from "../images/plusIcon.svg";
import likeIcon from "../images/likeIcon.svg";
import soundeIcon from "../images/soundIcon.svg";


const SwiperBigItem = ({ image, title, subtitle }) => {
  return (
    <div className="swiperBig__item">
      <img src={image} alt={image} className="swiperBig__item_image" />

      <div className="swiperBig__item_text">
        <div className="swiperBig__text_title">
          <h3 className="title3">{title}</h3>
        </div>
        <div className="swiperBig__item_subtitle">
          <p className="subtitle">{subtitle}</p>
        </div>
        <div className="swiperBig__item_buttons">
          <div className="swiperBig__button_wrapper">
            <ButtonAccent icon={playIcon} text={"Play Now "} />
          </div>
          <ButtonSmall icon={plusIcon} />
          <ButtonSmall icon={likeIcon} />
          <ButtonSmall icon={soundeIcon} />
        </div>
      </div>
      <img
        className="swiperBig__item_fade"
        src={bgFadeBottom}
        alt="bgFadeBottom"
      />
    </div>
  );
};

export default SwiperBigItem;

import React, { useRef } from "react";

//images
import tempImage from "../images/imageForBigItemTemp.jpg";
import swiperButtonPrev from "../images/swiperButtonPrev.svg";
import swiperButtonNext from "../images/swiperButtonNext.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import SwiperBigItem from "../components/SwiperBigItem";

const SwiperBig = () => {
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <section className="swiperBig">
      <div className="container container_swiperBig">
        <Swiper
          loop={true}
          ref={swiperRef}
          className="mySwiper"
          slidesPerView={1}
        >
          <SwiperSlide>
            <SwiperBigItem
              image={tempImage}
              title={"Avengers : Endgame"}
              subtitle={
                "With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperBigItem
              image={tempImage}
              title={"hello title2"}
              subtitle={"hello sibtitle2"}
            />
          </SwiperSlide>
        </Swiper>
        <div className="common__wrapper_buttons big__wrapper_buttons">
          <button onClick={goPrev} className="common__wrapper_button ">
            <img src={swiperButtonPrev} alt="swiperButtonPrev" />
          </button>
          <button onClick={goNext} className="common__wrapper_button ">
            <img src={swiperButtonNext} alt="swiperButtonNext" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SwiperBig;

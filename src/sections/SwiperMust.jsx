import React, { useRef } from "react";

//images
import swiperButtonPrev from "../images/swiperButtonPrev.svg";
import swiperButtonNext from "../images/swiperButtonNext.svg";
import tempImage from "../images/imageForGenreItemTemp.jpeg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import SwiperMustItem from "../components/SwiperMustItem";

const SwiperMust = () => {
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
    <sectiom className="trending">
      <div className="container">
        <div className="must__wrapper">
          <div className="must__wrapper_text">
            <div className="must__text_title">
              <h3 className="title3">Must - Watch Movies</h3>
            </div>
          </div>
          <div className="common__wrapper_buttons ">
            <button onClick={goPrev} className="common__wrapper_button">
              <img src={swiperButtonPrev} alt="swiperButtonPrev" />
            </button>
            <button onClick={goNext} className="common__wrapper_button">
              <img src={swiperButtonNext} alt="swiperButtonNext" />
            </button>
          </div>
        </div>
        <Swiper
          loop={true}
          spaceBetween={20}
          ref={swiperRef}
          className="mySwiper"
          slidesPerView={1.5}
          breakpoints={{
            530: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 3.5,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <SwiperMustItem
              duration={"1h 57min"}
              count={"20"}
              stars={4}
              image={tempImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperMustItem
              duration={"1h 57min"}
              count={"20"}
              stars={4}
              image={tempImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperMustItem
              duration={"1h 57min"}
              count={"20"}
              stars={4}
              image={tempImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperMustItem
              duration={"1h 57min"}
              count={"20"}
              stars={4}
              image={tempImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperMustItem
              duration={"1h 57min"}
              count={"20"}
              stars={4}
              image={tempImage}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </sectiom>
  );
};

export default SwiperMust;

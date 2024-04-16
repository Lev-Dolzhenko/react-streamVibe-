import React, { useRef } from "react";

//images
import swiperButtonPrev from "../images/swiperButtonPrev.svg";
import swiperButtonNext from "../images/swiperButtonNext.svg";
import tempImage from "../images/imageForGenreItemTemp.jpeg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

//components
import SwiperTrendingItem from "../components/SwiperTrendingItem";

const SwiperTrending = ({ title, isShow, countsSlides }) => {
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
        <div className="trending__wrapper">
          <div className="trending__wrapper_text">
            <div className="trending__text_title">
              <h3 className="title3">{title}</h3>
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
          spaceBetween={16}
          ref={swiperRef}
          className="mySwiper"
          slidesPerView={1.5}
          breakpoints={{
            660: {
              slidesPerView: 2.5,
              spaceBetween: 16,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: countsSlides,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <SwiperTrendingItem
              image={tempImage}
              duration={"1h 57min"}
              count={"1.8k"}
              name={"name"}
              seasons={4}
              isShow={isShow}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperTrendingItem
              image={tempImage}
              duration={"1h 57min"}
              count={"1.8k"}
              name={"name"}
              seasons={4}
              isShow={isShow}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperTrendingItem
              image={tempImage}
              duration={"1h 57min"}
              count={"1.8k"}
              name={"name"}
              seasons={4}
              isShow={isShow}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperTrendingItem
              image={tempImage}
              duration={"1h 57min"}
              count={"1.8k"}
              name={"name"}
              seasons={4}
              isShow={isShow}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperTrendingItem
              image={tempImage}
              duration={"1h 57min"}
              count={"1.8k"}
              name={"name"}
              seasons={4}
              isShow={isShow}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperTrendingItem
              image={tempImage}
              duration={"1h 57min"}
              count={"1.8k"}
              name={"name"}
              seasons={4}
              isShow={isShow}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperTrendingItem
              image={tempImage}
              duration={"1h 57min"}
              count={"1.8k"}
              name={"name"}
              seasons={4}
              isShow={isShow}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </sectiom>
  );
};

export default SwiperTrending;

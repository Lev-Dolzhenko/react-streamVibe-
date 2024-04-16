import React, { useRef } from "react";

//components
import SwiperReleasesItem from "../components/SwiperReleasesItem";

//images
import swiperButtonPrev from "../images/swiperButtonPrev.svg";
import swiperButtonNext from "../images/swiperButtonNext.svg";
import tempImage from "../images/imageForGenreItemTemp.jpeg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const SwiperReleases = ({title, isShow, countsSlides}) => {
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
        <div className="releases__wrapper">
          <div className="releases__wrapper_text">
            <div className="releases__text_title">
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
          spaceBetween={20}
          ref={swiperRef}
          className="mySwiper"
          slidesPerView={1.5}
          // breakpoints={{
          //   530: {
          //     slidesPerView: 2.5,
          //     spaceBetween: 20,
          //   },
          //   900: {
          //     slidesPerView: 3.5,
          //     spaceBetween: 20,
          //   },
          //   1200: {
          //     slidesPerView: countsSlides,
          //     spaceBetween: 30,
          //   },
          // }}
          breakpoints={{
            660: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 20,
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
            <SwiperReleasesItem
              image={tempImage}
              data={"Released at 22 April 2023"}
              name={"name"}
              isShow={isShow}
              seasons={4}
              duration={"12h 33min"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperReleasesItem
              image={tempImage}
              data={"Released at 22 April 2023"}
              name={"name"}
              isShow={isShow}
              seasons={4}
              duration={"12h 33min"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperReleasesItem
              image={tempImage}
              data={"Released at 22 April 2023"}
              name={"name"}
              isShow={isShow}
              seasons={4}
              duration={"12h 33min"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperReleasesItem
              image={tempImage}
              data={"Released at 22 April 2023"}
              name={"name"}
              isShow={isShow}
              seasons={4}
              duration={"12h 33min"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperReleasesItem
              image={tempImage}
              data={"Released at 22 April 2023"}
              name={"name"}
              isShow={isShow}
              seasons={4}
              duration={"12h 33min"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperReleasesItem
              image={tempImage}
              data={"Released at 22 April 2023"}
              name={"name"}
              isShow={isShow}
              seasons={4}
              duration={"12h 33min"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </sectiom>
  );
};

export default SwiperReleases;

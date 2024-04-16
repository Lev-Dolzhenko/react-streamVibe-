import React, { useRef, useState, useEffect } from "react";

//components
import SwiperGenresItem from "../components/SwiperGenresItem";

//images
import tempImage from "../images/imageForGenreItemTemp.jpeg";
import swiperButtonPrev from "../images/swiperButtonPrev.svg";
import swiperButtonNext from "../images/swiperButtonNext.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

//axios
import axios from "axios";

const SwiperGenres = ({ title, subtitle }) => {
  const [films, setFilms] = useState();
  const [filmsPosters, setFilmsPosters] = useState([]);

  const url = "https://api.kinopoisk.dev/v1.4/movie?page=1&limit=20";
  const headers = {
    "X-API-KEY": "0G4PNZN-WQQ42Q4-NY9G8M7-9P4KZP1",
  };

  useEffect(() => {
    axios
      .get(url, { headers })
      .then((response) => {
        setFilms(response.data.docs);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке данных:", error.response?.data);
      });
  }, [url]);

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

  const definitelyGenre = (genre) => {
    for (let film of films) {
      const genresArr = [];

      const filmGenres = film.genres;

      for (let filmGenre of filmGenres) {
        genresArr.push(filmGenre.name);
      }
      const currGenre = film.genres[0].name;

      genresArr.find((defGenre) => {
        if (defGenre === genre) {
          setFilmsPosters((prevPosters) => [...prevPosters, film.poster[0]])
        };
      });
    }
    console.log(FilmsPosters)
  };

  useEffect(() => {
    // definitelyGenre("комедия");
  }, []);

  return (
    <section className="genres genres_movies">
      <div className="container">
        <div className="genres__wrapper">
          <div className="genres__wrapper_text">
            <div className="genres__text_title">
              <h3 className="title3">{title}</h3>
            </div>
            {subtitle && (
              <div className="genres__text_subtitle">
                <p className="subtitle">{subtitle}</p>
              </div>
            )}
          </div>
          <div className="common__wrapper_buttons genres__wrapper_buttons">
            <button
              onClick={goPrev}
              className="common__wrapper_button genres__wrapper_button"
            >
              <img src={swiperButtonPrev} alt="swiperButtonPrev" />
            </button>
            <button
              onClick={goNext}
              className="common__wrapper_button genres__wrapper_button"
            >
              <img src={swiperButtonNext} alt="swiperButtonNext" />
            </button>
          </div>
        </div>
        <Swiper
          loop={true}
          spaceBetween={30}
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
            1440: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <SwiperGenresItem
              genre={"Action"}
              images={[tempImage, tempImage, tempImage, tempImage]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperGenresItem
              genre={"Adventure"}
              images={[tempImage, tempImage, tempImage, tempImage]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperGenresItem
              genre={"Comedy"}
              images={[tempImage, tempImage, tempImage, tempImage]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperGenresItem
              genre={"Drama"}
              images={[tempImage, tempImage, tempImage, tempImage]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperGenresItem
              genre={"Horror"}
              images={[tempImage, tempImage, tempImage, tempImage]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperGenresItem
              genre={"Biography"}
              images={[tempImage, tempImage, tempImage, tempImage]}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default SwiperGenres;

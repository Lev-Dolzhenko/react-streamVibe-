import React, { useState, useEffect } from "react";

//images
import fade from "../images/fadeForGenresItem.png";
import genresIcon from "../images/genresItemIcon.svg";

//axios
import axios from "axios";

const SwiperGenresItem = ({ genre, images, isTop = false, filmGenre }) => {
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

  const definitelyGenre = (genre) => {
    setFilmsPosters((prevPosters) => {
      const newPosters = [...prevPosters];
      for (let film of films) {
        const genresArr = [];
        const filmGenres = film.genres;
        for (let filmGenre of filmGenres) {
          genresArr.push(filmGenre.name);
        }
        genresArr.find((defGenre) => {
          if (defGenre === genre) {
            newPosters.push(film.poster.previewUrl);
          }
        });
      }
      return newPosters.slice(0, 4);
    });
  };

  useEffect(() => {
    if (films) {
      definitelyGenre(filmGenre);
    }
  }, [films]);

  return (
    <div className="genres__item">
      {images.map((image) => (
        <img key={image} src={image} alt={image}></img>
      ))}
      <div
        className={`${
          isTop
            ? "genres__item_wrapper genres__item_wrapper_isTop"
            : "genres__item_wrapper"
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

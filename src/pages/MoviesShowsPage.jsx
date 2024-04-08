import React from "react";

//section
import Header from "../sections/Header";
import SwiperGenres from "../sections/SwiperGenres";
import SwiperTopGenres from "../sections/SwiperTopGenres";
import SwiperBig from "../sections/SwiperBig";

//components

const MoviesShowsPage = () => {
  return (
    <>
      <Header isHero={false} />
      <SwiperBig />
      <div className="container">
        <div className="wrapper__movies">
          <SwiperGenres title={"Our Genres"} />
          <SwiperTopGenres />
        </div>
      </div>
    </>
  );
};
export default MoviesShowsPage;

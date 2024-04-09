import React from "react";

//section
import Header from "../sections/Header";
import SwiperGenres from "../sections/SwiperGenres";
import SwiperTopGenres from "../sections/SwiperTopGenres";
import SwiperBig from "../sections/SwiperBig";
import SwiperTrending from "../sections/SwiperTrending";
import SwiperReleases from "../sections/SwiperReleases";
import Trial from "../sections/Trial";
import Footer from "../sections/Footer";

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
          <SwiperTrending />
          <SwiperReleases />
        </div>
      </div>
      <Trial />
      <Footer />
    </>
  );
};
export default MoviesShowsPage;

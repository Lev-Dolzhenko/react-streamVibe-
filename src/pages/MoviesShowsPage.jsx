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
import SwiperMust from "../sections/SwiperMust";

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
          <SwiperTrending countsSlides={5} title={"Trending Now"} />
          <SwiperReleases countsSlides={5} title={"New Releases"} />
          <SwiperMust />
        </div>
        <div className="wrapper__shows">
          <SwiperGenres title={"Our Genres"} />
          <SwiperTopGenres />
          <SwiperTrending
            countsSlides={4}
            isShow={true}
            title={"Trending Shows Now"}
          />
          <SwiperReleases countsSlides={4} title={"New Released Shows"} isShow={true}/>
          <SwiperMust />
        </div>
      </div>
      <Trial />
      <Footer />
    </>
  );
};
export default MoviesShowsPage;

import React from "react";

//sections
import Header from "../sections/Header";
import Devices from "../sections/Devices";
import Plan from "../sections/Plan";
import Trial from "../sections/Trial";
import Footer from "../sections/Footer";
import SwiperGenres from "../sections/SwiperGenres";
import Faq from "../sections/Faq";

const HomePage = () => {
  return (
    <>
      <Header />
      <SwiperGenres
        title={"Explore our wide variety of categories"}
        subtitle={
          "Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
        }
      />
      <Devices />
      <Faq />
      <Plan />
      <Trial />
      <Footer />
    </>
  );
};

export default HomePage;

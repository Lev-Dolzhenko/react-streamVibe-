import React from "react";

//sections
import Header from "../sections/Header";
import Devices from "../sections/Devices";
import Plan from "../sections/Plan";
import Trial from "../sections/Trial";
import Footer from "../sections/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <Devices />
      <Plan />
      <Trial />
      <Footer />
    </>
  );
};

export default HomePage;

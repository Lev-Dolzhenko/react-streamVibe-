import React from "react";

//componets
import Header from "../sections/Header";
import Faq from "../sections/Faq";
import Trial from "../sections/Trial";
import Footer from "../sections/Footer";
import Support from "../sections/Support";

const SupportPage = () => {
  return (
    <>
      <Header isHero={false} />
      <Support />
      <Faq />
      <Trial />
      <Footer />
    </>
  );
};

export default SupportPage;

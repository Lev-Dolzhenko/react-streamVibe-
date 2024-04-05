import React from "react";

//images
import bgTrial from "../images/bgTrial.png";
import bgFadeTrial from "../images/bgFadeTrial.png";
import ButtonAccent from "../components/ButtonAccent";

const Trial = () => {
  return (
    <section className="trial">
      <div className="container">
        <div className="trial__wrapper">
          <div className="trial__wrapper_text">
            <div className="trial__wrapper_title">
              <h2 className="title2">Start your free trial today!</h2>
            </div>
            <div className="trial__wrapper_subtitle">
              <p className="subtitle">
                This is a clear and concise call to action that encourages users
                to sign up for a free trial of StreamVibe.
              </p>
            </div>
          </div>
          <div className="trial__wrapper_button">
            <ButtonAccent text={"Start a Free Trail"} />
          </div>
          <img
            src={bgTrial}
            alt="bgTrial"
            className="trial__wrapper_background"
          ></img>
          <img
            src={bgFadeTrial}
            alt="bgFadeTrial"
            className="trial__wrapper_fade"
          />
        </div>
      </div>
    </section>
  );
};

export default Trial;

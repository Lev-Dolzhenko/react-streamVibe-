import React from "react";

//images
import logotype from "../images/logotype.png";
import searchIcon from "../images/searchIcon.svg";
import notificationIcon from "../images/notificationIcon.svg";
import bgHome from "../images/bgHome.png";
import fadeTop from "../images/bgFadeTop.png";
import fadeBottom from "../images/bgFadeBottom.png";
import logotypeBig from "../images/logotypeBig.png";
import playIcon from "../images/playIcon.svg";
import burgerIcon from "../images/iconBurger.svg";

//components
import HeaderNav from "../components/HeaderNav";
import ButtonAccent from "../components/ButtonAccent";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <a href="#!" className="header__logotype">
            <img src={logotype} alt="StreamVibe" />
          </a>
          <HeaderNav />
          <div className="header__icons">
            <button>
              <img src={searchIcon} alt="search icon" />
            </button>
            <button>
              <img src={notificationIcon} alt="notification icon" />
            </button>
          </div>
          <button className="header__button_burger">
            <img src={burgerIcon} alt="burgerIcon" />
          </button>
        </div>
        <div className="header__hero">
          <div className="header__hero_img">
            <img src={logotypeBig} alt="logotypeBig" />
          </div>
          <div className="header__hero_title">
            <h1 className="title1">The Best Streaming Experience</h1>
          </div>
          <div className="header__hero_subtitle">
            <p className="subtitle">
              StreamVibe is the best streaming experience for watching your
              favorite movies and shows on demand, anytime, anywhere. With
              StreamVibe, you can enjoy a wide variety of content, including the
              latest blockbusters, classic movies, popular TV shows, and more.
              You can also create your own watchlists, so you can easily find
              the content you want to watch.
            </p>
          </div>
          <div className="header__hero_subtitle header__hero_subtitle-short">
            <p className="subtitle">
              StreamVibe is the best streaming experience for watching your
              favorite movies and shows on demand, anytime, anywhere.
            </p>
          </div>
          <div className="header__hero_button">
            <ButtonAccent icon={playIcon} text={"Start Watching Now"} />
          </div>
        </div>
      </div>
      <img className="header__background" src={bgHome} alt="bgHome" />
      <img className="header__fade_top" src={fadeTop} alt="fadeTop" />
      <img className="header__fade_bottom" src={fadeBottom} alt="fadeBottom" />
    </header>
  );
};

export default Header;

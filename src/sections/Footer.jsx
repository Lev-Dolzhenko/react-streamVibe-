import React from "react";

//images
import facebookIcon from "../images/facebookIcon.svg";
import twitterIcon from "../images/twitterIcon.svg";
import inIcon from "../images/inIcon.svg";

//components
import FooterColumn from "../components/FooterColumn";
import FooterColumnIcons from "../components/FooterColumnIcons";

const Footer = () => {
  let date = new Date();
  let currDateYear = date.getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__row">
          <FooterColumn
            listLinks={["Home", "Categories", "Devices", "Pricing", "FAQ"]}
          />
          <FooterColumn
            listLinks={[
              "Movies",
              "Gernes",
              "Trending",
              "New Release",
              "Popular",
            ]}
          />
          <FooterColumn
            listLinks={[
              "Shows",
              "Gernes",
              "Trending",
              "New Release",
              "Popular",
            ]}
          />
          <FooterColumn listLinks={["Support", "Contact Us"]} />
          <FooterColumn listLinks={["Subscription", "Plans", "Features"]} />
          <FooterColumnIcons
            listIcons={[facebookIcon, twitterIcon, inIcon]}
            title={"Connect With Us"}
          />
        </div>
        <div className="footer__wrapper">
          <span className="footer__wrapper_copyright">
            @<span className="foooter_wrapper_year">{currDateYear}</span>{" "}
            streamvib, All Rights Reserved
          </span>
          <ul className="footer__wrapper_info">
            <li className="footer__wrapper_item">
              <a href="#!" className="footer__wrapper_link">
                Terms of Use
              </a>
            </li>
            <li className="footer__wrapper_item">
              <a href="#!" className="footer__wrapper_link">
                Privacy Policy
              </a>
            </li>
            <li className="footer__wrapper_item">
              <a href="#!" className="footer__wrapper_link">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

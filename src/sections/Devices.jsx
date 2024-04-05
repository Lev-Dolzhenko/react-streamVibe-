import React from "react";

//components
import DevicesItem from "../components/DevicesItem";

//images
import phoneIcon from "../images/phoneIcon.svg";
import tabletIcon from "../images/tabletIcon.svg";
import tvIcon from "../images/tvIcon.svg";
import laptopIcon from "../images/laptopIcon.svg";
import vrIcon from "../images/vrIcon.svg";
import gameIcon from "../images/gameIcon.svg";

const Devices = () => {
  return (
    <section className="devices">
      <div className="container">
        <div className="devices__text">
          <div className="devices__title">
            <h3 className="title3">
              We Provide you streaming experience across various devices.
            </h3>
          </div>
          <div className="devices__subtitle">
            <p className="subtitle">
              With StreamVibe, you can enjoy your favorite movies and TV shows
              anytime, anywhere. Our platform is designed to be compatible with
              a wide range of devices, ensuring that you never miss a moment of
              entertainment.
            </p>
          </div>
        </div>
        <div className="devices__grid">
          <DevicesItem
            icon={phoneIcon}
            title={"Smartphones"}
            subtitle={
              "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
            }
          />
          <DevicesItem
            icon={tabletIcon}
            title={"Tablet"}
            subtitle={
              "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
            }
          />
          <DevicesItem
            icon={tvIcon}
            title={"Smart TV"}
            subtitle={
              "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
            }
          />
          <DevicesItem
            icon={laptopIcon}
            title={"Laptops"}
            subtitle={
              "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
            }
          />
          <DevicesItem
            icon={gameIcon}
            title={"Gaming Consoles"}
            subtitle={
              "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
            }
          />
          <DevicesItem
            icon={vrIcon}
            title={"VR Headsets"}
            subtitle={
              "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Devices;

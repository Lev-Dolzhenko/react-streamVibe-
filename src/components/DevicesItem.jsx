import React from "react";

const DevicesItem = ({ icon, title, subtitle }) => {
  return (
    <div className="devices__item">
      <div className="devices__item_top">
        <img src={icon} alt={icon} />
        <h4 className="title4">{title}</h4>
      </div>
      <div className="devices__item_bottom">
        <p className="subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default DevicesItem;

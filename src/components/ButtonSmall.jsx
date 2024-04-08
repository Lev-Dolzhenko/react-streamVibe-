import React from "react";

const ButtonSmall = ({ icon }) => {
  return (
    <button className="button button_small">
      <img src={icon} alt={icon} />
    </button>
  );
};

export default ButtonSmall;

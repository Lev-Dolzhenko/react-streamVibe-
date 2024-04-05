import React from "react";

const ButtonAccent = ({ icon, text }) => {
  return (
    <button className="button button_accent">
      {icon && <img src={icon} alt="icon"></img>}
      {text}
    </button>
  );
};

export default ButtonAccent;

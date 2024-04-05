import React from "react";

const ButtonMuted = ({ icon, text }) => {
  return (
    <button className="button button_muted">
      {icon && <img src={icon} alt="icon"></img>}
      {text}
    </button>
  );
};

export default ButtonMuted;

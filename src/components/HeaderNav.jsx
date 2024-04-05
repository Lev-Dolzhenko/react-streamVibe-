import React from "react";

const HeaderNav = () => {
  const nameButtons = ["Home", "Movies & Shows", "Support", "Subscriptions"];
  return (
    <nav className="header__nav">
      <ul className="header__list">
        {nameButtons.map((nameButton) => (
          <li key={nameButton} className="header__elem">
            <button className="header__button" href="#!">
              {nameButton}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;

import React from "react";

//react rounter dom
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

const HeaderNav = () => {
  const nameLinks = [
    "/",
    "/MoviesShowsPage",
    "/SupportPage",
    "/SubscriptionsPage",
  ];
  const nameButtons = ["Home", "Movies & Shows", "Support", "Subscriptions"];
  return (
    <nav className="header__nav">
      <ul className="header__list">
        {nameButtons.map((nameButton, index) => (
          <Link key={nameButton} to={nameLinks[index]}>
            <li className="header__elem">
              <button className="header__button" href="#!">
                {nameButton}
              </button>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;

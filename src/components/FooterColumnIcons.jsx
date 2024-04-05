import React from "react";

const FooterColumnIcons = ({ listIcons, title }) => {
  return (
    <ul className="footer__list">
      {title && <li>{title}</li>}
      <ul className="footer__list_icons">
        {listIcons.map((listIcon) => (
          <li key={listIcon} className="footer__list_icon">
            <a href="#!">
              <img src={listIcon} alt={listIcon} />
            </a>
          </li>
        ))}
      </ul>
    </ul>
  );
};

export default FooterColumnIcons;

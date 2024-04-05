import React from "react";

const FooterColumn = ({ listLinks }) => {
  return (
    <ul className="footer__list">
      {listLinks.map((listLink) => (
        <li key={listLink} className="footer__item">
          <a href="#!" className="footer__link">
            {listLink}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterColumn;

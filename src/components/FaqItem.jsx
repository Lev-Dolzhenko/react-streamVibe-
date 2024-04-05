import React, { useState } from "react";

//images
import openIcon from "../images/iconOpenQuestion.svg";
import closeIcon from "../images/iconCloseQuestion.svg";
import vector from "../images/lineQuestion.png";

const FaqItem = ({ question, answer, number }) => {
  const [isShowen, setIsShowen] = useState(true);

  return (
    <div className="faq__list_item">
      <div className="faq__item_top">
        <div className="faq__item_number">
          <span>{number}</span>
        </div>
        <div className="faq__item_question">
          <span>{question}</span>
        </div>
        {isShowen ? (
          <button
            onClick={() => setIsShowen(false)}
            className="faq__item_button"
          >
            <img className="faq__item_icon" src={openIcon}></img>
          </button>
        ) : (
          <button
            onClick={() => setIsShowen(true)}
            className="faq__item_button"
          >
            <img className="faq__item_icon" src={closeIcon}></img>
          </button>
        )}
      </div>
      {isShowen ? (
        <></>
      ) : (
        <div className="faq__item_bottom">
          <p className="subtitle">{answer}</p>
        </div>
      )}

      <img className="faq__vector" src={vector} alt="vector" />
    </div>
  );
};

export default FaqItem;

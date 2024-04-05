import React from "react";
import ButtonMuted from "./ButtonMuted";
import ButtonAccent from "./ButtonAccent";

const PlanItem = ({ title, subtitle, price, period }) => {
  return (
    <div className="plan__item">
      <div className="plan__item_title">
        <h4 className="title4 title4_plan">{title}</h4>
      </div>
      <div className="plan__item_subtitle">
        <p className="subtitle">{subtitle}</p>
      </div>
      <div className="plan__item_price">
        <span>
          {price}
          <span className="plan__item_period">/{period}</span>
        </span>
      </div>
      <div className="plan__item_buttons">
        <ButtonMuted text={"Start Free Trial"} />
        <ButtonAccent text={"Choose Plan"} />
      </div>
    </div>
  );
};

export default PlanItem;

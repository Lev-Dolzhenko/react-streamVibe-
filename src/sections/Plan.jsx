import React, { useState } from "react";
import PlanItem from "../components/PlanItem";

const Plan = () => {
  const [isShowSecondPlan, setIsShowSecondPlan] = useState(false);

  const indentifyPlan = (nameButton) => {
    if (nameButton === "Yearly") {
      setIsShowSecondPlan(true);
    } else {
      setIsShowSecondPlan(false);
    }
  };

  return (
    <section className="plan">
      <div className="container">
        <div className="plan__text">
          <div className="plan__text_top">
            <div className="plan__text_title3">
              <h3 className="title3">Choose the plan that's right for you</h3>
            </div>
          </div>
          <div className="plan__text_bottom">
            <div className="plan__text_subtitle">
              <p className="subtitle">
                Join StreamVibe and select from our flexible subscription
                options tailored to suit your viewing preferences. Get ready for
                non-stop entertainment!
              </p>
            </div>
            <div className="plan__text_toggler">
              <button
                onClick={() => indentifyPlan("Monthly")}
                className={`plan__text_toggle-button ${
                  isShowSecondPlan ? "" : "plan__text_toggle-button-active"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => indentifyPlan("Yearly")}
                className={`plan__text_toggle-button ${
                  isShowSecondPlan ? "plan__text_toggle-button-active" : ""
                }`}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>
        <div className="plan__wrapper">
          <div className="plan__grid plan__grid_month">
            <PlanItem
              title={"Basic Plan"}
              subtitle={
                "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles."
              }
              price={"$9.99"}
              period={"month"}
            />
            <PlanItem
              title={"Standard Plan"}
              subtitle={
                "Access to a wider selection of movies and shows, including most new releases and exclusive content.    "
              }
              price={"$12.99"}
              period={"month"}
            />
            <PlanItem
              title={"Premium Plan"}
              subtitle={
                "Access to a widest selection of movies and shows, including all new releases and Offline Viewing."
              }
              price={"$14.99"}
              period={"month"}
            />
          </div>
          <div
            className={`plan__grid plan__grid_year ${
              isShowSecondPlan ? "showSecondPlan" : "hideSecondPlan"
            }`}
          >
            <PlanItem
              title={"Basic Plan"}
              subtitle={
                "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles."
              }
              price={"$29.99"}
              period={"year"}
            />
            <PlanItem
              title={"Standard Plan"}
              subtitle={
                "Access to a wider selection of movies and shows, including most new releases and exclusive content.    "
              }
              price={"$59.99"}
              period={"year"}
            />
            <PlanItem
              title={"Premium Plan"}
              subtitle={
                "Access to a widest selection of movies and shows, including all new releases and Offline Viewing."
              }
              price={"$69.99"}
              period={"year"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;

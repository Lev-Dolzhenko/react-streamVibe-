import React from "react";
import ButtonAccent from "../components/ButtonAccent";
import FaqItem from "../components/FaqItem";

const Faq = () => {
  return (
    <section className="faq">
      <div className="container">
        <div className="faq__wrapper">
          <div className="faq__wrapper_text">
            <div className="faq__text_title">
              <h3 className="title3">Frequently Asked Questions</h3>
            </div>
            <div className="faq__text_subtitle">
              <p className="subtitle">
                Got questions? We've got answers! Check out our FAQ section to
                find answers to the most common questions about StreamVibe.
              </p>
            </div>
          </div>
          <ButtonAccent text={"Ask a Question"} />
        </div>
        <div className="faq_list">
          <div className="faq__list_left">
            <FaqItem
              question={"What is StreamVibe?"}
              answer={
                "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
              }
              number={"01"}
            />
            <FaqItem
              question={"How much does StreamVibe cost?"}
              answer={
                "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
              }
              number={"02"}
            />
            <FaqItem
              question={"What content is available on StreamVibe?"}
              answer={
                "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
              }
              number={"03"}
            />
            <FaqItem
              question={"How can I watch StreamVibe?"}
              answer={
                "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
              }
              number={"04"}
            />
          </div>
          <div className="faq__list_right">
            <FaqItem
              question={"How do I sign up for StreamVibe?"}
              answer={
                "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
              }
              number={"05"}
            />
            <FaqItem
              question={"What is the StreamVibe free trial?"}
              answer={
                "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
              }
              number={"06"}
            />
            <FaqItem
              question={"How do I contact StreamVibe customer support?"}
              answer={
                "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
              }
              number={"07"}
            />
            <FaqItem
              question={"What are the StreamVibe payment methods?"}
              answer={
                "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
              }
              number={"08"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;

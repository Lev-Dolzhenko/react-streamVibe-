import React from "react";

//images
import supportBg from "../images/supportBg.jpeg";
import ButtonAccent from "../components/ButtonAccent";

const Support = () => {
  return (
    <section className="support">
      <div className="container">
        <div className="support__row">
          <div className="support__text">
            <div className="support__text_title">
              <h2 className="title2">Welcome to our support page!</h2>
            </div>
            <div className="support__text_subtitle">
              <p className="subtitle">
                We're here to help you with any problems you may be having with
                our product.
              </p>
            </div>
            <div className="support__text_image">
              <img src={supportBg} alt="supportBg" />
            </div>
          </div>
          <form className="support__form">
            <div className="support__form_person">
              <div className="support__form_wrapper support__form_person-name">
                <label htmlFor="name">First Name</label>
                <input id="name" placeholder="Enter First Name" type="text" />
              </div>
              <div className="support__form_wrapper support__form_person-secondname">
                <label htmlFor="secondname">Last Name</label>
                <input
                  id="secondname"
                  placeholder="Enter Last Name"
                  type="text"
                />
              </div>
            </div>
            <div className="support__form_contacts">
              <div className="support__form_wrapper support__form_contacts-email">
                <label htmlFor="email">Email</label>
                <input id="email" placeholder="Enter your Email" type="email" />
              </div>
              <div className="support__form_wrapper support__form_contacts-phone">
                <label htmlFor="tel">Phone Number</label>
                <input id="tel" placeholder="Enter Phone Number" type="tel" />
              </div>
            </div>
            <div className="support__form_wrapper support__form_message">
              <label htmlFor="message">Message</label>
              <textarea
                placeholder="Enter your Message"
                id="message"
                rows="4"
              ></textarea>
            </div>
            <div className="support__form_success">
              <input type="checkbox" name="" id="privacyPolicy" />
              <label htmlFor="privacyPolicy">
                I agree with Terms of Use and Privacy Policy
              </label>
              <ButtonAccent text={"Send Message"} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Support;

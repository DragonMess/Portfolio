import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="mainArticle">
      <h1 className="title">CONTACT</h1>
      <article className="contactCard">
        <header className="contactCardHeader">
          <h3 className="titleHeader">Camilo Pineda</h3>
          <h5 className="secondaryTitleHeader">Full-Stack Web Developer</h5>
          <hr className="hrContact"></hr>
          <div className="contactCardBody">
            <div className="contactWay">
              <div className="iconContact">
                <img
                  className="iconContact"
                  src="./images/contact/mobile-alt-solid.svg"
                  alt="contactImg"
                />
              </div>
              <div className="contactTxt">438-630-1247</div>
            </div>
            <div className="contactWay">
              <div className="iconContact">
                <img
                  className="iconContact"
                  src="./images/contact/envelope-solid.svg"
                  alt="contactImg"
                />
              </div>
              <div className="contactTxt">camilopinedadev@gmail.com</div>
            </div>
            <div className="contactWay">
              <div className="iconContact">
                <img
                  className="iconContact"
                  src="./images/contact/globe-americas-solid.svg"
                  alt="contactImg"
                />
              </div>
              <div className="contactTxt">www.camilopinedadev.com</div>
            </div>
          </div>
        </header>
      </article>
    </div>
  );
}

export default Contact;

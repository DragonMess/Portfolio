import React from "react";
import "./Contact.css"

function Contact() {
  return (
    <>
      <h1 className="title">CONTACT</h1>
      <article className="contactCard">
        <header className="contactCardHeader">
          <h3 className="titleHeader">Camilo Pineda</h3>
          <h5 className="secondaryTitleHeader">Full-Stack Web Developer</h5>
          <hr className="hrContact"></hr>
          <div className="contactCardBody">
            <div className="contactWay">
              <img
                className="iconContact"
                src="./images/contact/envelope-solid.svg"
              />
              <div className="contactTxt">camilopinedadev@gmail.com</div>
            </div>
            <div className="contactWay">
              <img
                className="iconContact"
                src="./images/contact/envelope-solid.svg"
              />
              <div className="contactTxt">camilopinedadev@gmail.com</div>
            </div>
          </div>
        </header>
      </article>
    </>
  );
}

export default Contact;

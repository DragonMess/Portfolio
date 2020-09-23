import React, { useState } from "react";
import { Col, ProgressBar, Row } from "react-bootstrap";
import "./Home.css";
const srcImage = "./images/PhotoCamilo.jpg";
const srcImage2 = "./images/CamiloSmile.jpg";

function Home() {
  const [changeImage, setchangeImage] = useState(false);
  const handleImage = (e) => {
    setchangeImage(!changeImage);
  };
  return (
    <>
      <article className="mainArticle">
        <header>
          <Row>
            <Col xs={12} md={4}>
              <div className="myPhoto" onMouseOver={handleImage}>
                {!changeImage ? (
                  <img
                    src={srcImage}
                    className="img-circle"
                    alt="Cinque Terre"
                    width="304"
                    height="236"
                  />
                ) : (
                  <img
                    src={srcImage2}
                    className="img-circle"
                    alt="Cinque Terre"
                    width="304"
                    height="236"
                  />
                )}
              </div>
            </Col>

            <Col xs={12} md={8}>
              <div className="myDescription">
                <h1 className="myName">Camilo Pineda</h1>
                <h3 className="myTitre">Full-Stack Web Developer</h3>
                <button className="hireMe-btn">Hire Me !</button>
              </div>
            </Col>
          </Row>
        </header>
        <div className="aboutContainer">
          <div className="rect-back">
            <h2>About Me</h2>
            <div className="rect-front">
              <p>
                I am a full-stack web developer from Montreal. I enjoy planning
                and building web applications and websites.
              </p>
              <h5>passionate_about = [ coding, learning , coffee ];</h5>
            </div>
          </div>
        </div>
      </article>
      <article className="botton-article">
        <h2 className="titreCategories">Skills</h2>
        <div className="allCategories">
          <Row>
            <Col xs={12} md={4}>
              <div className="categories">
                <h2>Frontend</h2>
                <h4>React</h4>
                <ProgressBar animated now={70} className="myProgressBar" />
                <hr />
                <h4>javaScript</h4>
                <ProgressBar animated now={90} className="myProgressBar" />
                <hr />
                <h4>HTML</h4>
                <ProgressBar animated now={90} className="myProgressBar" />
                <hr />
                <h4>CSS</h4>
                <ProgressBar animated now={80} className="myProgressBar" />
                <hr />
                <h4>Saas</h4>
                <ProgressBar animated now={50} className="myProgressBar" />
                <hr />
                <h4>Bootstrap</h4>
                <ProgressBar animated now={70} className="myProgressBar" />
                <hr />
                <h4>jQuery</h4>
                <ProgressBar animated now={70} className="myProgressBar" />
                <hr />
                <h4>Angular</h4>
                <ProgressBar animated now={40} className="myProgressBar" />
                <hr />
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="categories">
                <h2>Backend</h2>
                <h4>Node.js</h4>
                <ProgressBar animated now={80} className="myProgressBar" />
                <hr />
                <h4>Express.js</h4>
                <ProgressBar animated now={80} className="myProgressBar" />
                <hr />
                <h4>Postgresql</h4>
                <ProgressBar animated now={80} className="myProgressBar" />
                <hr />
                <h4>MySql</h4>
                <ProgressBar animated now={70} className="myProgressBar" />
                <hr />
                <h4>Oracle</h4>
                <ProgressBar animated now={70} className="myProgressBar" />
                <hr />
                <h4>Ruby/Rails</h4>
                <ProgressBar animated now={60} className="myProgressBar" />
                <hr />
                <h4>JWT</h4>
                <ProgressBar animated now={90} className="myProgressBar" />
                <hr />
                <h4>Bcrypt</h4>
                <ProgressBar animated now={90} className="myProgressBar" />
                <hr />
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="categories">
                <h2>Others</h2>
                <h4>UX/UI</h4>
                <ProgressBar animated now={70} className="myProgressBar" />
                <hr />
                <h4>Figma</h4>
                <ProgressBar animated now={80} className="myProgressBar" />
                <hr />
                <h4>Linux</h4>
                <ProgressBar animated now={80} className="myProgressBar" />
                <hr />
                <h4>Unit Testing</h4>
                <ProgressBar animated now={70} className="myProgressBar" />
                <hr />
                <h4>Microsoft Office</h4>
                <ProgressBar animated now={90} className="myProgressBar" />
                <hr />
                <h4>AutoCad</h4>
                <ProgressBar animated now={90} className="myProgressBar" />
                <hr />
                <h4>Storybook</h4>
                <ProgressBar animated now={80} className="myProgressBar" />
                <hr />
                <h4>GitHub</h4>
                <ProgressBar animated now={90} className="myProgressBar" />
                <hr />
              </div>
            </Col>
          </Row>
        </div>
      </article>
      <footer>
        <h2>Interested in hiring me?</h2>
        <p>
          Send me an email at:
          <b>
            <a href="mailto:camilopinedadev@gmail.com">
              {" "}
              camilopinedadev@gmail.com{" "}
            </a>
          </b>
          or use the form on the page contact
        </p>
      </footer>
    </>
  );
}

export default Home;

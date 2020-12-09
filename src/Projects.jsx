import React from "react";
import { CardDeck } from "react-bootstrap";
import Footer from "./components/Footer";
import MyCard from "./components/MyCard";
import "./Projects.css"
const dataProjects = {
  projects: [
        {
      srcImgProject: "./images/Projects/RedEntretien.png",
      title: "WebPage: RedEntretien",
      projectStack:
        "React, Node.js, React-Routes, Styled Components, react Scroll",
      projectDescription:
        "Thisis a web page builded in React for a client in cleaning services.  This application has some simulated  routes the scroll section and  have the possibility to send email with EmailJs",
        gitHubLink: "https://github.com/DragonMess/webSiteReact",
      projectLink: "https://redentretienweb.herokuapp.com/",
    },
    {
      srcImgProject: "./images/Projects/BeerLovers.png",
      title: "BeerLovers",
      projectStack:
        "React, Node.js, Postgresql, React-Routes, JWT, Styled Components",
      projectDescription:
        "Beerlovers is a single-page aplication builded in React with some routes simulated.This application is builded to be used in mobile devices",
        gitHubLink:"https://github.com/DragonMess/BeerLovers",
      projectLink: "coming soon",
    },
    {
      srcImgProject: "./images/Projects/Scheduler.png",
      title: "Scheduler",
      projectStack: "React, Node.js, Postgresql, WebSocket, Jess, Storybook",
      projectDescription:
        "Interview Scheduler is a single-page aplication builded in React, this application allows users to book and cancel interviews with a WebSocket server",
         gitHubLink:"https://github.com/DragonMess/scheduler",
      projectLink: "coming soon",
    },
    {
      srcImgProject: "./images/Projects/Jungle.png",
      title: "Jungle",
      projectStack:
        "Ruby, Rails, Postgresql, Stripe, bycrypt 3.17, capybara, poltergeist",
      projectDescription:
        "A e-commerce application built with Rails 4.2 with a secured administration dashboard",
        gitHubLink:"https://github.com/DragonMess/jungle-rails",
      projectLink: "coming soon",
    },
    {
      srcImgProject: "./images/Projects/Tweeter.png",
      title: "Tweeter",
      projectStack: "HTML, CSS, JS, jQuery, AJAX, Node.js, Express",
      projectDescription:
        "Tweeter is a single-page aplication builded with a jQuery and AJAX.This is a Twitter clone application",
        gitHubLink:"https://github.com/DragonMess/tweeter",
      projectLink: "coming soon",
    },
    {
      srcImgProject: "./images/Projects/WikiMaps.png",
      title: "Wiki Maps",
      projectStack: "Postgresql, jQuery, Express.js, Node.js, Sass",
      projectDescription:
        "Wiki Maps is a web app using Leaflet which allows users to collaboratively create and edit maps. This is a group project in Lighthouse",
        gitHubLink:"https://github.com/FelixPriori/wiki-maps",
      projectLink: "coming soon",
    },
    {
      srcImgProject: "./images/Projects/Tinyapp.png",
      title: "Tinyapp",
      projectStack: "EJS, Node.js, Express.js, cookie-session, bycript",
      projectDescription:
        "TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs (à la bit.ly).",
        gitHubLink:"https://github.com/DragonMess/tinyapp",
      projectLink: "coming soon",
    },
  ],
};
function Projects() {
  
  const cards = 
  
  dataProjects.projects? dataProjects.projects.map((item) => {
    console.log(item);
    return (
      <MyCard
        srcImgProject={item.srcImgProject}
        projectStack={item.projectStack}
        projectDescription={item.projectDescription}
        title={item.title}
        projectLink={item.projectLink}
         gitHubLink={item.gitHubLink}
      />
    );
  }) : undefined;
  return (
    <>
      <article className="mainArticle">
        <div className="cardsContainer">{cards}</div>
      </article>
      <Footer></Footer>
    </>
  );
}

export default Projects;

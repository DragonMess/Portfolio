import React from "react";
import { CardDeck } from "react-bootstrap";
import MyCard from "./components/MyCard";
import "./Projects.css"
const dataProjects = {
  projects: [
    {
      srcImgProject: "./images/Projects/BeerLovers.png",
      title: "BeerLovers",
      projectDescription: "React,Node.js,Postgresql",
    },
    {
      srcImgProject: "./images/Projects/Scheduler.png",
      title: "Scheduler",
      projectDescription: "React,Node.js,Postgresql",
    },
    {
      srcImgProject: "./images/Projects/Jungle.png",
      title: "Jungle",
      projectDescription: "React,Node.js,Postgresql",
    },
    {
      srcImgProject: "./images/Projects/BeerLovers.png",
      title: "BeerLovers",
      projectDescription: "React,Node.js,Postgresql",
    },
    {
      srcImgProject: "./images/Projects/Scheduler.png",
      title: "Scheduler",
      projectDescription: "React,Node.js,Postgresql",
    },
    {
      srcImgProject: "./images/Projects/Jungle.png",
      title: "Jungle",
      projectDescription: "React,Node.js,Postgresql",
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
        projectDescription={item.projectDescription}
        title={item.title}
      />
    );
  }) : undefined;
  return (
    <article className="mainArticle">
      <div className="cardsContainer"
        // style={{ marginLeft: "auto", marginRight: "auto", marginTop: "3vh",width: "80%" }}
      >
        {cards}
      </div>
    </article>
  );
}

export default Projects;

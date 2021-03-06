import React from "react";
import { Button, Card } from "react-bootstrap";
import "./MyCard.css";

function MyCard(props) {
  const {
    srcImgProject,
    title,
    projectDescription,
    projectStack,
    projectLink,
    gitHubLink
  } = props;
  return (
    <>
      <Card
        style={{ width: "45vh", marginBottom: "3vh", fontFamily: "Montserrat" }}
      >
        <Card.Header
          style={{
            backgroundColor: "#011F4B",
            fontFamily: "Montserrat",
            color: "white",
            fontWeight: "bold",
          }}
        >
          {title}
        </Card.Header>
        <Card.Img
          variant="top"
          src={srcImgProject}
          className="cardImage"
          // style={{ height: "18rem" }}
        />
        <Card.Body
          style={{
            color: "white",
            backgroundColor: "#03396c",
            fontFamily: "Montserrat",
          }}
        >
          <Card.Text>{projectStack}</Card.Text>
          <hr style={{ borderColor: "white" }} />
          <Card.Text>
            <p>{projectDescription}</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer
          style={{
            color: "white",
            backgroundColor: "#011F4B",
            fontFamily: "Montserrat",
            color:"#ffff "
          }}
        >
          <div><img src="/images/GitHub.svg" className="iconSocial" /></div>
          <a href={ gitHubLink}
            style={{
              display:"block",
              // textDecoration:"none",
              fontSize:"1.5vh",
            color:"#ffff "
          }}
          >{gitHubLink}</a>
          <hr style={{ borderColor: "white" }} />
          <div><img  src="./images/contact/globe-americas-solid.svg"className="iconSocial" /></div>
         <a href={projectLink}
            style={{
              // textDecoration:"none",
              fontSize:"1.5vh",
            color:"#ffff "
          }}
          >{projectLink}</a>
        </Card.Footer>
      </Card>
    </>
  );
}

export default MyCard;

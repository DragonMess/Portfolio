import React from 'react'
import { Button, Card } from 'react-bootstrap';
import "./MyCard.css"

function MyCard(props) {
  const { srcImgProject, title, projectDescription} = props;
  return (
    <>
      <Card style={{ width: "40vh", marginLeft:"8vh",marginBottom:"3vh"}}>
        <Card.Img
          variant="top"
          src={srcImgProject}
          className="cardImage"
          // style={{ height: "18rem" }}
        />
        <Card.Body style={{ color: "black", backgroundColor: "blue" }}>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{projectDescription}</Card.Text>
          <Button variant="primary">Go {title}</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default MyCard

import React from 'react'
import { Button, Card } from 'react-bootstrap';

function MyCard(props) {
  const { srcImgProject, title, projectDescription} = props;
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={srcImgProject}
          style={{ height: "18rem" }}
        />
        <Card.Body style={{ color: "black", backgroundColor:"blue" }}>
          <Card.Title>{title}</Card.Title>
          <Card.Text >
            {projectDescription}
          </Card.Text>
          <Button variant="primary">Go {title}</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default MyCard

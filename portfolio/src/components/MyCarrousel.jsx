import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./MyCarrousel.css";
import MyCarrouselItem from "./MyCarrouselItem";
function MyCarrousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const data = [
    { nameProject: "BeerLovers", srcImage: [] },
    {
      nameProject: "Scheduler",
      srcImage: [
        "./images/Scheduler/AddNew-Appointment.png",
        "./images/Scheduler/ConfirmDeleteAppointment.png",
        "./images/Scheduler/DeleteStatusAppointment.png",
        "./images/Scheduler/Hover-Day.png",
        "./images/Scheduler/savingStatusAppointment.png",
      ],
    },
  ];

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="imageApp"
            // className="d-block w-100 "
            src="./images/BeerLovers/Login.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Login</h3>
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/BeerLovers/BeerDescription.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item> */}
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/BeerLovers/SelectedMapPoint.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </>
  );
}

export default MyCarrousel;

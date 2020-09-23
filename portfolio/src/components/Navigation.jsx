import React from "react";
import "./Navigation.css";
import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="mainNav" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="https://github.com/DragonMess">
              <img src="/images/GitHub.svg" className="iconSocial" />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/camilo-pineda-17810533/">
              <img src="/images/linkedin.svg" className="iconSocial" />
            </Nav.Link>
            <Nav.Link href="/">My Portfolio</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/">About Me</Nav.Link>
            <Nav.Link href="/">Skills</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;

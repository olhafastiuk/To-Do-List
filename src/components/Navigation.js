import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export const NavBar = () => (
  <Navbar bg="none" expand="sm">
    <Container>
      <LinkContainer to="/">
        <Navbar.Brand>
          <h1>To Do List</h1>
        </Navbar.Brand>
      </LinkContainer>
      <Nav className="align-items-center justify-content-center">
        <Nav.Link>
          <h4>Hello, -name-!</h4>
        </Nav.Link>
        <LinkContainer to="/settings">
          <Nav.Link className="align-items-center justify-content-center">
            {" "}
            <img
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "100%",
              }}
              src="https://images.pexels.com/photos/6816257/pexels-photo-6816257.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt=""
            />
          </Nav.Link>
        </LinkContainer>
      </Nav>
    </Container>
  </Navbar>
);

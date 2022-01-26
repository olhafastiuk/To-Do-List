import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";

export function NavBar() {
  const name = useSelector((state) => state.name);

  return (
    <Navbar bg="none" expand="sm">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <h1>To Do List</h1>
          </Navbar.Brand>
        </LinkContainer>
        <Nav className="align-items-center justify-content-center">
          <LinkContainer to="/settings">
            <Nav.Link>
              <h4>Hello, {name}!</h4>
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
}

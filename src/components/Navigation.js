import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Flex } from "./CommonStyles";

export function NavBar() {
  const name = useSelector((state) => state.name);

  return (
    <Navbar bg="none" expand="sm">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <Flex justify="center" align="center">
              <svg
                style={{ marginRight: "10px" }}
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6 0C2.68629 0 0 2.68629 0 6V18C0 21.3137 2.68629 24 6 24H18C21.3137 24 24 21.3137 24 18V6C24 2.68629 21.3137 0 18 0H6ZM18.5607 9.06066C19.1464 8.47487 19.1464 7.52513 18.5607 6.93934C17.9749 6.35355 17.0251 6.35355 16.4393 6.93934L9.83333 13.5453L7.06066 10.7727C6.47487 10.1869 5.52513 10.1869 4.93934 10.7727C4.35355 11.3585 4.35355 12.3082 4.93934 12.894L8.77267 16.7273C9.35846 17.3131 10.3082 17.3131 10.894 16.7273L18.5607 9.06066Z"
                  fill="#FF5A60"
                />
              </svg>

              <h1 class="p-0 m-0 fw-bold">To Do List</h1>
            </Flex>
          </Navbar.Brand>
        </LinkContainer>
        <Nav>
          <LinkContainer to="/settings">
            <Nav.Link>
              <h4 className="p-0 m-0" style={{ color: "#FF5A60" }}>
                Hello, {name}!
              </h4>
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
}

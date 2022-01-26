import { render } from "@testing-library/react";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { changeName } from "../components/actions/changeName";
import { Flex } from "../components/CommonStyles";

export default function Settings() {
  let dispatch = useDispatch();
  const [name, setName] = useState("");
  const updateSettings = () => {
    dispatch(changeName(name));
  };

  return (
    <Flex direction="column" align="center" justify="center">
      <h2>Settings</h2>
      <Form style={{ width: "60vw" }} className="xs-12">
        <Form.Group>
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Link to="/" refresh="true">
          <Button variant="primary" type="submit" onClick={updateSettings}>
            Submit
          </Button>
        </Link>
      </Form>
    </Flex>
  );
}

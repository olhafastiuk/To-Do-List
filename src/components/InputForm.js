import React, { Fragment, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addDescription } from "./actions/addDescription";
import { addTitle } from "./actions/addTitle";
export default function InputForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  return (
    <Fragment>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="To do ..."
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              dispatch(addTitle(e.target.value));
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              dispatch(addDescription(e.target.value));
            }}
          />
        </Form.Group>
      </Form>
    </Fragment>
  );
}
export const newDetails = (title, description) => ({
  title: title,
  description: description,
});

import React, { Fragment, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addDescription } from "./actions/addDescription";
import { addTitle } from "./actions/addTitle";

export default function InputForm({ type, idTask }) {
  const publication = useSelector((state) => state.tasks);
  const editTask = publication.find((el) => el.id === idTask);

  const dispatch = useDispatch();

  return (
    <Fragment>
      {type === "create" ? (
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              className="shadow-none"
              type="text"
              placeholder="To do ..."
              onChange={(e) => {
                dispatch(addTitle(e.target.value));
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              className="shadow-none"
              type="text"
              placeholder="Description"
              onChange={(e) => {
                dispatch(addDescription(e.target.value));
              }}
            />
          </Form.Group>
        </Form>
      ) : (
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              className="shadow-none"
              type="text"
              placeholder="To do ..."
              defaultValue={editTask.title}
              onChange={(e) => dispatch(addTitle(e.target.value))}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              className="shadow-none"
              type="text"
              placeholder="Description"
              defaultValue={editTask.description}
              onChange={(e) => dispatch(addDescription(e.target.value))}
            />
          </Form.Group>
        </Form>
      )}
    </Fragment>
  );
}

import React, { useContext, useState } from "react";
import { Task } from "../components/Task";
import { Button, ListGroup, Modal } from "react-bootstrap";
import InputForm from "../components/InputForm";
import { Flex } from "../components/CommonStyles";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../components/actions/addTask";

function Home() {
  const publication = useSelector((state) => state);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [useForm, setUseForm] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addNewTask = () => {
    handleClose();
    dispatch(addTask(publication.length + 1));
  };

  return (
    <Flex justify="center" direction="column" align="center">
      {publication.length ? (
        <ListGroup
          style={{ display: "flex", flexDirection: "column-reverse" }}
          variant="flush"
          style={{ width: "60vw" }}
        >
          {publication.map((el, i) => (
            <Task task={el} key={i} />
          ))}
        </ListGroup>
      ) : (
        <p>You don`t have task</p>
      )}

      <Button
        style={{ marginTop: "50px" }}
        variant="primary"
        onClick={handleShow}
      >
        Add new
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputForm form={useForm} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={addNewTask}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Flex>
  );
}
export default Home;

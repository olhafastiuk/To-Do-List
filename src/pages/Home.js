import React, { useContext, useState } from "react";
import { Task } from "../components/Task";
import { Button, ListGroup, Modal } from "react-bootstrap";
import InputForm from "../components/InputForm";
import { Flex } from "../components/CommonStyles";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../components/actions/addTask";
import { editTask } from "../components/actions/editTask";

function Home() {
  const publication = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [formType, setFormType] = useState("");
  const [idTask, setIdTask] = useState();

  const handleClose = () => setShow(false);
  const handleShowCreate = () => {
    setFormType("create");
    setShow(true);
  };

  const addNewTask = () => {
    handleClose();
    formType === "create"
      ? dispatch(
          addTask(
            publication.length !== 0
              ? publication[publication.length - 1].id + 1
              : 1
          )
        )
      : dispatch(editTask(idTask));
  };

  const edit = (id) => {
    setIdTask(id);
    setFormType("edit");
    setShow(true);
  };

  return (
    <Flex margin="50px 0 0 0" direction="column" align="center">
      {publication.length ? (
        <Flex
          className="mobile-task"
          justify="center"
          direction="column"
          align="center"
        >
          <ListGroup
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column-reverse",
            }}
            variant="flush"
          >
            {publication.map((el, i) => (
              <Task task={el} edit={edit} key={i} />
            ))}
          </ListGroup>
        </Flex>
      ) : (
        <h2 style={{margin:"50px 0"}} className=" fst-italic fw-lighter">You don`t have any task!</h2>
      )}

      <Button
        style={{ marginTop: "50px" }}
        variant="danger"
        onClick={handleShowCreate}
      >
        Add new
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {formType === "create" ? `Create New Task` : `Edit You Task`}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputForm type={formType} idTask={idTask} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={addNewTask}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Flex>
  );
}
export default Home;

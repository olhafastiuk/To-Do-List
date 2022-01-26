import React, { Fragment } from "react";
import { Button, CloseButton, ListGroupItem } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTask } from "./actions/deleteTask";
import { doneTask } from "./actions/doneTask";
import { Flex } from "./CommonStyles";

export const Task = ({ task, edit }) => {
  const dispatch = useDispatch();

  const done = [];
  if (task.completed) {
    done.push("done");
    done.push("done-task");
    done.push("task-done");
  } else {
    done.push(null);
    done.push("not-done");
    done.push("task-not-done");
  }
  return (
    <Fragment>
      <ListGroupItem className={done[1]} action>
        <Flex align="center" justify="space-between">
          <Flex
            onClick={() => {
              task.completed = !task.completed;
              dispatch(doneTask());
            }}
            align="center"
            justify="space-between"
          >
            <Flex direction="column">
              <Flex>
                <p className={done[2]}></p>
                <p className={`m-0 fw-bolder ${done[0]}`}>{task.title}</p>
              </Flex>
              <span
                style={{ fontSize: "16px" }}
                className="fst-italic fw-lighter"
              >
                {task.time}
              </span>

              <span
                style={{ fontSize: "16px" }}
                className="fst-italic fw-light"
              >
                {task.date}
              </span>
            </Flex>
            <Flex>
              <p className={`fst-italic fw-light ${done[0]}`}>
                {task.description}
              </p>
            </Flex>
          </Flex>
          <Flex width="30%" align="center" justify="flex-end">
            <Button onClick={() => edit(task.id)} variant="none">
              🖊
            </Button>
            <CloseButton onClick={() => dispatch(deleteTask(task.id))} />
          </Flex>
        </Flex>
      </ListGroupItem>
    </Fragment>
  );
};

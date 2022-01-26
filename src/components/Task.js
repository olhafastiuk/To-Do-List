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
    done.push("done-span");
  }
  return (
    <Fragment>
      <ListGroupItem action variant="primary">
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
                <p className={`m-0 ${done[0]}`}>{task.title}</p>
                <span className={done[1]}></span>
              </Flex>
              <span>{task.time}</span>
            </Flex>
            <Flex>
              <p className={done[0]}>{task.description}</p>
            </Flex>
          </Flex>
          <Flex width="30%" align="center" justify="flex-end">
            <Button onClick={() => edit(task.id)} variant="light">
              ред.
            </Button>
            <CloseButton onClick={() => dispatch(deleteTask(task.id))} />
          </Flex>
        </Flex>
      </ListGroupItem>
    </Fragment>
  );
};

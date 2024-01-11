import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

const TodoListItem = ({ todo, ind, handleDelete, handleToggle }) => {
  return (
    <li className="list-group-item d-flex align-items-center justify-content-between">
      <p
        className={`${todo.done ? "m-0 todos complete" : "m-0 todos"}`}
        onClick={() => handleToggle(todo.id)}
      >
        {ind + 1} . {todo.desc}
      </p>
      <Button variant="danger" onClick={() => handleDelete(todo.id)}>
        Borrar
      </Button>
    </li>
  );
};

TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  ind: PropTypes.number.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default TodoListItem;

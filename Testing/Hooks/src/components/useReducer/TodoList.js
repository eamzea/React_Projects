import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";

const TodoList = ({ todos, handleToggle, handleDelete }) => {
  return (
    <ul className="list-group">
      {todos.map((todo, ind) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          ind={ind}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default TodoList;

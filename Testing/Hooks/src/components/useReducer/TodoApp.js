import React, { useReducer, useEffect } from "react";
import "./TodoApp.css";
import { todoReducer } from "./todoReducer";
import { Row, Col } from "react-bootstrap";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: "add",
      payload: newTodo,
    });
  };

  const handleDelete = (todoId) => {
    const action = {
      type: "delete",
      payload: todoId,
    };

    dispatch(action);
  };

  const handleToggle = (todoId) => {
    dispatch({
      type: "toggle",
      payload: todoId,
    });
  };

  return (
    <div>
      <p className="h1">To Do App ({todos.length})</p>
      <hr />

      <Row>
        <Col xs={7}>
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </Col>
        <Col xs={5}>
          <TodoAdd handleAddTodo={handleAddTodo} />
        </Col>
      </Row>
    </div>
  );
};

export default TodoApp;

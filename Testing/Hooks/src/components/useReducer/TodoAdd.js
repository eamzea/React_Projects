import React from "react";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { useForm } from "../../hooks/useForm";

const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleAddTodo(newTodo);
    reset();
  };

  return (
    <>
      <h4>Agregar To Do</h4>
      <hr />

      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-1">
          <FormControl
            type="text"
            name="description"
            placeholder="Aprender..."
            aria-label="description"
            aria-describedby="description"
            value={description}
            onChange={handleInputChange}
          />
        </InputGroup>
        <Button variant="outline-primary" block type="submit">
          Agregar
        </Button>
      </Form>
    </>
  );
};

export default TodoAdd;

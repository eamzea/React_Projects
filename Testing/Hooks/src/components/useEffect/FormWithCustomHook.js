import React, { useEffect } from "react";
import "./SimpleForm.css";
import { FormControl, InputGroup, Form, Button } from "react-bootstrap";
import { useForm } from "../../hooks/useForm";

const FormWithCustomHook = () => {
  const [formValues, handleInputchange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formValues;

  useEffect(() => {
    console.log("Email changed");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1>FormWithCustomHook</h1>
      <hr />

      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="name">Name</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          name="name"
          placeholder="Edgar"
          aria-label="Name"
          aria-describedby="name"
          onChange={handleInputchange}
          value={name}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="email">Email</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          name="email"
          placeholder="m.zea@live.com.mx"
          aria-label="Email"
          aria-describedby="email"
          onChange={handleInputchange}
          value={email}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="password">Password</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          type="password"
          name="password"
          placeholder="********"
          aria-label="Password"
          aria-describedby="password"
          onChange={handleInputchange}
          value={password}
        />
      </InputGroup>

      <Button type="submit" variant="primary">
        Guardar
      </Button>
    </Form>
  );
};

export default FormWithCustomHook;

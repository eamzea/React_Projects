import React, { useEffect, useState } from "react";
import "./SimpleForm.css";
import { FormControl, InputGroup } from "react-bootstrap";
import Message from "./Message";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {
    // console.log("hey");
  }, []);

  useEffect(() => {
    // console.log("FormState changed");
  }, [formState]);

  useEffect(() => {
    // console.log("Email changed");
  }, [email]);

  const handleInputchange = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value });
  };

  return (
    <>
      <h1>UseEffect</h1>
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

      {name === "123" && <Message />}
    </>
  );
};

export default SimpleForm;

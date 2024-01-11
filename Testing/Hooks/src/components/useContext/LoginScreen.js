import React, { useContext } from "react";
import UserContext from "./UserContext";
import { Button } from "react-bootstrap";

const LoginScreen = () => {
  const { setUser } = useContext(UserContext);

  return (
    <div>
      <h1>Login Screen</h1>
      <hr />
      <Button
        variant="primary"
        onClick={() => setUser({ id: 123, name: "Edgar" })}
      >
        Login
      </Button>
    </div>
  );
};

export default LoginScreen;

import React, { useContext } from "react";
import UserContext from "./UserContext";
import { Button } from "react-bootstrap";

const AboutScreen = () => {
  const { user, setUser } = useContext(UserContext);

  const handleClick = () => {
    setUser({});
  };

  return (
    <div>
      <h1>About Screen</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
      <Button variant="warning" onClick={handleClick}>
        Logout
      </Button>
    </div>
  );
};

export default AboutScreen;

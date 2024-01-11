import React, { useRef } from "react";
import { Button } from "react-bootstrap";

const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  };

  return (
    <div>
      <p className="h1">Focus Screen</p>
      <hr />

      <input className="form-control" placeholder="Edgar" ref={inputRef} />
      <Button variant="outline-primary" className="mt-5" onClick={handleClick}>
        Focus
      </Button>
    </div>
  );
};

export default FocusScreen;

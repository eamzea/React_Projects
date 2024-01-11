import React, { useState } from "react";
import MultipleCustomHooks from "../examples/MultipleCustomHooks";
import { Button } from "react-bootstrap";

const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div>
      <p className="h1">Real Example Ref</p>
      <hr />

      {show && <MultipleCustomHooks />}

      <Button variant="primary" className="mt-5" onClick={toggleShow}>
        Show/Hide
      </Button>
    </div>
  );
};

export default RealExampleRef;

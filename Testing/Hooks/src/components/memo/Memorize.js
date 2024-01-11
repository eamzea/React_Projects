import React, { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { Button } from "react-bootstrap";
import Small from "./Small";

const Memorize = () => {
  const { state, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  return (
    <div>
      <p className="h1">
        Memorize <Small value={state} />
      </p>
      <hr />

      <Button variant="primary" onClick={() => increment(1)}>
        + 1
      </Button>

      <Button
        variant="outline-primary"
        className="ml-5"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </Button>
    </div>
  );
};

export default Memorize;

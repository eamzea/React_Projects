import React, { useState, useMemo } from "react";
import { useCounter } from "../../hooks/useCounter";
import { Button } from "react-bootstrap";
import { heavyProcess } from "../helpers/heavyProcess";

const MemoHook = () => {
  const { state, increment } = useCounter(1000);
  const [show, setShow] = useState(true);

  const memoHeavyProcess = useMemo(() => heavyProcess(state), [state]);

  return (
    <div>
      <p className="h1">
        Memo Hook <small>{state}</small>
      </p>
      <hr />

      <p>{memoHeavyProcess}</p>

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

export default MemoHook;

import React from "react";
import { Button } from "react-bootstrap";
import "./CounterApp.css";
import { useCounter } from "../../hooks/useCounter";

const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>Counter with Hook: {state}</h1>
      <hr />

      <Button variant="danger" onClick={() => decrement(5)}>
        - 1
      </Button>
      <Button variant="warning" onClick={reset}>
        Reset
      </Button>
      <Button variant="primary" onClick={() => increment(10)}>
        + 1
      </Button>
    </>
  );
};

export default CounterWithCustomHook;

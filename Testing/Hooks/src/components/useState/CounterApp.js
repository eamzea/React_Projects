import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./CounterApp.css";

const CounterApp = () => {
  const [counters, setCounters] = useState({
    counter1: 10,
    counter2: 20,
  });

  const { counter1, counter2 } = counters;

  return (
    <>
      <h3>Counter1 {counter1}</h3>
      <h3>Counter2 {counter2}</h3>
      <hr />
      <Button
        variant="primary"
        onClick={() => setCounters({ ...counters, counter1: counter1 + 1 })}
      >
        + 1
      </Button>
    </>
  );
};

export default CounterApp;

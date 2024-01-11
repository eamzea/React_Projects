import React, { useState, useCallback } from "react";
import { ShowIncrement } from "./ShowIncrement";

const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  // const increment = () => setCounter(counter + 1);

  const increment = useCallback(
    (num) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );

  return (
    <div>
      <p className="h1">useCallback Hook : {counter}</p>
      <hr />

      <ShowIncrement increment={increment} />
    </div>
  );
};

export default CallbackHook;

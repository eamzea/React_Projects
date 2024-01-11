import { useState } from 'react';

const Counter = () => {
  const [counterState, setCounterState] = useState<number>(0);

  const accumulate = (num: number): void => {
    setCounterState(counterState + num);
  };

  return (
    <>
      <h3>
        Counter <small>{counterState}</small>
      </h3>
      <button className="btn btn-primary" onClick={() => accumulate(1)}>
        +1
      </button>
      &nbsp;
      <button className="btn btn-danger" onClick={() => accumulate(-1)}>
        -1
      </button>
    </>
  );
};

export default Counter;

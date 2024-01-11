import { useState } from 'react';

const useCounter = (init: number = 0) => {
  const [counterState, setCounterState] = useState<number>(init);

  const accumulate = (num: number): void => {
    setCounterState(counterState + num);
  };

  return {
    counterState,
    accumulate,
  };
};

export default useCounter;

import { useState } from "react";

export const useCounterQuote = (initialState) => {
  const [counter, setCounter] = useState(initialState);

  const increment = () => {
    setCounter(counter + 1);
  };

  return {
    counter,
    increment,
  };
};

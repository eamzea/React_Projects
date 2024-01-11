import React, { useState } from "react";
import PropTypes from "prop-types";
// rafcp PropTypes

const CounterApp = ({ value }) => {
  const [counterState, updateCounterState] = useState(value);

  const handleAdd = () => {
    updateCounterState(counterState + 1);
  };

  const handleSubs = () => {
    updateCounterState(counterState - 1);
  };

  const handleReset = () => {
    updateCounterState(value);
  };

  return (
    <div className="container">
      <h1>Counter App</h1>
      <h2>{counterState}</h2>
      <div className="buttonContainer">
        <button onClick={handleSubs}>- 1</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleAdd}>+ 1</button>
      </div>
    </div>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;

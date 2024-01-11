import useCounter from '../../hooks/useCounter';

const CounterWithHook = () => {
  const { counterState, accumulate } = useCounter(5);

  return (
    <>
      <h3>
        Counter with Hook <small>{counterState}</small>
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

export default CounterWithHook;

const Functions = () => {
  const add = (a: number, b: number): number => a + b;

  return (
    <div>
      <h3>Functions</h3>
      The result is {add(1, 2)}
    </div>
  );
};

export default Functions;

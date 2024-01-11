export const heavyProcess = (iterators) => {
  for (let i = 0; i < iterators; i++) {
    console.log("There we go...");
  }

  return `${iterators} iteraciones realizadas`;
};

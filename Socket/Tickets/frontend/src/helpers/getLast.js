const getLasts = async () => {
  const response = await fetch('http://localhost:4000/last-tickets');
  const data = await response.json();

  return data;
};

export default getLasts;

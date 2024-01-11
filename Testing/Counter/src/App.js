import React from "react";
import PropTypes from "prop-types";

const App = ({ saludo, subtitulo }) => {
  return (
    <div className="App">
      <h1>{saludo}</h1>
      <p>{subtitulo}</p>
    </div>
  );
};

App.propTypes = {
  saludo: PropTypes.string.isRequired,
};

App.defaultProps = {
  subtitulo: "Soy un subtítulo",
};

export default App;

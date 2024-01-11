import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CounterApp from "./CounterApp";

ReactDOM.render(
  <React.StrictMode>
    <CounterApp value={10} />
  </React.StrictMode>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

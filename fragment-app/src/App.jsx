import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Counter />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

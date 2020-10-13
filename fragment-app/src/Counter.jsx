import React from "react";
import "./App.css";

const containerStyle = {
  fullWidth: {
    height: "100%",
    width: "100%",
  },
  smallWidth: {
    height: "50%",
    width: "50%",
  },
};

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const [size, setSize] = React.useState("fullWidth");

  console.log("size: ", size);

  return (
    <div className="container" style={containerStyle[size]}>
      <div
        className="resizer"
        onClick={() =>
          setSize((prev) => {
            if (prev === "smallWidth") return "fullWidth";
            return "smallWidth";
          })
        }
      >
        &#10062;
      </div>
      <div className="count">{count}</div>
      <div className="btn-group">
        <button
          className="btn btn-blue"
          onClick={() => setCount((prev) => (prev += 1))}
        >
          Increment
        </button>
        <button
          className="btn btn-green"
          onClick={() => setCount((prev) => (prev -= 1))}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;

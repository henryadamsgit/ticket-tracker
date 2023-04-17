import React from "react";
import "./Counter.scss";

const Counter = () => {
  return (
    <div className="counter">
      <h3>Counter</h3>
      <div className="value">
        <p>0</p>
      </div>

      <div className="plusMinus">
        <button>-</button>
        <button>+</button>
      </div>
    </div>
  );
};

export default Counter;

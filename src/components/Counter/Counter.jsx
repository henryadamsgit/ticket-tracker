import React from "react";
import "./Counter.scss";

const Counter = () => {
  return (
    <div className="counter">
      <h5>Counter</h5>
      <div className="value">
        <p>0</p>
      </div>

      <div className="plusMinus">
        <p>-</p>
        <p>+</p>
      </div>
    </div>
  );
};

export default Counter;

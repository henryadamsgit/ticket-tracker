import { React, useState } from "react";
import "./Counter.scss";

const Counter = (props) => {
  const [counter, setCounter] = useState(0);

  const handleDecrement = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="counter">
      <h3>Counter</h3>
      <div className="value">
        <p>{counter}</p>
      </div>

      <div className="plusMinus">
        <button onClick={handleDecrement} className="plusMinus__button">
          -
        </button>
        <button onClick={handleIncrement} className="plusMinus__button">
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;

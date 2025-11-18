import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  console.log(count);

  return (
    <div>
      <div className="display">
        <h2>{count}</h2>

        <button className="btn" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button className="btn" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button className="btn" onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>

      <div className="inp">
        <input
          type="text"
          placeholder="Enter increment by amount"
          value={input}
          onChange={(e) => setInput(Number(e.target.value))}
        />

        <button
          className="btn"
          onClick={() => dispatch(incrementByAmount(input))}
        >
          Increment By
        </button>
      </div>
    </div>
  );
};

export default Counter;

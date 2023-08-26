import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  IncrementCounter,
  decrementCounter,
} from "../services/actions/counterActions";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const disPatch = useDispatch();
  // import redux state

  const state = useSelector((state) => {
    return state;
  });
  console.log(state.state);
  const handleIncrement = () => {
    //  call action for updating
    disPatch(IncrementCounter());
  };
  const handleDecrement = () => {
    disPatch(decrementCounter());
  };
  return (
    <div>
      <h1>Counter App</h1>
      <h2>value: {state.count}</h2>
      <button onClick={handleIncrement}>+</button> &nbsp;
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

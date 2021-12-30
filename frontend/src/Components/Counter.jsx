import React from "react";
import {
  counterIncrement,
  counterDecrement,
} from "../Redux/Actions/counterActions";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const Dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      <button onClick={() => Dispatch(counterIncrement())}>+</button>
      <span>{counter}</span>
      <button onClick={() => Dispatch(counterDecrement())}>-</button>
    </div>
  );
}

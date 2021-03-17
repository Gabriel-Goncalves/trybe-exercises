import React from "react";
import { useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.count.counter);
  return <h2>{counter}</h2>;
};

export default Counter;

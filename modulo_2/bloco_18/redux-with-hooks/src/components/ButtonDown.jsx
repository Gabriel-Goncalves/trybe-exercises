import React from "react";
import { useDispatch } from "react-redux";
import { counDown } from "../actions";

const ButtonDown = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(counDown())}>-</button>;
};

export default ButtonDown;

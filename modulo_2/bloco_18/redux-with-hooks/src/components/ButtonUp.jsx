import React from "react";
import { useDispatch } from "react-redux";
import {countUp} from '../actions';

const ButtonUp = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(countUp())}>+</button>;
};

export default ButtonUp;

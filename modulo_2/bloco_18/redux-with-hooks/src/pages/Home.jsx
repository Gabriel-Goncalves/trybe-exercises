import React from "react";
import Header from "../components/Header";
import ButtonUp from '../components/ButtonUp';
import ButtonDown from '../components/ButtonDown';
import Counter from '../components/Counter';

const Home = () => {
  return (
    <>
      <Header />
      <Counter />
      <ButtonUp />
      <ButtonDown />
    </>
  );
};

export default Home;
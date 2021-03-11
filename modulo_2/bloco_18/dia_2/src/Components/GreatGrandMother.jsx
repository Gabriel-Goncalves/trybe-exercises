import React, { useState } from "react";
import MyContext from "./Context";
import GrandMother from "./GrandMother";

function GreatGrandMother() {
  const [money, spend] = useState(100000);

  const spendMoney = () => {
    spend(money - 100);
  } 

  const context = {
    money,
    spendMoney, 
  }

  return (
    <MyContext.Provider value={context}>
      <h1>Great Grand Mother</h1>
      <button onClick={spendMoney}>GASTAR</button>
      <GrandMother />
    </MyContext.Provider>
  );
}

export default GreatGrandMother;

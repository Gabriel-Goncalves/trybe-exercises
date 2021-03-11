import React, { useState } from "react";
import MyContext from "./Context";
import GrandMother from "./GrandMother";

function GreatGrandMother() {
  const [money, spend] = useState(100000);
  return (
    <MyContext.Provider value={money}>
      <h1>Great Grand Mother</h1>
      <GrandMother />
    </MyContext.Provider>
  );
}

export default GreatGrandMother;

import React from "react";
import MyContext from "./Context";

const Daughter = () => {
  return (
    <MyContext.Consumer>
      {(context) => (
        <>
          <h1>Daughter</h1>
          <h3>I can Spend ${parseFloat(context.money).toFixed(2)}</h3>
          <button onClick={context.spendMoney}>Gastar</button>
        </>
      )}
    </MyContext.Consumer>
  );
};

export default Daughter;

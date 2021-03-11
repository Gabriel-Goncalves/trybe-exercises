import React from "react";
import MyContext from "./Context";

const Daughter = () => {
  return (
    <MyContext.Consumer>
      {(value) => (
        <>
          <h1>Daughter</h1>
          <h3>I can Spend ${parseFloat(value).toFixed(2)}</h3>
        </>
      )}
    </MyContext.Consumer>
  );
};

export default Daughter;

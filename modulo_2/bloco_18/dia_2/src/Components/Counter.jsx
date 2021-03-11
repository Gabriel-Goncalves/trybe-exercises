import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const IncreaseCount = () => {
    setCounter(counter + 1);
  }

  return(
    <section>
      <h1>{counter}</h1>
      <button type="button" onClick={ IncreaseCount }>Increase</button>
    </section>
  )
}

export default Counter;

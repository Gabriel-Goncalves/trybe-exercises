import React from 'react';
import MyContext from './Context'


const Daughter = () => {
  return(
    <MyContext.Consumer>
      <h1>Daughter</h1>
      {(value) => {
        <h3>I can spend ${parseFloat(value).toFixed(2)}</h3>
      }}
    </MyContext.Consumer>
  )
}

export default Daughter;

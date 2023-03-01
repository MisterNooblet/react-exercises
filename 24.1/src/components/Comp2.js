import React from 'react';
import useCounter from '../hook';

const Comp2 = () => {
  const { addOne, removeOne, double, divide, counter } = useCounter(5);
  return (
    <>
      <div>{counter}</div>
      <button onClick={addOne}>addOne</button>
      <button onClick={removeOne}>removeOne</button>
      <button onClick={double}>double</button>
      <button onClick={divide}>divide</button>
    </>
  );
};

export default Comp2;

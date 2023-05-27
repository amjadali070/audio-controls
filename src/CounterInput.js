import React, { useState } from 'react';


const CounterInput = ({ initial, min, max }) => {
  const [count, setCount] = useState(initial);

  const onIncrement = () => {
    if (count < max) {
      setCount(count + 1);
    }
  };

  const onDecrement = () => {
    if (count > min) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter">
      <button onClick={onIncrement}>Increment</button>
      <>  {count}  </>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
};

export default CounterInput;

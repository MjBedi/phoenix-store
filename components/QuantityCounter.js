import { useState } from 'react';

const useCounter = (initialCount) => {
  const [count, setCount] = useState(initialCount);
  return {
    value: count,
    increase: () => setCount((prevCount) => prevCount + 1),
    decrease: () => setCount((prevCount) => prevCount - 1),
    reset: () => setCount(initialCount),
  };
};

export default function QuantityCounter({ initialCount }) {
  const counter = useCounter(initialCount);
  return (
    <>
      Count: {counter.value}
      <br />
      <br />
      <button type="button" onClick={counter.reset}>
        Reset
      </button>
      <button type="button" onClick={counter.increase}>
        +
      </button>
      <button type="button" onClick={counter.decrease}>
        -
      </button>
    </>
  );
}

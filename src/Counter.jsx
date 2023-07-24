import { useState } from "react";

const Counter = () => {
  const InitialCount = 0;
  const [count, setCount] = useState(InitialCount);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(InitialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <p>I am {count} years old!</p>
    </div>
  );
};

export default Counter;

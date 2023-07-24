import { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <h1>You clicked {count} times!</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click
      </button>
    </div>
  );
};

export default UseEffect;

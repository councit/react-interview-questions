import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const url = "https://randomuser.me/api/";

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((countState) => countState + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((countState) => countState - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;

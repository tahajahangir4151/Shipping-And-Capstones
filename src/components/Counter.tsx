"use client";

// import { usePersistCounterStore } from "@/lib/store";

import { useCounterStore } from "@/lib/store";

const Counter = () => {
  const { count, increase, decrease, reset } = useCounterStore(
    (state) => state
  );

  const onClickDecrement = () => {
    if (count > 0) {
      decrease();
    }
  };

  //   const { count, increase, decrease, reset } = usePersistCounterStore(
  //     (state) => state
  //   );

  return (
    <div>
      <p>Count: {count}</p>
      <button
        onClick={increase}
        style={{
          border: "none",
          width: "100px",
          height: "40px",
          backgroundColor: "blue",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Increase
      </button>
      <button
        onClick={onClickDecrement}
        style={{
          border: "none",
          width: "100px",
          height: "40px",
          backgroundColor: "blue",
          borderRadius: "5px",
          cursor: "pointer",
          marginLeft: "5px",
        }}
      >
        Decrease
      </button>
      <button
        onClick={reset}
        style={{
          border: "none",
          width: "100px",
          height: "40px",
          backgroundColor: "blue",
          borderRadius: "5px",
          cursor: "pointer",
          marginLeft: "5px",
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;

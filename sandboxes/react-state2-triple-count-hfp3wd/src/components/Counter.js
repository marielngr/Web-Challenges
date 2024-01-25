import { useState } from "react";

export default function Counter() {
  console.log("Counter wird gerade aufgerufen");
  const [count, setCount] = useState(0);

  function inkrement(currentCount) {
    console.log("in Inkrement:", currentCount);
    return currentCount + 1;
  }

  function handleIncrement() {
    console.log(count, "vorher");
    setCount((currentCount) => currentCount + 1);
    setCount((currentCount) => currentCount + 1);
    setCount(inkrement);
    console.log(count, "nachher");
  }

  /*2 alternative Schreibweisen*/

  return (
    <div className="counter">
      <h1>Count: {count}</h1>
      <button
        type="button"
        className="counter__button"
        onClick={handleIncrement}
      >
        Increment count by 3
      </button>
    </div>
  );
}

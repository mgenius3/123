// components/Counter.js
import { useState, useEffect } from "react";

function Counter({ targetNumber, speedml = 80 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < targetNumber) {
      const timer = setTimeout(() => setCount(count + 1), speedml);
      return () => clearTimeout(timer);
    }
  }, [count, targetNumber]);

  return <>{count + " "}</>;
}

export default Counter;

import { useEffect, useState } from "react";

export default function Effect() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.count("useEffect run!");
    document.title = `You clicked ${number} times`;
  }, [number]);

  console.count("component rendered!");

  return (
    <div>
      <span>You clicked {number} times</span>
      <button onClick={() => setNumber((prev) => prev + 1)}>Increase</button>
    </div>
  );
}

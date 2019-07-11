import React, { useState, useEffect } from "react";

const HookComponent = props => {
  const [counter, updateCounter] = useState(1);
  const [counter2, updateCounter2] = useState(1);

  useEffect(() => {
    alert("Koko");
    return () => {
      alert("Jadzia");
    };
  }, [counter2]);

  return (
    <>
      <div>{counter}</div>
      <button onClick={() => updateCounter(counter + 1)}>Update</button>
      <button onClick={() => updateCounter2(counter2 + 1)}>Update</button>
    </>
  );
};

export default HookComponent;

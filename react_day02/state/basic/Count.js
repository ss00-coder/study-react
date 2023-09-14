import React, { useState } from "react";

const Count = () => {
  const [number, setNumber] = useState(0);
  const onIncrease = () => {setNumber(number + 1)};
  return (
    <>
      <div>{number}</div>
      <button onClick={onIncrease}>눌러!</button>
    </>
  );
};

export default Count;

import { useState } from "react";

export function useInput(initialValue){
  const [input, setInput] = useState(initialValue);

  const onChangeInput = (e) => {
    setInput(e.target.value);
  }

  return [input, onChangeInput];
}
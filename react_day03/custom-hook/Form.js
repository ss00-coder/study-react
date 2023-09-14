import React from "react";
import { useInput } from "./hooks/useInput";

const Form = () => {
  const [name, onChangeName] = useInput('');
  const [age, onChangeAge] = useInput('');

  const onClick = () => {
    console.log(`이름: ${name}, 나이: ${age}`)
  }
  return (
    <div>
      <div>
        <h1>이름 입력</h1>
        <div>
          <input value={name} onChange={onChangeName}></input>
        </div>
      </div>
      <div>
        <h1>나이 입력</h1>
        <div>
          <input value={age} onChange={onChangeAge}></input>
        </div>
      </div>
      <div>
        <button onClick={onClick}>완료</button>
      </div>
    </div>
  );
};

export default Form;

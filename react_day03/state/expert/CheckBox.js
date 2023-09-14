import React, { useState } from "react";

const CheckBox = () => {
  const [message, setMessage] = useState([]);

  const onChangeToCheck = (e) => {
    // console.log(e.target.value);
    // setMessage([...message, e.target.value]);
    // console.log(e.target.checked);
    
    if(!e.target.checked){ // 체크 해제 시 삭제
      setMessage(message.filter(m => m !== e.target.value))
    }else{ // 체크 시 추가
      setMessage(message.concat(e.target.value));
    }
  };

  return (
    <div>
      <div>
        <input type="checkbox" value="front-end" onChange={onChangeToCheck} /> 프론트앤드
      </div>

      <div>
        <input type="checkbox" value="ai" onChange={onChangeToCheck} /> 인공지능
      </div>

      <div>
        <input type="checkbox" value="back-end" onChange={onChangeToCheck} /> 백앤드
      </div>

      <div>
        <h1>{message.map((m, i) => <p key={i}>{m}</p>)}</h1>
      </div>
    </div>
  );
};

export default CheckBox;

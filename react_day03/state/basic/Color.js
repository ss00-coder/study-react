import React, { useRef, useState } from "react";

// 빨간색 버튼 누르면 글자색 빨갛게.
// 파란색 버튼 누르면 글자색 파랗게.
// 핑크색 입력 시 글자색 핑크색으로.
// 초기화 버튼을 눌러서 input태그에 입력한 문구 없애기

const Color = () => {
  const inputRef = useRef();
  const [color, setColor] = useState("black");
  const style = {color: color}
  const onClickToRed = () => {
    setColor("red");
  };
  const onClickToBlue = () => {
    setColor("blue");
  };
  const onChangeToPink = (e) => {
    if(e.target.value === '핑크색'){
      setColor("pink");
    }
  }

  const onClickToReset = () => {
    inputRef.current.value = "";
    setColor("black");
  };

  return (
    <div>
      <div>
        <span style={style}>즐거운 리액트~! 😍</span>
      </div>
      <div>
        <input type="text" onChange={onChangeToPink} ref={inputRef}/>
        <button type="button" onClick={onClickToReset}>초기화</button>
      </div>
      <div>
        <button onClick={onClickToRed}>빨간색</button>
        <button onClick={onClickToBlue}>파란색</button>
      </div>
    </div>
  );
};

export default Color;

import React, { useState } from 'react';
// 강아지와 고양이 버튼을 누르면 각 울음소리가 출력되게 구현!
const Sounds = () => {
  const [sounds, setSounds] = useState("");
  const onClickPuppy = () => {setSounds("멍멍")}
  const onClickCat = () => {setSounds("야옹")}
  return (
    <div>
      <h1>{sounds}</h1>
      <button onClick={onClickPuppy}>강아지</button>
      <button onClick={onClickCat}>고양이</button>
    </div>
  );
};

export default Sounds;
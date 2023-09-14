import React, { useState } from "react";

// 사용자가 입력한 이름을 p태그에 실시간으로 작성되도록 구현
// 버튼을 클릭하면 이름 뒤에 "님"이 붙도록 구현

// 입력 후 엔터 작성 시 p태그에 반영
const Name = () => {
  // const nameRef = useRef();
  const [name, setName] = useState("");
  const [flag, setFlag] = useState(false);
  const onChangeToSetName = (e) => {
    setName(e.target.value);
  };
  const onKeyUpToPutName = (e) => {
    if(e.key === 'Enter'){
      // nameRef.current.innerText = name + "님";
      setFlag(true);
    }
  };
  const onClickToAddNim = () => {setName(name + "님")}
  return (
    <div>
      <div>
        <input onChange={onChangeToSetName} onKeyUp={onKeyUpToPutName} />
      </div>
      {flag && <p>{name}</p>}
      {/* <p ref={nameRef}></p> */}
      <button onClick={onClickToAddNim}>극존대하기</button>
    </div>
  );
};

export default Name;

import React from "react";

const Form = ({inputRef, onClickToAdd, onClickToDelete}) => {
  return (
    <>
      <div>
        <input
          placeholder="한글 음식 이름"
          ref={(element) => (inputRef.current[0] = element)}
        />
        <input
          placeholder="영문 음식 이름"
          ref={(element) => (inputRef.current[1] = element)}
        />
      </div>
      <div>
        <button onClick={onClickToAdd}>추가</button>
        <button onClick={onClickToDelete}>삭제</button>
      </div>
    </>
  );
};

export default Form;

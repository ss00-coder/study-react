import React from "react";

const Form = ({formRef, inputRef, onClickToCheck}) => {
  return (
    <form action="https://www.google.com" ref={formRef}>
      <input
        type="text"
        name="name"
        ref={(element) => (inputRef.current[0] = element)}
      />
      <input
        type="text"
        name="email"
        ref={(element) => (inputRef.current[1] = element)}
      />
      <button type="button" onClick={onClickToCheck}>
        완료
      </button>
    </form>
  );
};

export default Form;

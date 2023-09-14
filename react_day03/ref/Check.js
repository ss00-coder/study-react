import React, { useRef } from 'react';
import Form from './Form';

// 완료 버튼 클릭 시 이름과 이메일이 작성되었는 지 검사하기
// 작성이 모두 완료되었다면 그 때 이동 시키기(submit())

const Check = () => {
  // 한 개의 객체만 담을 때
  const formRef = useRef();
  // 여러 개의 객체를 담을 때
  const inputRef = useRef([]);
  const onClickToCheck = () => {
    for(let input of inputRef.current){
      if(!input.value){
        console.log(input.name + ' error');
        return;
      }
    }

    formRef.current.submit();
  }
  return (
    <div>
      <Form formRef={formRef} inputRef={inputRef} onClickToCheck={onClickToCheck} />
    </div>
  );
};

export default Check;
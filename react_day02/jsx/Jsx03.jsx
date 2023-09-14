import React, { Fragment } from "react";

// Fragment
// 리액트에서는 여러 개의 요소를 꼭 하나의 요소로 감싸주어야 한다.
// Virtual DOM에서 컴포넌트 변경 감지 시 극강의 효율을 낼 수 있기 위해
// 단 하나의 DOM 트리 구조를 필요로하기 때문이다.
// div로 묶을 수 없을 상황이라면, Fragment태그를 사용하여 묶어주면 되고,
// Fragment이름은 생략할 수 있다.

const Jsx03 = () => {
  const name = "리액트";
  const message = "난 너가 좋아!"
  return (
    // <Fragment>
    <>
      <h1>안녕 {name}! 😢</h1>
      <h2>{message}! 💕</h2>
    </>
    // </Fragment>
  );
};

export default Jsx03;

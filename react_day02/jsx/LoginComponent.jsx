import React from "react";

const LoginComponent = ({name}) => {
  // 비구조 할당
  // const datas = {id: 1, title: '제목'}
  // const {id, title} = datas;
  return (
    <div>
      <h1>{name}님 환영합니다. 🎊</h1>
    </div>
  );
};

export default LoginComponent;

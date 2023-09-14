import React from 'react';
import User from './User';

const Users = ({users}) => {
  return (
    <>
      <div className='row'>
        <div>이름</div>
        <div>닉네임</div>
        <div>이메일</div>
        <div>도로명</div>
        <div>도시</div>
        <div>상세주소</div>
        <div>우편번호</div>
      </div>
      {users.map((user) => <User key={user.id} user={user} />)}
    </>
  );
};

export default Users;
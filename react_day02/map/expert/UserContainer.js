// https://jsonplaceholder.typicode.com/users
import React from 'react';
import { useAsync } from 'react-async';
import Users from './Users';

async function getUsers(){
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
}

const UserContainer = () => {
  // console.log(useAsync({promiseFn: getUsers}));
  const {value: users, isResolved} = useAsync({promiseFn: getUsers});
  // if(isResolved) {console.log(users);}

  return (
    <div style={{margin: '0 auto', width: '1400px'}}>
      {isResolved && <Users users={users} />}
    </div>
  );
};

export default UserContainer;
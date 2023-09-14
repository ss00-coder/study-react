import React from 'react';

const User = ({user}) => {
  const {name, username, email, address} = user;
  return (
    <div className='row'>
      <div>{name}</div>
      <div>{username}</div>
      <div>{email}</div>
      <div>{address.street}</div>
      <div>{address.city}</div>
      <div>{address.suite}</div>
      <div>{address.zipcode}</div>
    </div>
  );
};

export default User;
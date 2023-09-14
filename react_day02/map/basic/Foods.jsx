import React from 'react';
import Food from './Food';

const Foods = ({foods}) => {
  const foodList = foods.map(({id, name}) => <Food key={id} name={name} />)

  return (
    <ul>
      {foodList}
    </ul>
  );
};

export default Foods;
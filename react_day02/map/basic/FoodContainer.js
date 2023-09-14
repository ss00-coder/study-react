import React from "react";
import Foods from "./Foods";

const FoodContainer = () => {
  const foods = [
    {
      id: 1,
      name: "초밥",
    },
    {
      id: 2,
      name: "치킨",
    },
    {
      id: 3,
      name: "스테이크",
    },
    {
      id: 4,
      name: "샐러드",
    },
  ];

  // key는 컴포넌트 배열을 랜더링했을 경우 변경 감지를 위해 사용된다.
  // key가 없어도 랜더링은 되지만 key가 있을 경우 변경을 감지할 때 더 빠르기 때문에 성능이 향상된다.
  // const foodList = foods.map(({id, name}) => <Food id={id} name={name} />)

  return <Foods foods={foods} />;
};

export default FoodContainer;

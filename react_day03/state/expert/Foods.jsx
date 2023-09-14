import React from "react";
import Food from "./Food";

const Foods = ({style, foods, checked, onChangeCheckbox}) => {
  // checked는 각 체크박스의 상태 값이 설정된 상태로 랜더링된다.
  return (
    <ul style={style}>
      {foods.map((food, i) => (
        <Food
          key={i}
          checked={checked[i]}
          onChangeCheckbox={() => {
            onChangeCheckbox(i);
          }}
          food={food}
        />
      ))}
    </ul>
  );
};

export default Foods;

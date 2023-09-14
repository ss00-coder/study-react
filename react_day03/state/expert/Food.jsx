import React from "react";

const Food = ({checked, onChangeCheckbox, food}) => {
  const {kor, eng} = food;
  return (
    <li>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChangeCheckbox}
      />
      {`${kor} (${eng})`}
    </li>
  );
};

export default Food;

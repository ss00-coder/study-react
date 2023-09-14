import React from "react";
import Item from "./Item";

const Items = ({ items, isEnter, onMouseOverToEnter, onMouseOutToLeave, onClickToAddOptions }) => {
  const itemList = items.map((item, i) => (
    <Item
      key={i}
      i={i}
      item={item}
      isEnter={isEnter}
      onMouseOverToEnter={onMouseOverToEnter}
      onMouseOutToLeave={onMouseOutToLeave}
      onClickToAddOptions={onClickToAddOptions}
    />
  ));
  return (
    <ul>
      {itemList}
    </ul>
  );
};

export default Items;

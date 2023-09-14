import React, { useContext } from "react";
import Item from "./Item";
import { ItemContext } from "../contexts/ItemContext";

const Items = ({ isEnter, onMouseOverToEnter, onMouseOutToLeave }) => {
  const {items} = useContext(ItemContext);
  const itemList = items.map((item, i) => (
    <Item
      key={i}
      i={i}
      item={item}
      isEnter={isEnter}
      onMouseOverToEnter={onMouseOverToEnter}
      onMouseOutToLeave={onMouseOutToLeave}
    />
  ));
  return (
    <ul>
      {itemList}
    </ul>
  );
};

export default Items;

import React, { useContext, useState } from "react";
import Items from "../components/Items";
import { ItemContext } from "../contexts/ItemContext";
import { useSelector } from "react-redux";

const PopUpContainer = () => {
  const { items } = useContext(ItemContext);
  const [isEnter, setIsEnter] = useState(new Array(items.length).fill(false));

  const onMouseOverToEnter = (i) => {
    isEnter.splice(i, 1, true);
    setIsEnter(isEnter.concat());
  };

  const onMouseOutToLeave = (i) => {
    isEnter.splice(i, 1, false);
    setIsEnter(isEnter.concat());
  };

  const popUp = useSelector((state) => state.popUp);

  return (
    <div
      className="pop-up"
      style={popUp ? { display: "block" } : { display: "none" }}
    >
      <Items
        isEnter={isEnter}
        onMouseOverToEnter={onMouseOverToEnter}
        onMouseOutToLeave={onMouseOutToLeave}
      />
    </div>
  );
};

export default PopUpContainer;

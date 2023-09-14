import React, { useState } from "react";
import Items from "../components/Items";

const PopUpContainer = ({
  counts,
  setCounts,
  total,
  setTotal,
  options,
  setOptions,
  setShowModal,
  items,
  showPopUp,
  onClickToShowPopUp,
}) => {
  const [isEnter, setIsEnter] = useState(new Array(items.length).fill(false));
  const onMouseOverToEnter = (i) => {
    isEnter.splice(i, 1, true);
    setIsEnter(isEnter.concat());
  };
  const onMouseOutToLeave = (i) => {
    isEnter.splice(i, 1, false);
    setIsEnter(isEnter.concat());
  };
  const onClickToAddOptions = (item) => {
    if (options.filter(({ id }) => item.id === id).length !== 0) {
      setShowModal(true);
      return;
    }
    setTotal(
      total + parseInt(item.price.replaceAll(",", "").replaceAll("원", ""))
    );
    setCounts(counts.concat(1));
    console.log(total);
    setOptions(options.concat(item));
    onClickToShowPopUp();
  };

  return (
    <div
      className="pop-up"
      style={showPopUp ? { display: "block" } : { display: "none" }}
    >
      <Items
        items={items}
        isEnter={isEnter}
        onMouseOverToEnter={onMouseOverToEnter}
        onMouseOutToLeave={onMouseOutToLeave}
        onClickToAddOptions={onClickToAddOptions}
      />
    </div>
  );
};

export default PopUpContainer;

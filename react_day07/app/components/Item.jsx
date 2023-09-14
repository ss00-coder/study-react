import React from "react";

const Item = ({i, item, isEnter, onMouseOverToEnter, onMouseOutToLeave, onClickToAddOptions }) => {
  const {content, price} = item;
  return (
    <>
      <li
        className={isEnter[i] ? "enter" : "leave"}
        onMouseEnter={() => {onMouseOverToEnter(i)}}
        onMouseLeave={() => {onMouseOutToLeave(i)}}
        onClick={() => {onClickToAddOptions(item)}}
      >
        <div className="select">
          <p className="select-content">
            <span>{content}</span>
          </p>
          <div className="select-price">
            <div>{price}</div>
          </div>
        </div>
      </li>
    </>
  );
};

export default Item;

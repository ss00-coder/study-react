import React from "react";
import { useDispatch } from "react-redux";
import { addOptions } from "../modules/item";

const Item = ({i, item, isEnter, onMouseOverToEnter, onMouseOutToLeave }) => {
  const {content, price} = item;
  const dispatch = useDispatch();
  return (
    <>
      <li
        className={isEnter[i] ? "enter" : "leave"}
        onMouseEnter={() => {onMouseOverToEnter(i)}}
        onMouseLeave={() => {onMouseOutToLeave(i)}}
        onClick={() => {dispatch(addOptions(item))}}
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

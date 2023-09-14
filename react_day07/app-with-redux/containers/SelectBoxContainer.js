import React, { useState } from "react";
import SelectBox from "../components/SelectBox";
import ItemDetails from "../components/ItemDetails";
import { useDispatch, useSelector } from "react-redux";
import { hidePopUp, showPopUp } from "../modules/item";

const SelectBoxContainer = () => {
  const [showOptions, setShowOptions] = useState(false);
  const popUp = useSelector((state) => state.popUp);
  const dispatch = useDispatch();

  return (
    <dd className="item-wrap">
      <div
        className="item-container"
        onClick={
          popUp
            ? () => {
                dispatch(hidePopUp());
              }
            : () => {
                dispatch(showPopUp());
              }
        }
      >
        <SelectBox />
      </div>
      <ItemDetails showOptions={showOptions} setShowOptions={setShowOptions} />
    </dd>
  );
};

export default SelectBoxContainer;

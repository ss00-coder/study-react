import React, { useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useSelector } from "react-redux";

const ItemDetails = ({ showOptions, setShowOptions }) => {
  const options = useSelector((state) => state.options);
  const itemDetailList = options.map((item, i) => (
    <ItemDetail key={i} i={i} item={item} />
  ));

  useEffect(() => {
    if (options.length !== 0) {
      setShowOptions(true);
    }
  }, [options, setShowOptions]);

  return (
    <div
      className="item-detail"
      style={showOptions ? { display: "block" } : { display: "none" }}
    >
      {itemDetailList}
    </div>
  );
};

export default ItemDetails;

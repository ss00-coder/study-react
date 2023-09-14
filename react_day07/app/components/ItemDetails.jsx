import React, { useEffect } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetails = ({
  counts,
  showOptions,
  setShowOptions,
  options,
  onClickToCancelItem,
  increase,
  decrease,
}) => {
  const itemDetailList = options.map((item, i) => (
    <ItemDetail
      key={i}
      counts={counts}
      i={i}
      item={item}
      onClickToCancelItem={onClickToCancelItem}
      increase={increase}
      decrease={decrease}
    />
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

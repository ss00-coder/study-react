import React from "react";
import SelectBoxContainer from "./SelectBoxContainer";

const ItemContainer = ({
  counts,
  setCounts,
  total,
  setTotal,
  options,
  setOptions,
  onClickToShowPopUp,
}) => {
  
  const increase = (i, item) => {
    counts.splice(i, 1, counts[i] + 1);
    setCounts(counts.concat());
    setTotal(total + parseInt(item.price.replaceAll(",", "").replaceAll("원", "")));
  };
  const decrease = (i, item) => {
    if (counts[i] > 1) {
      counts.splice(i, 1, counts[i] - 1);
      setCounts(counts.concat());
      setTotal(total - parseInt(item.price.replaceAll(",", "").replaceAll("원", "")));
    }
  };

  const title = <dt className="container-title">상품 선택</dt>;
  return (
    <dl className="container">
      {title}
      <SelectBoxContainer
        counts={counts}
        setCounts={setCounts}
        total={total}
        setTotal={setTotal}
        options={options}
        setOptions={setOptions}
        onClickToShowPopUp={onClickToShowPopUp}
        increase={increase}
        decrease={decrease}
      />
    </dl>
  );
};

export default ItemContainer;

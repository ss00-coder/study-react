import React, { useState } from "react";
import SelectBox from "../components/SelectBox";
import ItemDetails from "../components/ItemDetails";

const SelectBoxContainer = ({counts, setCounts, total, setTotal, options, setOptions, onClickToShowPopUp, increase, decrease}) => {
  const [showOptions, setShowOptions] = useState(false);
  const onClickToCancelItem = (i, item) => {
    setOptions(options.filter(({id}) => id !== item.id))
    setTotal(total - parseInt(item.price.replaceAll(",", "").replaceAll("원", "")) * counts[i])
    setCounts(counts.filter((count, index) => index !== i));
  }
  return (
    <dd className="item-wrap">
      <div className="item-container" onClick={onClickToShowPopUp}>
        <SelectBox />
      </div>
      <ItemDetails counts={counts} showOptions={showOptions} setShowOptions={setShowOptions} options={options} setOptions={setOptions} onClickToCancelItem={onClickToCancelItem} increase={increase} decrease={decrease}/>
    </dd>
  );
};

export default SelectBoxContainer;

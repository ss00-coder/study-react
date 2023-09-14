import React, { useCallback, useState } from "react";
import ResultContainer from "./containers/ResultContainer";
import ItemContainer from "./containers/ItemContainer";
import PopUpContainer from "./containers/PopUpContainer";
import ErrorModal from "./components/ErrorModal";

const App = () => {
  const items = [
    {
      id: 1,
      content: "[헤라] 블랙 쿠션(리필포함) 17C1",
      price: "59,400원",
    },
    {
      id: 2,
      content: "[헤라] 블랙 쿠션(리필포함) 17N1",
      price: "59,400원",
    },
    {
      id: 3,
      content: "[헤라] 블랙 쿠션(리필포함) 21C1",
      price: "59,400원",
    },
    {
      id: 4,
      content: "[헤라] 블랙 쿠션(리필포함) 21N1",
      price: "59,400원",
    },
    {
      id: 5,
      content: "[헤라] 블랙 쿠션(리필포함) 23C1",
      price: "59,400원",
    },
    {
      id: 6,
      content: "[헤라] 블랙 쿠션(리필포함) 23N1",
      price: "59,400원",
    },
  ];

  const [options, setOptions] = useState([]);
  const [showPopUp, setShowPopUp] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [total, setTotal] = useState(0);
  const [counts, setCounts] = useState([]);

  const onClickToShowPopUp = useCallback(
    () => setShowPopUp(!showPopUp),
    [showPopUp]
  );

  const onClickToShowModal = useCallback(
    () => setShowModal(!showModal),
    [showModal]
  );
  return (
    <>
      {showModal && <ErrorModal onClickToShowModal={onClickToShowModal} />}
      <div className="wrap">
        <PopUpContainer
          counts={counts}
          setCounts={setCounts}
          total={total}
          setTotal={setTotal}
          options={options}
          setOptions={setOptions}
          setShowModal={setShowModal}
          items={items}
          showPopUp={showPopUp}
          onClickToShowPopUp={onClickToShowPopUp}
        />
        <ItemContainer
          counts={counts}
          setCounts={setCounts}
          total={total}
          setTotal={setTotal}
          options={options}
          setOptions={setOptions}
          onClickToShowPopUp={onClickToShowPopUp}
        />
        <ResultContainer total={total} />
      </div>
    </>
  );
};

export default App;

import { createContext } from "react";

const ItemContext = createContext({
  items: []
});

const value = {
  items : [
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
  ]
};

const ItemProvider = ({children}) => {
  return (
    <ItemContext.Provider value={value}>
      {children}
    </ItemContext.Provider>
  );
}

export {ItemContext, ItemProvider};
import React, { createContext, useState } from "react";

const FREIGHT = [
  {
    id: "1",
    text: "標準運送",
    price: 0,
    period: "約 3~7 個工作天",
  },
  {
    id: "2",
    text: "DHL 貨運",
    price: 500,
    period: "48 小時內送達",
  },
];

export const FreightContext = createContext();
export const FreightData = createContext();

export const FreightContextProvider = ({ children }) => {
  const [decide, setDecide] = useState(FREIGHT[0]);
  function handleFreight(id) {
    if (id === 0) {
      setDecide(FREIGHT[0]);
    } else {
      setDecide(FREIGHT[1]);
    }
  }

  return (
    <FreightContext.Provider value={handleFreight}>
      <FreightData.Provider value={decide}>{children}</FreightData.Provider>
    </FreightContext.Provider>
  );
};

import React, { createContext, useState, useEffect, useReducer } from "react";
//檔案名稱必須大寫，ESLint
const FromState = {
  creditCardName: "",
  creditCardNumber: "",
  creditCardDate: "",
  creditCardCVC: "",
  totalAmount: '',
};

export const FromStateContext = createContext()
export const DispatchFromContext = createContext()
export const ConfirmContext = createContext()
export const SetConfirmContest = createContext()
export const SetResetConfirmContext = createContext();

export function FormContextProvider({ children }) {
  const [fromState, dispatchFrom] = useReducer(fromReducer, FromState);
  const [confirm, setConfirm] = useState(false);

  function handleConfirm({ children }) {
    if (!Object.values(fromState).includes("")) {
      setConfirm(true);
    }
  }

  function handleResetConfirm() {
    setConfirm(false);
  }

  useEffect(() => {
    if (confirm) {
      console.log(fromState);
    }
  }, [confirm, fromState]);

  return (
    <FromStateContext.Provider value={fromState}>
      <DispatchFromContext.Provider value={dispatchFrom}>
        <ConfirmContext.Provider value={confirm}>
          <SetConfirmContest.Provider value={handleConfirm}>
            <SetResetConfirmContext.Provider value={handleResetConfirm}>
              {children}
            </SetResetConfirmContext.Provider>
          </SetConfirmContest.Provider>
        </ConfirmContext.Provider>
      </DispatchFromContext.Provider>
    </FromStateContext.Provider>
  );
}

function fromReducer(fromState, action) {
  switch (action.type) {
    case 'cardName': {
      return {...fromState, creditCardName: action.value}
    }

    case 'cardNumber': {
      return {...fromState, creditCardNumber: action.value}
    }

    case 'cardDate': {
      return {...fromState, creditCardDate: action.value}
    }

    case 'cardCVC': {
      return {...fromState, creditCardCVC: action.value}
    }

    case 'total': {
      return { ...fromState, totalAmount: action.value };
    }

    default: {
      console.error('error')
    }
  }
}
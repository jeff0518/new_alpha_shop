import React, { createContext, useState } from "react";

const PRODUCTS = [
  {
    id: 1,
    name: "破壞補丁修身牛仔褲",
    price: 3999,
    image: "/icons/Destroy.svg",
    quantity: 1,
  },
  {
    id: 2,
    name: "刷色直筒牛仔褲",
    price: 1299,
    image: "/icons/Straight.svg",
    quantity: 1,
  },
];

export const CartContext = createContext();
export const CartPulsContext = createContext();
export const CartMinusContext = createContext();
export const totalContext = createContext();
export const totalDataContext = createContext()

export function CartContextProvider({ children }) {
  const [Cart, setCart] = useState(PRODUCTS);
  const [amount, setAmount] = useState(0);
  function handleQuantityPlus(id) {
    setCart(
      Cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    );
  }

  function handleQuantityMinus(id) {
    let newCart = Cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(newCart.filter((newCart) => newCart.quantity !== 0));
  }

  return (
    <CartContext.Provider value={Cart}>
      <totalDataContext.Provider value={amount}>
        <totalContext.Provider value={setAmount}>
          <CartPulsContext.Provider value={handleQuantityPlus}>
            <CartMinusContext.Provider value={handleQuantityMinus}>
              {children}
            </CartMinusContext.Provider>
          </CartPulsContext.Provider>
        </totalContext.Provider>
      </totalDataContext.Provider>
    </CartContext.Provider>
  );
}

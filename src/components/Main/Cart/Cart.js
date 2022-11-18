import React, { useContext, useEffect } from "react";
import Product from "./Product";
import {
  CartContext,
  CartMinusContext,
  CartPulsContext,
  totalContext,
} from "../Store/CartContext";
// import { FromStateContext, DispatchFromContext } from "../Store/FormContext";
import { FreightData } from "../Store/FreightContext";
import styled from "styled-components";

const StyledSectionCart = styled.section`
  max-width: 440px;
  width: 100%;
  height: 492px;
  background: #ffffff;
  border: 1px solid #f0f0f5;
  border-radius: 8px;
  margin-top: 86px;
  padding: 7.2% 5.5%;
  .cart-info {
    max-width: 392px;
    width: 100%;
    height: 37px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    border-top: 1px solid var(--undone-progress-border);
    margin-top: 32px;
  }
  @media (max-width: 1266px) {
    margin-top: 0;
  }
`;

const Cart = () => {
  const ctx = useContext(CartContext);
  const minus = useContext(CartMinusContext);
  const plus = useContext(CartPulsContext);
  const freightData = useContext(FreightData);
  const amount = useContext(totalContext);
  let isTotal = 0;
  function totalAmount() {
    ctx.map((item) => {
      isTotal += item.price * item.quantity;
      return isTotal;
    });
    isTotal += freightData.price;

    return isTotal;
  }
  useEffect(() => {
    amount(isTotal);
  }, [totalAmount]);

  return (
    <StyledSectionCart>
      <h3 className="cart-title">購物籃</h3>
      <section>
        {ctx.map((item) => {
          return (
            <Product
              key={item.id}
              price={item.price}
              image={item.image}
              name={item.name}
              quantity={item.quantity}
              onClickMinus={() => minus(item.id)}
              onClickPlus={() => plus(item.id)}
            />
          );
        })}
      </section>
      <section className="cart-info shipping">
        <div className="text">運費</div>
        <div className="price">{freightData.price}</div>
      </section>
      <section className="cart-info total">
        <div className="text">小計</div>
        <div className="price">{totalAmount().toLocaleString()}</div>
      </section>
    </StyledSectionCart>
  );
};

export default Cart;

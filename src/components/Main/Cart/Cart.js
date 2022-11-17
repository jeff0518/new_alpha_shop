import React, {useContext} from "react";
import Product from "./Product";
import { CartContext, CartMinusContext, CartPulsContext } from "../Store/CartContext";
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
  let isTotal = 0;

  // 為了計算價錢
  return (
      <StyledSectionCart>
        <h3 className="cart-title">購物籃</h3>
        <section>
          {ctx.map((item) => {
            isTotal += item.quantity * item.price;
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
          <div className="price">免費</div>
        </section>
        <section className="cart-info total">
          <div className="text">小計</div>
          <div className="price">{isTotal}</div>
        </section>
      </StyledSectionCart>
  );
};

export default Cart;

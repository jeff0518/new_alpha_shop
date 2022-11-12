import React, { useState, useEffect } from "react";
import styled from "styled-components";

import "../../../sass/BaseStyled.css";

const StyledProductContainer = styled.div`
  width: 392px;
  height: 102px;
  display: flex;
  flex-direction: row;
  margin-top: 34px;

  .img-container {
    margin-right: 5.3%;
    width: 100px;
    height: 100px;
  }

  .product-info {
    display: flex;
    flex-direction: column;
    margin-right: 61px;

    .product-name {
      width: 158px;
      height: 27px;
      margin-bottom: 18px;
      color: var(--main-text);
    }

    .product-control {
      width: 116px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .product-count {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
      }
    }
    .rwd-price {
      display: none;
    }
  }

  .price {
    /* width: 52px;
    height: 22px; */
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    text-align: right;
    color: var(--product-action-text);
  }

  @media (max-width: 496px) {
    .product-info {
      display: flex;
      align-items: flex-end;

      .product-name {
        display: flex;
        justify-content: flex-end;
      }

      .rwd-price {
        display: unset;
        margin-top: 17px;
      }
    }

    .price {
      display: none;
    }
  }
`;

const Product = (props) => {
  // 新增 State，初始值由props提供
  const [isQuantity, setIsQuantity] = useState(props.quantity);

  function handleQuantityMinus() {
    setIsQuantity((quantityMinus) => quantityMinus - 1);  
    props.func((total) => total - props.price);
    
  }

  function handleQuantityPlus() {
    setIsQuantity((quantityPlus) => quantityPlus + 1);
    props.func((total) => total + props.price);
  }

  function judge() {
    if (isQuantity > 0) {
      return (
        <StyledProductContainer data-count="0" data-price="3999">
          <img className="img-container" src={props.image} alt="" />
          <div className="product-info">
            <div className="product-name">{props.name}</div>
            <div className="product-control">
              <div className="product-action" href="#">
                <img
                  src="icons/IconMinus.svg"
                  alt=""
                  className="minus"
                  onClick={handleQuantityMinus}
                />
              </div>
              <span className="product-count">{isQuantity}</span>
              <div className="product-action" href="#">
                <img
                  src="/icons/IconPlus.svg"
                  alt=""
                  className="plus"
                  onClick={handleQuantityPlus}
                />
              </div>
            </div>
            <div className="price rwd-price">{props.price}</div>
          </div>
          <div className="price">{props.price * isQuantity}</div>
        </StyledProductContainer>
      );
    } else {
      return <></>;
    }
  }
  return <>{judge()}</>;
};

export default Product;

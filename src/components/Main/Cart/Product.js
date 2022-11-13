import React from "react";
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
  // const [isQuantity, setIsQuantity] = useState(props.quantity);
  function handleQuantityMinus(id) {
    let newCount = props.count.map((product) => {
        if (product.id === id && product.quantity > 0) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        } else {
          return product;
        }
      })
    props.func(newCount.filter((product) => product.quantity !== 0));
    // setIsQuantity((quantityMinus) => quantityMinus - 1);
    // props.func()
  }

  function handleQuantityPlus(id) {
    props.func(
      props.count.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        } else {
          return product;
        }
      })
    );
    // setIsQuantity((quantityPlus) => quantityPlus + 1);
    // props.func((quantityMinus) => quantityMinus + 1);
  }

  return (
    <StyledProductContainer>
      <img className="img-container" src={props.image} alt="" />
      <div className="product-info">
        <div className="product-name">{props.name}</div>
        <div className="product-control">
          <div className="product-action" href="#">
            <img
              src="icons/IconMinus.svg"
              alt=""
              className="minus"
              onClick={() => handleQuantityMinus(props.id)}
            />
          </div>
          <span className="product-count">{props.quantity}</span>
          <div className="product-action" href="#">
            <img
              src="/icons/IconPlus.svg"
              alt=""
              className="plus"
              onClick={() => handleQuantityPlus(props.id)}
            />
          </div>
        </div>
        {/* <div className="price rwd-price">{props.price * props.quantity}</div> */}
      </div>
      <div className="price">{props.price * props.quantity}</div>
    </StyledProductContainer>
  );
};

export default Product;

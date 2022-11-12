import React, { useState } from "react";
import styled from "styled-components";
import From from "./Steps/From";
import StepProgress from './Steps/StepProgress'
import ProgressControl from './Steps/ProgressControl'
import Cart from "./Cart/Cart";

// 使用grid排版
const MainStyled = styled.main`
  margin: 140px auto 0 auto;
  display: grid;
  grid-template-columns: repeat(12, 92.5px);
  grid-gap: 30px;

  .left-Container {
    grid-column: 1 / 6;
  }

  .right-Container {
    grid-column: 7 / 12;
  }

  @media (max-width: 1266px) {
    display: none;
  }
`;

const MainRWDStyled = styled.main`
  display: none;

  @media (max-width: 1266px) {
    width: 100%;
    margin: 140px auto 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .step-container {
      width: 100%;
    }

    .cart-container {
      width: 100%;
      margin-top: 32px;
    }
  }

  @media (max-width: 1266px) {
    width: 100%;
    margin: 18px auto 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .step-container {
      width: 100%;
    }

    .cart-container {
      width: 100%;
      margin-top: 32px;
    }
  }
`;

const Main = () => {
  const [step, setStep] = useState(1)
  return (
    <>
      <MainStyled>
        <div className="left-Container">
          <StepProgress step={step} />
          <From step={step} />
          <ProgressControl step={step} setStep={setStep} />
        </div>
        <div className="right-Container">
          <Cart />
        </div>
      </MainStyled>
      <MainRWDStyled>
        <div className="step-container">
          <StepProgress step={step} />
          <From step={step} />
        </div>
        <div className="cart-container">
          <Cart />
        </div>
        <div className="button">
          <ProgressControl step={step} setStep={setStep} />
        </div>
      </MainRWDStyled>
    </>
  );
}

export default Main
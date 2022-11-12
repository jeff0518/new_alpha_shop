import React from "react";
import styled from "styled-components";
import "../../../sass/BaseStyled.css";

const StyledStepProgressContainer = styled.div`
  width: 100%;
  h2 {
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: var(--main-text);
  }

  .div {
    width: 536px;
    display: flex;
    margin-top: 48px;
    justify-content: space-between;

    .line {
      width: 60px;
      height: 1px;
      background-color: var(--product-action-text);
      margin: auto 0;
    }

    .progress-container {
      display: flex;

      .progress-icon {
        .text {
          font-weight: 400;
          line-height: 24px;
        }
      }

      .progress-label {
        width: 64px;
        height: 24px;
        color: var(--main-text);
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        margin-left: 8px;
      }
    }
  }

  @media (max-width: 600px) {
    .div {
      width: 344px;

      .line {
        background-color: #000000;
      }

      .progress-container {
        display: flex;

        .progress-icon {
          .text {
            font-weight: 400;
            line-height: 24px;
          }
        }

        .progress-label {
          display: none;
        }
      }
    }
  }
`;

const StepProgress = ({ step }) => {
  return (
    <StyledStepProgressContainer>
      <h2>結帳</h2>
      <div className="div">
        <section className="progress-container">
          <span className="progress-icon">
            <span className="text">
              <img
                src="/icons/baselineCheck.svg"
                alt=""
                className="progress-icon-img"
              />
            </span>
          </span>
          <span className="progress-label">寄送地址</span>
        </section>
        <div className="line" />
        <section className="progress-container">
          <span className="progress-icon">
            <span className="text">
              <img
                src={
                  step >= 2 ? "/icons/baselineCheck.svg" : "/icons/Number2.svg"
                }
                alt=""
                className="progress-icon-img"
              />
            </span>
          </span>
          <span className="progress-label">運送方式</span>
        </section>
        <div className="line" />
        <section className="progress-container">
          <span className="progress-icon">
            <span className="text">
              <img
                src={
                  step === 3 ? "/icons/baselineCheck.svg" : "/icons/Number3.svg"
                }
                alt=""
                className="progress-icon-img"
              />
            </span>
          </span>
          <span className="progress-label">付款資訊</span>
        </section>
      </div>
    </StyledStepProgressContainer>
  );
};

export default StepProgress;

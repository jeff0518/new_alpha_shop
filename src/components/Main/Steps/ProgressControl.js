import React from "react";
import styled from "styled-components";
import "../../../sass/BaseStyled.css";

const StyledControl = styled.div`
  width: 540px;
  border-top: 2px solid var(--main-line);
  margin-top: 48px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  .buttonGroup {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

    .next {
      background-color: var(--pink);
      width: 174px;
      height: 46px;
      border-radius: 8px;
    }

    .next1 {
      position: relative;
      left: 366px;
    }

    .prev {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      border: none;
      background-color: var(--white);
    }
  }

  @media (max-width: 1266px) {
    .buttonGroup {
      justify-content: center;
      .next {
        width: 156px;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        border: none;
      }

      .next1 {
        position: unset;
        width: 345px;
        color: #ffffff;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        border: none;
      }

      .prev {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        margin-right: 200px;
      }
    }
  }
`;

const ProgressControl = ({ step, setStep }) => {
  
  const handleSetStepPlus = () => {
    setStep((step) => step + 1);
  };

  const handleSetStepMinus = () => {
    setStep((step) => step - 1);
  };


  return (
    <StyledControl>
      {step === 1 && (
        <section className="buttonGroup" data-phase="address">
          <button className="next next1" onClick={handleSetStepPlus}>
            下一步 →
          </button>
        </section>
      )}

      {step === 2 && (
        <section
          className="buttonGroup buttonGroup__shipping"
          data-phase="shipping"
        >
          <button className="prev" onClick={handleSetStepMinus}>
            ← 上一步
          </button>
          <button className="next" onClick={handleSetStepPlus}>
            下一步 →
          </button>
        </section>
      )}

      {step === 3 && (
        <section
          className="buttonGroup buttonGroup__creditCard"
          data-phase="credit-card"
        >
          <button className="prev" onClick={handleSetStepMinus}>
            ← 上一步
          </button>
          <button className="next">確認下單</button>
        </section>
      )}
    </StyledControl>
  );
};

export default ProgressControl;

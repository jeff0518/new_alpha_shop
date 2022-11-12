import React from "react";
import styled from "styled-components";
import "../../../sass/BaseStyled.css";

const StyledStepContent = styled.div`
  margin-top: 64px;
  margin-bottom: 144px;
  width: 540px;
  height: 192px;
  form {
    .form-title {
      font-weight: 700;
      font-size: 24px;
      line-height: 24px;
    }

    .form-body {
      width: 435px;
      height: 60px;

      .radio-group {
        display: flex;
        margin-top: 24px;
        border: 1px solid var(--grey-800);

        #shipping-standard,
        #shipping-dhl {
          margin: 20px;
        }

        .radio-info {
          width: 435px;
          height: 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;

          .radio-info-content {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            .price {
              margin-right: 30px;
            }
          }
        }
      }
    }
  }
`;

const Step2 = () => {
  return (
    <StyledStepContent>
      <form data-phase="shipping">
        <h3 className="form-title">運送方式</h3>
        <section className="form-body">
          <label className="radio-group" data-price="0">
            <input
              id="shipping-standard"
              type="radio"
              name="shipping"
              defaultChecked
            />
            <div className="radio-info">
              <div className="radio-info-content">
                <div className="text">標準運送</div>
                <div className="price">免費</div>
              </div>
              <div className="period">約 3~7 個工作天</div>
            </div>
            <div className="radio-box-border"></div>
          </label>
          <label className="radio-group" data-price="500" >
            <input id="shipping-dhl" type="radio" name="shipping" />
            <div className="radio-info">
              <div className="radio-info-content">
                <div className="text">DHL 貨運</div>
                <div className="price">$500元</div>
              </div>
              <div className="period">48 小時內送達</div>
            </div>
            <div className="radio-box-border"></div>
          </label>
        </section>
      </form>
    </StyledStepContent>
  );
};

export default Step2;

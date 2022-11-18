import React, {useContext} from "react";
import {
  FromStateContext,
  DispatchFromContext,
  ConfirmContext,
  SetConfirmContest,
  SetResetConfirmContext,
} from "../Store/FormContext";
import styled from "styled-components";

const StyledStepContent = styled.div`
  margin-top: 64px;
  width: 540px;

  form {
    .form-title {
      font-weight: 700;
      font-size: 24px;
      line-height: 24px;
    }

    .form-body {
      .card {
        .input-group {
          font-size: 12px;
          line-height: 16px;
          .input-label {
            margin-top: 24px;
            font-weight: 700;
          }
          input {
            margin-top: 8px;
            width: 350px;
            height: 40px;
            font-weight: 400;
          }
        }
      }

      .verify-data {
        display: flex;
        .input-group {
          margin-right: 30px;
          input {
            width: 255px;
          }
        }
      }
    }
  }
  @media (max-width: 600px) {
    form {
      .form-body {
        .verify-data {
          .input-group {
            input {
              width: 158px;
            }
          }
        }
      }
    }
  }
`;

const Step3 = () => {
  const FromState = useContext(FromStateContext);
  const DispatchFrom = useContext(DispatchFromContext);
  const Confirm = useContext(ConfirmContext);
  const SetConfirm = useContext(SetConfirmContest);
  const SetResetConfirm = useContext(SetResetConfirmContext);
  return (
    <StyledStepContent>
      <form data-phase="credit-card">
        <h3 className="form-title">付款資訊</h3>
        <section className="form-body">
          <div className="card">
            <div className="input-group">
              <div className="input-label">持卡人姓名</div>
              <input
                type="text"
                placeholder="John Doe"
                value={FromState.creditCardName}
                onChange={(e) => {
                  DispatchFrom({ type: "cardName", value: e.target.value });
                }}
              ></input>
            </div>
          </div>
          <div className="card">
            <div className="input-group">
              <div className="input-label">卡號</div>
              <input
                type="text"
                placeholder="1111 2222 3333 4444"
                value={FromState.creditCardNumber}
                onChange={(e) => {
                  DispatchFrom({ type: "cardNumber", value: e.target.value });
                }}
              ></input>
            </div>
          </div>
          <div className="card verify-data">
            <div className="input-group">
              <div className="input-label">有效期限</div>
              <input
                type="text"
                placeholder="MM/YY"
                value={FromState.creditCardDate}
                onChange={(e) => {
                  DispatchFrom({ type: "cardDate", value: e.target.value });
                }}
              ></input>
            </div>
            <div className="input-group">
              <div className="input-label">CVC / CCV</div>
              <input
                type="text"
                placeholder="123"
                value={FromState.creditCardCVC}
                onChange={(e) => {
                  DispatchFrom({ type: "cardCVC", value: e.target.value });
                }}
              ></input>
            </div>
          </div>
        </section>
      </form>
    </StyledStepContent>
  );
};

export default Step3;

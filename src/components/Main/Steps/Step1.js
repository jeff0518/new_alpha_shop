import React from "react";
import styled from "styled-components";
import "../../../sass/BaseStyled.css";

const StyledStepContent = styled.div`
  margin-top: 64px;
  width: 100%;
  form {
    width: 540px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .form-title {
      font-weight: 700;
      font-size: 24px;
      line-height: 24px;
      color: var(--main-text);
    }

    section {
      .first-row,
      .second-row,
      .third-row {
        display: flex;
      }

      div.input-group {
        .input-label {
          margin-top: 24px;
          margin-bottom: 8px;
          font-weight: 700;
          font-size: 12px;
          line-height: 16px;
          color: var(--input-label);
        }

        .input-group-input {
          margin: 8px 30px 0 0;
          padding-left: 16px;
          width: 255px;
          height: 40px;
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;
          color: var(--input-text);
          border-radius: 4px;
          border: 1px solid #5e5e5e;
          border-radius: 4px;
        }

        .input {
          padding: 0;
          margin-top: 8px;
          width: 350px;
          /* width: 24.3%; */
          height: 40px;
          border-radius: 4px;
          border: 1px solid #5e5e5e;
        }

        .select-container {
          select {
            margin: 8px 30px 0 0;
            padding-left: 16px;
            width: 160px;
            height: 40px;
            border-radius: 4px;
            border: 1px solid #5e5e5e;
            color: var(--input-text);
            background-color: var(--background-color);
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
            option {
              color: var(--input-text);
              background-color: var(--background-color);
              font-weight: 400;
              font-size: 12px;
              line-height: 16px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 600px) {
    margin-top: 16px;
    width: 100%;
    form {
      width: 346px;

      section {
        .first-row {
          display: flex;
        }

        .second-row,
        .third-row {
          display: flex;
          flex-direction: column;
        }

        div.input-group {
          .input-label {
            margin-top: 24px;
            margin-bottom: 8px;
            font-weight: 700;
            font-size: 12px;
            line-height: 16px;
            color: var(--input-label);
          }

          .input-group-input {
            margin: 8px 30px 0 0;
            padding-left: 16px;
            width: 346px;
          }

          .input {
            padding: 0;
            margin-top: 8px;
            width: 350px;
            /* width: 24.3%; */
            height: 40px;
            border-radius: 4px;
            border: 1px solid #5e5e5e;
          }

          .input-rwd {
            
            width: 183px;
          }

          .select-container {
            select {
              margin: 8px 30px 0 0;
              padding-left: 16px;
              width: 133px;

              option {
                color: var(--input-text);
                background-color: var(--background-color);
                font-weight: 400;
                font-size: 12px;
                line-height: 16px;
              }
            }
            .select-RWD {
              width: 346px;
            }
          }
        }
      }
    }
  }
`;

const city = [
  { value: null, name: "???????????????" },
  { value: "KLU", name: "?????????" },
  { value: "TPH", name: "?????????" },
  { value: "TPE", name: "?????????" },
  { value: "TYC", name: "?????????" },
  { value: "HSH", name: "?????????" },
  { value: "HSC", name: "?????????" },
  { value: "MAC", name: "?????????" },
  { value: "MAL", name: "?????????" },
  { value: "TXG", name: "?????????" },
  { value: "CWH", name: "?????????" },
  { value: "CWS", name: "?????????" },
  { value: "NTC", name: "?????????" },
  { value: "NTO", name: "?????????" },
  { value: "YLH", name: "?????????" },
  { value: "CHY", name: "?????????" },
  { value: "CYI", name: "?????????" },
  { value: "TNN", name: "?????????" },
  { value: "KHH", name: "?????????" },
  { value: "CYI", name: "?????????" },
  { value: "IUH", name: "?????????" },
  { value: "PTS", name: "?????????" },
  { value: "PTS", name: "?????????" },
  { value: "ILN", name: "?????????" },
  { value: "ILC", name: "?????????" },
  { value: "HWA", name: "?????????" },
  { value: "HWC", name: "?????????" },
  { value: "TTC", name: "?????????" },
  { value: "TTT", name: "?????????" },
  { value: "PEH", name: "?????????" },
  { value: "KMN", name: "?????????" },
  { value: "LNN", name: "?????????" },
];

const Step1 = () => {
  return (
    <StyledStepContent>
      <form data-phase="address">
        <h3 className="form-title">????????????</h3>
        <section>
          <div className="first-row">
            <div className="input-group">
              <div className="input-label">??????</div>
              <div className="select-container">
                <select>
                  <option value="mr">??????</option>
                  <option value="ms">??????</option>
                  <option value="mx">??????</option>
                </select>
              </div>
            </div>
            <div className="input-group">
              <div className="input-label">??????</div>
              <input
                className="input input-group-input input-rwd"
                type="text"
                placeholder="???????????????"
              />
            </div>
          </div>
          <div className="second-row">
            <div className="input-group">
              <div className="input-label">??????</div>
              <input
                className="input-group-input"
                type="tel"
                placeholder="?????????????????????"
              />
            </div>
            <div className="input-group">
              <div className="input-label">Email</div>
              <input
                className="input-group-input"
                type="email"
                placeholder="?????????????????????"
              />
            </div>
          </div>
          <div className="third-row">
            <div className="input-group">
              <div className="input-label">??????</div>
              <div className="select-container">
                <select className="select-RWD" required>
                  {city.map((e, i) => {
                    return <option key={i} value={e.value}>{e.name}</option>;
                  })}
                  {/* <option value="">???????????????</option>
                  <option value="KLU">?????????</option>
                  <option value="TPH">?????????</option>
                  <option value="TPE">?????????</option>
                  <option value="TYC">?????????</option>
                  <option value="HSH">?????????</option>
                  <option value="HSC">?????????</option>
                  <option value="MAC">?????????</option>
                  <option value="MAL">?????????</option>
                  <option value="TXG">?????????</option>
                  <option value="CWH">?????????</option>
                  <option value="CWS">?????????</option>
                  <option value="NTC">?????????</option>
                  <option value="NTO">?????????</option>
                  <option value="YLH">?????????</option>
                  <option value="CHY">?????????</option>
                  <option value="CYI">?????????</option>
                  <option value="TNN">?????????</option>
                  <option value="KHH">?????????</option>
                  <option value="IUH">?????????</option>
                  <option value="PTS">?????????</option>
                  <option value="ILN">?????????</option>
                  <option value="ILC">?????????</option>
                  <option value="HWA">?????????</option>
                  <option value="HWC">?????????</option>
                  <option value="TTC">?????????</option>
                  <option value="TTT">?????????</option>
                  <option value="PEH">?????????</option>
                  <option value="KMN">?????????</option>
                  <option value="LNN">?????????</option> */}
                </select>
              </div>
            </div>
            <div className="input-group">
              <div className="input-label">??????</div>
              <input
                className="input-group-input input"
                type="text"
                placeholder="???????????????"
              />
            </div>
          </div>
        </section>
      </form>
    </StyledStepContent>
  );
};

export default Step1;

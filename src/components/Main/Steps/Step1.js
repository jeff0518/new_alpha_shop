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
  { value: null, name: "請選擇縣市" },
  { value: "KLU", name: "基隆市" },
  { value: "TPH", name: "新北市" },
  { value: "TPE", name: "臺北市" },
  { value: "TYC", name: "桃園市" },
  { value: "HSH", name: "新竹縣" },
  { value: "HSC", name: "新竹市" },
  { value: "MAC", name: "苗栗市" },
  { value: "MAL", name: "苗栗縣" },
  { value: "TXG", name: "臺中市" },
  { value: "CWH", name: "彰化縣" },
  { value: "CWS", name: "彰化市" },
  { value: "NTC", name: "南投市" },
  { value: "NTO", name: "南投縣" },
  { value: "YLH", name: "雲林縣" },
  { value: "CHY", name: "嘉義縣" },
  { value: "CYI", name: "嘉義市" },
  { value: "TNN", name: "臺南市" },
  { value: "KHH", name: "嘉義市" },
  { value: "CYI", name: "高雄市" },
  { value: "IUH", name: "屏東縣" },
  { value: "PTS", name: "屏東市" },
  { value: "PTS", name: "屏東市" },
  { value: "ILN", name: "宜蘭縣" },
  { value: "ILC", name: "宜蘭市" },
  { value: "HWA", name: "花蓮縣" },
  { value: "HWC", name: "花蓮市" },
  { value: "TTC", name: "臺東市" },
  { value: "TTT", name: "臺東縣" },
  { value: "PEH", name: "澎湖縣" },
  { value: "KMN", name: "金門縣" },
  { value: "LNN", name: "連江縣" },
];

const Step1 = () => {
  return (
    <StyledStepContent>
      <form data-phase="address">
        <h3 className="form-title">寄送地址</h3>
        <section>
          <div className="first-row">
            <div className="input-group">
              <div className="input-label">稱謂</div>
              <div className="select-container">
                <select>
                  <option value="mr">先生</option>
                  <option value="ms">女士</option>
                  <option value="mx">不明</option>
                </select>
              </div>
            </div>
            <div className="input-group">
              <div className="input-label">姓名</div>
              <input
                className="input input-group-input input-rwd"
                type="text"
                placeholder="請輸入姓名"
              />
            </div>
          </div>
          <div className="second-row">
            <div className="input-group">
              <div className="input-label">電話</div>
              <input
                className="input-group-input"
                type="tel"
                placeholder="請輸入行動電話"
              />
            </div>
            <div className="input-group">
              <div className="input-label">Email</div>
              <input
                className="input-group-input"
                type="email"
                placeholder="請輸入電子郵件"
              />
            </div>
          </div>
          <div className="third-row">
            <div className="input-group">
              <div className="input-label">縣市</div>
              <div className="select-container">
                <select className="select-RWD" required>
                  {city.map((e, i) => {
                    return <option key={i} value={e.value}>{e.name}</option>;
                  })}
                  {/* <option value="">請選擇縣市</option>
                  <option value="KLU">基隆市</option>
                  <option value="TPH">新北市</option>
                  <option value="TPE">臺北市</option>
                  <option value="TYC">桃園市</option>
                  <option value="HSH">新竹縣</option>
                  <option value="HSC">新竹市</option>
                  <option value="MAC">苗栗市</option>
                  <option value="MAL">苗栗縣</option>
                  <option value="TXG">臺中市</option>
                  <option value="CWH">彰化縣</option>
                  <option value="CWS">彰化市</option>
                  <option value="NTC">南投市</option>
                  <option value="NTO">南投縣</option>
                  <option value="YLH">雲林縣</option>
                  <option value="CHY">嘉義縣</option>
                  <option value="CYI">嘉義市</option>
                  <option value="TNN">臺南市</option>
                  <option value="KHH">高雄市</option>
                  <option value="IUH">屏東縣</option>
                  <option value="PTS">屏東市</option>
                  <option value="ILN">宜蘭縣</option>
                  <option value="ILC">宜蘭市</option>
                  <option value="HWA">花蓮縣</option>
                  <option value="HWC">花蓮市</option>
                  <option value="TTC">臺東市</option>
                  <option value="TTT">臺東縣</option>
                  <option value="PEH">澎湖縣</option>
                  <option value="KMN">金門縣</option>
                  <option value="LNN">連江縣</option> */}
                </select>
              </div>
            </div>
            <div className="input-group">
              <div className="input-label">地址</div>
              <input
                className="input-group-input input"
                type="text"
                placeholder="請輸入地址"
              />
            </div>
          </div>
        </section>
      </form>
    </StyledStepContent>
  );
};

export default Step1;

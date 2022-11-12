import React from "react";
import styled from "styled-components";
import FooterSection from "./FooterStyled";

const StyledSection = styled(FooterSection)`
  margin-right: 120px;
  width: 96px;
`;

const CustomerService = () => {
  return (
    <StyledSection>
      <h2 className="section-title">客戶服務</h2>
      <div className="section-content">
        <div className="page-link" href="#">
          運送說明
        </div>
        <div className="page-link" href="#">
          退換貨相關
        </div>
        <div className="page-link" href="#">
          付款資訊
        </div>
        <div className="page-link" href="#">
          FAQ
        </div>
      </div>
    </StyledSection>
  );
};

export default CustomerService;

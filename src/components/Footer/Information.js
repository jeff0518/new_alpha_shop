import React from "react";
import styled from "styled-components";
import FooterSection from "./FooterStyled";

const StyledSection = styled(FooterSection)`
  margin-right: 120px;
  width: 84px;
`;

const Information = () => {
  return (
    <StyledSection>
      <h2 className="section-title">資訊</h2>
      <div className="section-content">
        <div className="page-link" href="#">
          隱私權政策
        </div>
        <div className="page-link" href="#">
          Cookie
        </div>
        <div className="page-link" href="#">
          GDPR
        </div>
      </div>
    </StyledSection>
  );
};

export default Information;

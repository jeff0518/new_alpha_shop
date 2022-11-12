import React from "react";
import styled from "styled-components";
import FooterSection from "./FooterStyled";


const StyledSection = styled(FooterSection)`
  width: 199px;
`;

const Track = () => {
  return (
    <StyledSection>
      <h2 className="section-title">追蹤 ALPHA Shop</h2>
      <div className="section-content">
        <div className="page-link" href="#">
          +886 02123-45678
        </div>
        <div>
          <div className="page-link" href="#">
            <img
              src="/icons/SocialMediaIcon.svg"
              className="page-link-app"
              alt="App"
            />
          </div>
        </div>
      </div>
    </StyledSection>
  );
};

export default Track;

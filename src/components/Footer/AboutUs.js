import React from "react";
import styled from "styled-components";
import FooterSection from "./FooterStyled";

const StyledSectionAboutUs = styled(FooterSection)`
  margin-right: 120px;
  width: 96px;
`;

const AboutUs = () => {
  return (
    <StyledSectionAboutUs>
      <h2 className="section-title">關於我們</h2>
      <div className="section-content">
        <div className="page-link" href="#">
          品牌故事
        </div>
        <div className="page-link" href="#">
          媒體聯繫
        </div>
        <div className="page-link" href="#">
          Press kit
        </div>
      </div>
    </StyledSectionAboutUs>
  );
};

export default AboutUs;

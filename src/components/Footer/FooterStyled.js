import styled from "styled-components";

const FooterSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .section-title {
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    color: var(--main-text);
    margin-bottom: 24px;
  }
  .section-content {
    display: flex;
    flex-direction: column;

    .page-link {
      text-decoration: none;
      margin-bottom: 8px;
      color: var(--input-label);
    }
  }
`;



export default FooterSection;
import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Icon from "./Icon";
import Hamburger from "./Hamburger";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  height: 60px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, 92.5px);
  grid-gap: 30px;
  align-items: center;
  justify-content: space-between;

  .header-left {
    grid-column: 1 / 5;
  }

  .header-middle {
    grid-column: 5 / 9;
  }

  .header-right {
    grid-column: 9 / 10;
  }

  @media (max-width: 1200px) {
    display: unset;
    display: flex;
    align-items: center;
    width: 100%;
    .header-middle {
      display: flex;
      align-items: center;
    }
  }

  @media (max-width: 850px) {
    all: unset;
    padding: 0;
    margin: 0;
    .header-middle {
      display: flex;
      align-items: center;
    }

    .header-left,
    .header-right {
      transform: scale(0, 1);
    }
  }
`;

const Header = () => {
  return (
    <StyledDiv>
      <div className="header-left">
        <Menu />
      </div>
      <div className="header-middle">
        <Hamburger />
        <Logo />
      </div>
      <div className="header-right">
        <Icon />
      </div>
    </StyledDiv>
  );
};

export default Header;

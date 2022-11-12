import React from "react";
import styled from "styled-components";
import "../../sass/BaseStyled.css";

const StyledNav = styled.nav`
  .nav-list {
    display: flex;

    .nav-item {
      list-style: none;
      margin-right: 32px;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      width: 32px;

      a {
        text-decoration: none;
        color: var(--nav-icon);
      }
    }
    .nav-item-fourWord {
      width: 64px;
    }
  }
`;

const Menu = () => {
  return (
    <StyledNav>
      <ul className="nav-list">
        <li className="nav-item">
          <div className="nav-link" href="#">
            男款
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-link" href="#">
            女款
          </div>
        </li>
        <li className="nav-item nav-item-fourWord">
          <div className="nav-link" href="#">
            最新消息
          </div>
        </li>
        <li className="nav-item nav-item-fourWord">
          <div className="nav-link" href="#">
            客製商品
          </div>
        </li>
        <li className="nav-item nav-item-fourWord">
          <div className="nav-link" href="#">
            聯絡我們
          </div>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Menu;

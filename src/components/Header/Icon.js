import React from "react";
import styled from "styled-components";
import "../../sass/BaseStyled.css";

const IconLists = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-left: 338px; */
  .nav-list {
    display: flex;
    .nav-item {
      list-style: none;
      margin-right: 32px;
      a {
        text-decoration: none;
      }
    }
  }
`;

const Icon = () => {
  return (
    <IconLists>
      <ul className="nav-list">
        {/* <!-- search --> */}
        <li className="nav-item">
          <div href="#">
            <img
              src="/icons/IconSearch.svg"
              className="search"
              alt="search"
            />
          </div>
        </li>
        {/* <!-- cart --> */}
        <li className="nav-item">
          <div href="#">
            <img src="/icons/iconCart.svg" className="cart" alt="cart" />
          </div>
        </li>
        <li id="theme-toggle" className="nav-item">
          {/* <!-- moon -->             */}
          <div href="#">
            <img src="/icons/iconMoon.svg" className="moon" alt="moon" />
          </div>
          {/* <!-- sun --> */}
        </li>
      </ul>
    </IconLists>
  );
};

export default Icon;

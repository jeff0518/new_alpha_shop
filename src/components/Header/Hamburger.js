import styled from "styled-components";

const StyledHamburger = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20%;
  padding-left: 4.5%;
  .nav-toggle {
    display: none;
  }

  @media (min-width: 851px) {
    display: none;
  }
`;

const Hamburger = () => {
  return (
    <StyledHamburger>
      <input type="checkbox" className="nav-toggle" id="nav-toggle" />
      {/* 不能用for 要用 htmlFor，不然會跳出error */}
      <label className="nav-toggle-label" htmlFor="nav-toggle">
        <img
          src="/icons/Hamburger.svg"
          alt="nav-hamburger"
          className="hamburger"
        />
      </label>
    </StyledHamburger>
  );
};

export default Hamburger;

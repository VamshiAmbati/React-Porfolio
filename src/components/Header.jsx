import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/" className="logo">
        VAMSHI
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};
const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: auto;
    font-size: 2.4rem;
    max-width: 30%;
    font-weight: bold;
    padding: 10px;
    color: white;
    border-radius: 10px;
    background-color: #9333ea;
    box-shadow: 4px 0 10px rgb(63, 1, 63);
  }
`;

export default Header;

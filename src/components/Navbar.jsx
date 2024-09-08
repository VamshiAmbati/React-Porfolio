// import React from "react";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
// import { FaHome } from "react-icons/fa";

// import { GoPerson } from "react-icons/go";
// import { IoMdContact } from "react-icons/io";
// import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu, CgCloseR } from "react-icons/cg";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const Nav = styled.nav`
    .icon {
      padding-top: 5px;
      font-size: 2rem;
      margin-left: 5px;
    }
    .navbar-list {
      display: flex;
      gap: 4.8rem;

      li {
        list-style: none;

        .navbar-link {
          &:link,
          &:visited {
            display: inline-block;
            text-decoration: none;
            font-size: 1.8rem;
            color: ${({ theme }) => theme.colors.black};
            transition: color 0.3s linear;
          }

          &:hover,
          &:active {
            // color: ${({ theme }) => theme.colors.helper};
            color: #9333ea;
            border: 2px solid transparent;
            border-top-color: #9333ea;
            border-bottom-color: #9333ea;

            transition: 0.1s;
            padding: 5px;
          }
        }
      }
    }

    .mobile-navbar-btn {
      display: none;

      .close-outline {
        display: none;
      }
    }

    .mobile-navbar-btn[name="close-outline"] {
      display: none;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 999;
        border: ${({ theme }) => theme.colors.black};

        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }

      .navbar-list {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        text-align: center;

        transform: translateX(100%);

        visibility: hidden;
        opacity: 0;

        li {
          .navbar-link {
            &:link,
            &:visited {
              font-size: 4.2rem;
            }

            &:hover,
            &:active {
              color: ${({ theme }) => theme.colors.helper};
            }
          }
        }
      }
      .mobile-nav-icon:hover {
        cursor: pointer;
      }
      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 3%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
        cursor: pointer;
      }

      .active .close-outline {
        display: inline-block;
      }

      .active .navbar-list {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
      }
    }
  `;

  return (
    <Nav>
      <div className={openMenu ? "menuIcon active" : "menuIcon"}>
        <ul className="navbar-list">
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/"
            >
              {/* <FaHome className="icon" /> */}
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/about"
            >
              {/* <GoPerson className="icon" /> */}
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/Projects"
            >
              {/* <AiOutlineFundProjectionScreen className="icon" /> */}
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/contact"
            >
              {/* <IoMdContact className="icon" /> */}
              Contact
            </NavLink>
          </li>
        </ul>
        {/* //nav icon */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setOpenMenu(true)}
          />
          <CgCloseR
            name="close-outline"
            className="close-outline mobile-nav-icon"
            onClick={() => setOpenMenu(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
// import { useGlobalContext } from "../context";

const HeroSection = ({ image }) => {
  // const { name, image } = useGlobalContext();
  // const { name, image } = props;
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">HELLO !</p>
          <h1 className="hero-heading">
            I`M <span className="span">VAMSHI AMBATI</span>
          </h1>
          <h1 className="hero-heading">
            a<span className="span"> Web Developer...</span>
          </h1>
          <p>
            Welcome to my portfolio! I'm vamshi, a skilled and creative web
            developer with a passion for creating beautiful, responsive, and
            user-friendly websites.
          </p>
          <p className="skill-heading">HTML / CSS / JAVASCRIPT / REACT</p>
          <div className="button-tag">
            <Button className="btn hireme-btn">
              <NavLink to="/contact"> hire me </NavLink>
            </Button>
          </div>
        </div>

        <div className="section-hero-image">
          <picture>
            <img src={image} alt="hero image" className="hero-img " />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  .skill-heading {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: black;
  }
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    font-weight: bold;
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    // color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    font-size: 3rem;
    font-weight: 200;
    margin-bottom: 1.5rem;
    color: black;
    // color: ${({ theme }) => theme.colors.helper};
  }
  .span {
    color: #9333ea;
    font-weight: 700;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
    color: #9333ea;
    font-weight: 700;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
    .container {
      text-align: center;
    }
    .button-tag {
      text-align: center;
    }
  }
`;

export default HeroSection;

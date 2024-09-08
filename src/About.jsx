import React from "react";
// import HeroSection from "./components/HeroSection";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";

const About = () => {
  // const data = {
  //   name: "VAMSHI",
  //   image: "./images/about1.svg",
  // };
  // return <HeroSection {...data} />;
  return (
    <>
      <Wrapper>
        <div className="container grid grid-two-column">
          <div className="section-hero-data">
            <h1 className="hero-heading-1">
              Know Who <span className="span-im">I`M</span>
            </h1>
            <h1 className="hero-heading">
              Hi Everyone, I am <span className="span-im">Vamshi Ambati</span>{" "}
              from <span className="span-im">HYD, India.</span>
            </h1>
            <h1 className="hero-heading">
              B.Tech third year at{" "}
              <span className="span-im">BIHER, chennai.</span>
            </h1>
            <h1 className="hero-heading">
              some other activities that I love to do!
            </h1>
            <div>
              <ul>
                <li className="hobbies">Free Fire</li>
                <li className="hobbies">Eating</li>
                <li className="hobbies">Sleeping</li>
              </ul>
            </div>
            <h1 className="quote">"Turning dreams into reality."💫</h1>
            <h3 className="quote-para">-vamshi.</h3>
            <Button className="btn hireme-btn">
              <NavLink to="/contact"> hire me </NavLink>
            </Button>
          </div>

          <div className="section-hero-image">
            <picture>
              <img
                src="https://nithin-portfolio-xi.vercel.app/static/media/about.aee0f771fbfc1e7b8fa8.png"
                alt="hero image"
                className="hero-img "
              />
            </picture>
          </div>
        </div>
        <div>
          <div>
            <h1 className="skillset">
              Professional <span className="span-im">Skillset</span>
            </h1>
            <div className="container grid grid-five-column">
              <div className="cards">
                <FaHtml5 className="icon" />
              </div>
              <div className="cards">
                <IoLogoCss3 className="icon" />
              </div>
              <div className="cards">
                <IoLogoJavascript className="icon" />
              </div>
              <div className="cards">
                <FaReact className="icon" />
              </div>
              <div className="cards">
                <SiMysql className="icon" />
              </div>
            </div>
          </div>
          <div>
            <div>
              <h1 className="skillset">
                <span className="span-im">Tools </span>i use
              </h1>
              <div className="container grid grid-five-column">
                <div className="cards">
                  <VscVscode className="icon" />
                </div>
                <div className="cards">
                  <FaGithub className="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  .icon {
    font-size: 40px;
  }
  .container {
    max-width: 120rem;
    margin: 0 auto;
  }

  .grid {
    display: grid;
    gap: 9rem;
  }
  .grid-five-column {
    grid-template-columns: repeat(5, 1fr);
  }
  .skillset {
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 20px;
    text-align: center;
    font-weight: 700;
  }
  .cards {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    transition: background-color 0.3s ease;
    box-shadow: 4px 0 10px rgb(63, 1, 63);
    cursor: pointer;
  }
  .cards:hover {
    background-color: #9333ea;
    color: white;
  }

  .skillset {
    font-size: 20px;
    margin-top: 20px;
    text-align: center;
    font-weight: 700;
  }
  .span-im {
    color: #9333ea;
    font-weight: 700;
  }
  .quote {
    font-size: 20px;
    font-weight: 400;
    text-align: center;
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
    margin-bottom: 50px;
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
      gap: 20px;
    }
    .grid-five-column {
      grid-template-columns: repeat(2, 1fr);
    }
    .quote-para {
      margin-bottom: 10px;
    }
  }
  .quote-para {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    color: #9333ea;
  }
  .hobbies {
    font-size: 15px;
    margin-bottom: 10px;
    color: #9333ea;
  }
  .hero-heading-1 {
    margin-top: 120px;
    text-align: center;
    font-size: 2rem;
    font-weight: 200;
    margin-bottom: 1.5rem;
    color: black;
    // color: ${({ theme }) => theme.colors.helper};
  }
  .hero-heading {
    font-size: 2rem;
    font-weight: 200;
    margin-bottom: 1.5rem;
    color: black;
    // color: ${({ theme }) => theme.colors.helper};
  }
  .btn {
    margin-bottom: 50px;
  }
`;
export default About;

import React from "react";
import HeroSection from "./components/HeroSection";
// import About from "./About";
// import Projects from "./Projects";
// import Contact from "./Contact";

const Home = () => {
  const data = {
    name: "VAMSHI",
    image: "./images/Hero.svg",
  };
  return (
    <>
      <HeroSection {...data} />
      {/* <About />
      <Projects />
      <Contact /> */}
    </>
  );
};

export default Home;

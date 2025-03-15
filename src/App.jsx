import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/Aboutus";
import ProgressBar from "./components/ProgressBar";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default App;

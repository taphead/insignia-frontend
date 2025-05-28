import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SectionContainer from "./components/SectionContainer";
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SectionContainer>
        <AboutSection />
      </SectionContainer>
    </>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SectionContainer from "./components/SectionContainer";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SectionContainer>
        <AboutSection />
      </SectionContainer>
      <SectionContainer>
        <FeaturesSection />
      </SectionContainer>
    </>
  );
}

export default App;

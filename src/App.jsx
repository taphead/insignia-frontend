import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SectionContainer from "./components/SectionContainer";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import DownloadSection from "./components/DownloadSection";
import TestimonialCard from "./components/TestimonialCard";
import TestimonialSection from "./components/TestimonialSection";

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
      <SectionContainer>
        <DownloadSection />
      </SectionContainer>
      <SectionContainer>
        <TestimonialSection />
      </SectionContainer>
    </>
  );
}

export default App;

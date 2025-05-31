import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import SectionContainer from "./components/SectionContainer";
import AboutSection from "./components/AboutSection/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import DownloadSection from "./components/DownloadSection/DownloadSection";
import TestimonialSection from "./components/TestimonialSection";
import SubscribeSection from "./components/SubscribeSection";
import TrialSection from "./components/TrialSection";
import FooterSection from "./components/FooterSection/FooterSection";
import Bottom from "./components/Bottom";

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
      <SubscribeSection />
      <TrialSection />
      <FooterSection />
      <Bottom />
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import PurpleArrow from "./components/PurpleArrow";
import HeroSection from "./components/HeroSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  );
}

export default App;

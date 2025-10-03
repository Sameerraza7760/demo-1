import HeroSection from "./components/custom/HeroSection";
import IntroSection from "./components/custom/IntroSection";
import Navbar from "./components/custom/Navbar";
import Services from "./components/custom/Services";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <IntroSection/>
      <Services/>
     
    </>
  );
}




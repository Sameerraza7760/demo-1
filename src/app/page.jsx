import Contact from "./components/custom/Contact";
import Awards from "./components/custom/Awards";
import Footer from "./components/custom/Footer";
import HeroSection from "./components/custom/HeroSection";
import Industries from "./components/custom/Industries";
import IntroSection from "./components/custom/IntroSection";
import Navbar from "./components/custom/Navbar";
import Products from "./components/custom/Products";
import Services from "./components/custom/Services";
import Technologies from "./components/custom/Technologies";
import Testimonials from "./components/custom/Testomonials";
import WhyChooseUs from "./components/custom/WhyChooseUS";

import CaseStudy from "./components/custom/CaseStudy";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <IntroSection/>
      <Services/>
      <CaseStudy/>
        <WhyChooseUs/>
        <Testimonials/>
      <Industries/>
      <Technologies/>
      <Products/>
      <Awards/>
      <Contact/>
      <Footer/>
   
    </>
  );
}




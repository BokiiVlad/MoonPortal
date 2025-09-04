import { useRef } from "react";
import About from "../../components/AboutFirst/About.jsx";
import ChacraSection from "../../components/ChacraSection/ChacraSection.jsx";
import Contact from "../../components/Contact/Contact.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import HeroSection from "../../components/HeroSection/HeroSection.jsx";
import ReadyBegin from "../../components/ReadyBegin/ReadyBegin.jsx";
import Services from "../../components/Services/Services.jsx";
import Testimonials from "../../components/Testimonials/Testimonials.jsx";

const Home = () => {
  const sectionServicesRef = useRef(null);
  const sectionAboutRef = useRef(null);
  const sectionBookingRef = useRef(null);
  const sectionContactRef = useRef(null);
  return (
    <>
      <HeroSection
        sectionAboutRef={sectionAboutRef}
        sectionServicesRef={sectionServicesRef}
        sectionBookingRef={sectionBookingRef}
        sectionContactRef={sectionContactRef}
      />
      <About sectionAboutRef={sectionAboutRef} />
      <Services
        sectionServicesRef={sectionServicesRef}
        sectionBookingRef={sectionBookingRef}
      />
      <ChacraSection sectionBookingRef={sectionBookingRef} />
      <Testimonials />
      <ReadyBegin sectionBookingRef={sectionBookingRef} />
      <Contact sectionContactRef={sectionContactRef} />
      <Footer />
    </>
  );
};

export default Home;

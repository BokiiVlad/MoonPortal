import AboutFirst from "../../components/AboutFirst/AboutFirst.jsx";
import ChacraSection from "../../components/ChacraSection/ChacraSection.jsx";
import Contact from "../../components/Contact/Contact.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import HeroSection from "../../components/HeroSection/HeroSection.jsx";
import ReadyBegin from "../../components/ReadyBegin/ReadyBegin.jsx";
import Services from "../../components/Services/Services.jsx";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutFirst />
      <Services />
      <ChacraSection />
      <ReadyBegin />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;

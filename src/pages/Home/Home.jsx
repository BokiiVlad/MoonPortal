import AboutFirst from "../../components/AboutFirst/AboutFirst.jsx";
import AboutSecond from "../../components/AboutSecond/AboutSecond.jsx";
import HeroSection from "../../components/HeroSection/HeroSection.jsx";
import Services from "../../components/Services/Services.jsx";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutFirst />
      <AboutSecond />
      <Services />
    </>
  );
};

export default Home;

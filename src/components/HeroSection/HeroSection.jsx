import Header from "../Header/Header.jsx";
import style from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={style.heroBox}>
      <Header />

      <h1 className={style.title}>Embrace the Lunar Rhythm</h1>
      <p>Discover the magic of moon ceremonies and workshops</p>
    </div>
  );
};

export default HeroSection;

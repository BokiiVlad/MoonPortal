import Header from "../Header/Header.jsx";
import style from "./HeroSection.module.css";
import Button from "../Button/Button.jsx";

const HeroSection = () => {
  return (
    <div className={style.heroBox}>
      <img className={style.moonLight} src="/pictures/MoonLight.png" />
      <img className={style.stars} src="/pictures/Stars.png" />
      <img className={style.cloudBottom} src="/pictures/Cloud.png" />
      <img className={style.cloudTop} src="/pictures/Cloud.png" />
      <Header />
      <div className={style.moonWrapper}>
        <img className={style.moon} src="/pictures/MoonOptimized.png" />
      </div>
      <h1 className={style.title}>Embrace your natural magic</h1>
      <p className={style.text}>
        Discover the transformational power of MoonPortal ceremonies and
        workshops
      </p>
      <Button className={style.but} children={"Book Now"} />
    </div>
  );
};

export default HeroSection;

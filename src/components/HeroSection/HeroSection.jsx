import Header from "../Header/Header.jsx";
import style from "./HeroSection.module.css";
import Button from "../Button/Button.jsx";

const HeroSection = () => {
  return (
    <div className={style.heroBox}>
      <img
        className={style.moonLight}
        src="/pictures/MoonLight.png"
        srcSet="
    /pictures/MoonLight.png 480w,
    /pictures/MoonLightTablet.png 768w,
    /pictures/MoonLightDesktop.png 1440w
  "
        alt="Soft moonlight glow"
      />
      <img
        className={style.stars}
        src="/pictures/Stars.png"
        alt="Starry night sky"
      />
      <img
        className={style.cloudBottom}
        src="/pictures/Cloud.png"
        srcSet="
    /pictures/Cloud.png 480w,
    /pictures/CloudDesktop.png 768w,
    /pictures/CloudDesktop.png 1440w
  "
        alt="Cloud at the bottom"
      />
      <img
        className={style.cloudTop}
        src="/pictures/Cloud.png"
        srcSet="
    /pictures/Cloud.png.png 480w,
    /pictures/CloudDesktop.png 768w,
    /pictures/CloudDesktop.png 1440w
  "
        alt="Cloud at the top"
      />
      <Header />
      <div className={style.moonWrapper}>
        <img
          className={style.moon}
          src="/pictures/MoonOptimized.png"
          srcSet="
    /pictures/MoonOptimized.png 480w,
    /pictures/MoonTabletOptimized.png 768w,
    /pictures/MoonDesktopOptimized.png 1440w
  "
          alt="Moon"
        />
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

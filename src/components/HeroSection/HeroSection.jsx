import Header from "../Header/Header.jsx";
import style from "./HeroSection.module.css";
import Button from "../Button/Button.jsx";

const HeroSection = () => {
  return (
    <div className={style.heroBox}>
      <img className={style.stars} src="/pictures/Stars.png" />
      <img className={style.cloudBottom} src="/pictures/Cloud.png" />
      <img className={style.cloudTop} src="/pictures/Cloud.png" />
      <Header />
      <div className={style.moonWrapper}>
        <img className={style.moon} src="/pictures/MoonOptimized.png" />
        {/* <svg
          className={style.svg}
          width="605"
          height="556"
          viewBox="0 0 605 556"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M302.5 556C469.566 556 605 431.535 605 278C605 124.465 469.566 0 302.5 0C135.434 0 0 124.465 0 278C0 431.535 135.434 556 302.5 556Z"
            fill="url(#paint0_radial_56_408)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_56_408"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(302.5 278) scale(302.5 278)"
            >
              <stop stopColor="#ADD8E6" stopOpacity="0.4" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg> */}
      </div>
      <h1 className={style.title}>Embrace the Lunar Rhythm</h1>
      <p className={style.text}>
        Discover the magic of moon ceremonies and workshops
      </p>
      <Button children={"Book Now"} />
    </div>
  );
};

export default HeroSection;

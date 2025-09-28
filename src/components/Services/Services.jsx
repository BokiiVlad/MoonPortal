import style from "./Services.module.css";
import Button from "../Button/Button.jsx";

const Services = ({ sectionServicesRef, sectionBookingRef }) => {
  const scrollToBooking = () => {
    sectionBookingRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={style.section} ref={sectionServicesRef}>
      <img
        className={style.stars}
        src="/pictures/Stars.png"
        alt="Starry night sky"
      />
      <img
        className={style.cloud}
        src="/pictures/Cloud.png"
        srcSet="
    /pictures/Cloud.png 480w,
    /pictures/CloudTablet.png 768w,
    /pictures/CloudTablet.png 1440w
  "
        alt="Decorative cloud"
      />
      <h2 className={style.title}>My Services</h2>

      <ul className={style.list}>
        <li className={style.box}>
          <ul className={style.cardList}>
            <li>
              <svg className={style.svg} width="24" height="24">
                <use href="/sprite/sprite.svg#icon-Moon-Icon"></use>
              </svg>
            </li>
            <li>
              <p className={style.mainText}>Full/New Moon Ceremony</p>
            </li>
            <li>
              <p className={style.text}>
                Harness lunar energy to release, set intentions, and invite
                transformation
              </p>
            </li>
          </ul>
        </li>
        <li className={style.box}>
          <ul className={style.cardList}>
            <li>
              <svg className={style.svgStar} width="23" height="23">
                <use href="/sprite/sprite.svg#icon-Star-Icon"></use>
              </svg>
            </li>
            <li>
              <p className={style.mainText}>Chakra Portal Workshop</p>
            </li>
            <li>
              <p className={style.text}>
                Connect to the portals in your body to restore balance and
                master your energy
              </p>
            </li>
          </ul>
        </li>
        <li className={style.box}>
          <ul className={style.cardList}>
            <li>
              <svg className={style.svg} width="24" height="24">
                <use href="/sprite/sprite.svg#icon-Sun-Icon"></use>
              </svg>
            </li>
            <li>
              <p className={style.mainText}>Birth Chart Reading</p>
            </li>
            <li>
              <p className={style.text}>
                Book a reading to receive life guidance from the stars through
                your unique astrological birth chart
              </p>
            </li>
          </ul>
        </li>
      </ul>
      <Button
        onClick={scrollToBooking}
        className={style.but}
        children={"Book Now"}
      />
      <img
        className={style.moon}
        src="/pictures/MoonStages.png"
        srcSet="
    /pictures/MoonStages.png 480w,
    /pictures/MoonStagesTablet.png 768w,
    /pictures/MoonStagesDesktop.png 1440w
  "
        alt="Moon phases illustration"
      />
    </section>
  );
};

export default Services;

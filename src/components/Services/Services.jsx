import style from "./Services.module.css";
import Button from "../Button/Button.jsx";

const Services = () => {
  return (
    <section className={style.section}>
      <img
        className={style.stars}
        src="/pictures/Stars.png"
        alt="Starry night sky"
      />
      <img
        className={style.cloud}
        src="/pictures/Cloud.png"
        alt="Decorative cloud"
      />
      <h2 className={style.title}>My Services</h2>

      <ul className={style.list}>
        <li className={style.box}>
          <ul className={style.cardList}>
            <li>
              <svg className={style.svg} width="20" height="20">
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
              <svg className={style.svg} width="20" height="20">
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
              <svg className={style.svg} width="20" height="20">
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
      <Button className={style.but} children={"Book Now"} />
      <img
        className={style.moon}
        src="/pictures/MoonStages.png"
        alt="Moon phases illustration"
      />
    </section>
  );
};

export default Services;

import style from "./Services.module.css";
import Button from "../Button/Button.jsx";

const Services = () => {
  return (
    <>
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
              <p className={style.mainText}>Moon Ceremonies</p>
            </li>
            <li>
              <p className={style.text}>
                Experience the power of group rituals aligned with the new and
                full moons.
              </p>
            </li>
          </ul>
        </li>
        <li className={style.box}>
          <ul className={style.cardList}>
            <li>
              <svg className={style.svg} width="24" height="24">
                <use href="/sprite/sprite.svg#icon-Star-Icon"></use>
              </svg>
            </li>
            <li>
              <p className={style.mainText}>Lunar Workshops</p>
            </li>
            <li>
              <p className={style.text}>
                Deepen your understanding of lunar cycles and their impact on
                your life.
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
              <p className={style.mainText}>Moon Ceremonies</p>
            </li>
            <li>
              <p className={style.text}>
                Experience the power of group rituals aligned with the new and
                full moons.
              </p>
            </li>
          </ul>
        </li>
      </ul>
      <Button className={style.but} children={"Book Now"} />
      <img className={style.moon} src="/pictures/MoonStages.png" />
    </>
  );
};

export default Services;

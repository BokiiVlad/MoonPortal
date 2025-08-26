import { Link } from "react-router-dom";
import style from "./Header.module.css";
import Button from "../Button/Button.jsx";

const Header = () => {
  return (
    <section className={style.headerBox}>
      <div className={style.svgBox}>
        <svg className={style.svg} width="16" height="16">
          <use href="/sprite/sprite.svg#icon-Logo-Vector"></use>
        </svg>
        <p className={style.title}>MoonPortal</p>
      </div>
      <nav className={style.nav}>
        <ul className={style.list}>
          <li>
            <Link className={style.itemList}>About</Link>
          </li>
          <li>
            <Link className={style.itemList}>Servise</Link>
          </li>
          <li>
            <Link className={style.itemList}>Contact</Link>
          </li>
        </ul>
        <button className={style.but}>Book Now</button>
      </nav>
    </section>
  );
};

export default Header;

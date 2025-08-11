import { Link } from "react-router-dom";
import style from "./Header.module.css";

const Header = () => {
  return (
    <section className={style.headerBox}>
      <div className={style.svgBox}>
        <svg className={style.svg} width="16" height="16">
          <use href="/public/sprite/sprite.svg#icon-Logo-Vector"></use>
        </svg>
        <p>MoonPortal</p>
      </div>
      <nav>
        <ul className={style.list}>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>Servise</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Header;

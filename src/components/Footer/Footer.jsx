import { Link } from "react-router-dom";
import style from "./Footer.module.css";

const Footer = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <footer className={style.footerBox}>
      <ul className={style.list}>
        <li className={style.item}>
          <Link to="#target-section" onClick={handleClick}>
            Home
          </Link>
        </li>
        <li className={style.item}>
          <Link to="#target-section" onClick={handleClick}>
            About
          </Link>
        </li>
        <li className={style.item}>
          <Link to="#target-section" onClick={handleClick}>
            Sevices
          </Link>
        </li>
        <li className={style.item}>
          <Link to="#target-section" onClick={handleClick}>
            Contact
          </Link>
        </li>
      </ul>

      <a href="https://instagram.com" target="_blank" aria-label="Instagram">
        <svg className={style.svg} width="24" height="24">
          <use href="/sprite/sprite.svg#icon-IG-Icon"></use>
        </svg>
      </a>

      <p className={style.brend}>© 2025 MoonPortal. All rights reserved.</p>
      <p className={style.siteDevelopers}>
        Designed &amp; Developed by
        <a
          href="https://www.linkedin.com/in/olena-bakonina-888149145/"
          className={style.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          Olena Bakonina
        </a>{" "}
        &amp;{" "}
        <a
          href="https://www.linkedin.com/in/vladbokii/"
          className={style.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          Vlad Bokii
        </a>
      </p>
    </footer>
  );
};

export default Footer;

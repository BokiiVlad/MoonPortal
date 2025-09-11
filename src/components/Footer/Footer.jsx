import { Link } from "react-router-dom";
import style from "./Footer.module.css";

const Footer = ({
  sectionAboutRef,
  sectionServicesRef,
  sectionHeroRef,
  sectionContactRef,
}) => {
  const scrollToAbout = () => {
    sectionAboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToServices = () => {
    sectionServicesRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToHome = () => {
    sectionHeroRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    sectionContactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className={style.footerBox}>
      <ul className={style.list}>
        <li className={style.item}>
          <a
            className={style.link}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToHome();
            }}
          >
            Home
          </a>
        </li>
        <li className={style.item}>
          <a
            className={style.link}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToAbout();
            }}
          >
            About
          </a>
        </li>
        <li className={style.item}>
          <a
            className={style.link}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToServices();
            }}
          >
            Services
          </a>
        </li>
        <li className={style.item}>
          <a
            className={style.link}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToContact();
            }}
          >
            Contact
          </a>
        </li>
      </ul>

      <a
        href="https://www.instagram.com/_moonportal/?igsh=MXNyaDJ4bjY1NXlkbA%3D%3D#"
        target="_blank"
        aria-label="Instagram"
      >
        <svg className={style.svg} width="24" height="24">
          <use href="/sprite/sprite.svg#icon-IG-Icon"></use>
        </svg>
      </a>

      <p className={style.brend}>© 2025 MoonPortal. All rights reserved.</p>
      <p className={style.siteDevelopers}>
        Designed &amp; Developed by{" "}
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

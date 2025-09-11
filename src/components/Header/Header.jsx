import { Link } from "react-router-dom";
import style from "./Header.module.css";
import Button from "../Button/Button.jsx";

const Header = ({
  sectionAboutRef,
  sectionServicesRef,
  sectionBookingRef,
  sectionContactRef,
}) => {
  const scrollToAbout = () => {
    sectionAboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToServices = () => {
    sectionServicesRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToBooking = () => {
    sectionBookingRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    sectionContactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={style.headerBox}>
      <div className={style.svgBox}>
        <svg className={style.svg} width="16" height="16">
          <use href="/sprite/sprite.svg#icon-akar-logo"></use>
        </svg>
        <p className={style.title}>MoonPortal</p>
      </div>
      <nav className={style.nav}>
        <ul className={style.list}>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToAbout();
              }}
              className={style.itemList}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToServices();
              }}
              className={style.itemList}
            >
              Service
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToContact();
              }}
              className={style.itemList}
            >
              Contact
            </a>
          </li>
        </ul>
        <button className={style.but} onClick={scrollToBooking}>
          Book Now
        </button>
      </nav>
    </section>
  );
};

export default Header;

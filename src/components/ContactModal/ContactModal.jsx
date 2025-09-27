import { useState, useEffect } from "react";
import style from "./ContactModal.module.css";

const ContactModal = ({ isOpen, onCloseModal }) => {
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [showCheckmark, setShowCheckmark] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      setTimeout(() => setAnimate(true), 20);
      setTimeout(() => setShowCheckmark(true), 300);
    } else {
      setAnimate(false);
      setShowCheckmark(false);
      const timeout = setTimeout(() => setShow(false), 800);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!show) return null;

  return (
    <section
      className={`${style.overlay} ${animate ? style.show : style.hide}`}
    >
      <div className={style.box}>
        <button onClick={onCloseModal} className={style.but}>
          <svg
            className={style.closeSvg}
            viewBox="0 0 30 30"
            width="28"
            height="28"
          >
            <path d="M7 7l18 18"></path>
            <path d="M7 25l18-18"></path>
          </svg>
        </button>

        <img
          className={style.stars}
          src="/pictures/Stars.png"
          alt="Starry night sky"
        />

        <button className={style.butCustom}>
          <svg
            className={`${style.svgCheckmark} ${
              showCheckmark ? style.showCheckmark : ""
            }`}
            width="30"
            height="25"
            viewBox="0 0 30 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.46826 13.2656L12.4683 21.8732L27.6581 2.25293"
              stroke="#D9D9D9"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <h4 className={style.title}>Confirmed</h4>
        <p className={style.text}>
          Thank you! Your message has been sent successfully. We’ll get back to
          you soon.
        </p>

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
      </div>
    </section>
  );
};

export default ContactModal;

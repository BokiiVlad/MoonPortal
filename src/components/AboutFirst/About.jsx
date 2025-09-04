import { useEffect, useRef } from "react";
import style from "./About.module.css";

const About = ({ sectionAboutRef }) => {
  const moonRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionAboutRef.current || !moonRef.current) return;

      const sectionRect = sectionAboutRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top + window.scrollY;
      const scrollY = window.scrollY;

      const moonHeight = moonRef.current.offsetHeight;
      const sectionHeight = sectionAboutRef.current.offsetHeight;

      const stopOffset = window.innerWidth >= 768 ? 218 : 112;

      const maxMove = sectionHeight - moonHeight - stopOffset;

      const scrollInSection = Math.min(
        Math.max(scrollY - sectionTop, 0),
        maxMove
      );

      moonRef.current.style.transform = `translate(-50%, ${scrollInSection}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={style.section} ref={sectionAboutRef}>
      <img
        className={style.moon}
        ref={moonRef}
        src="/pictures/MoonOptimized.png"
        srcSet="
    /pictures/MoonOptimized.png 480w,
    /pictures/MoonTabletOptimized.png 768w,
    /pictures/MoonDesktopOptimized.png 1440w
  "
        alt="Moon"
      />

      <div className={style.contentWrapper}>
        <div className={style.aboutBox}>
          <div className={style.gradient}>
            <div className={style.aboutQuinnBox}>
              <h2 className={style.titleFirst}>About Quinn…</h2>
              <p className={style.firstText}>
                Soul coach inspiring others to explore their natural magic.
                After several years of studying the way energy moves in the body
                through the chakras and plenty of experience with journeying
                inward with meditation, breathwork, yoga and other spiritual
                practices — Quinn has a mission to remind her students that they
                are the creators of their reality.
              </p>
            </div>
          </div>
          <img
            className={style.quinnPhoto}
            srcSet="
    /pictures/QuinnPhotoMobile.png 480w,
    /pictures/QuinnPhotoTablet.png 768w,
    /pictures/QuinnPhotoDesktop.png 1440w
  "
            alt="Quinn portrait"
          />
          <img
            className={style.firstImg}
            src="/pictures/QuinnPhotoMobile.png"
            alt="Quinn portrait"
          />
        </div>

        <div className={style.wrapper}>
          <div className={style.questionBox}>
            <h2 className={style.title}>What is MoonPortal?</h2>
            <p className={style.text}>
              MoonPortal is your sacred gateway to connect deeply with the
              energy of the moon and your own inner magic.
              <br />
              Through carefully guided new moon and full moon ceremonies and
              transformative chakra workshops — held online, in person, or both
              — I invite you to step into a portal of self discovery and
              conscious alignment with cosmic cycles and your own natural
              intelligence.
            </p>
          </div>
          <img
            className={style.img}
            srcSet="
    /pictures/QuinnPhoto2.png 480w,
    /pictures/QuinnPhoto2Tablet.png 768w,
    /pictures/QuinnPhoto2Tablet.png 1440w
  "
            alt="Quinn spiritual session"
          />
          <div className={style.textBox}>
            <img
              className={style.cloud}
              src="/pictures/Cloud.png"
              srcSet="
    /pictures/Cloud.png.png 480w,
    /pictures/CloudTablet.png 768w,
    /pictures/CloudTablet.png 1440w
  "
              alt="cloud"
            />
            <h2 className={style.title}>You are the Portal</h2>
            <p className={style.secondText}>
              You are life experiencing itself as an author of the co-creative
              dance with the universe, and when you change your energy,
              everything around you changes too.
            </p>
            <p className={style.subtitle}>
              Each experience is designed to help you:
            </p>
            <ul className={style.list}>
              <li>awaken your unique intelligence;</li>
              <li>harness the organic flow of energy in your body;</li>
              <li>nurture your personal growth;</li>
              <li>access the wisdom that resides within you;</li>
              <li>feel free and inspired;</li>
            </ul>
            <p className={style.secondText}>
              All in harmony with the moon's energetic signature
              <br /> and significant celestial transits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

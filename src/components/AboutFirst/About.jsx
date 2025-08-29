import style from "./About.module.css";

const About = () => {
  return (
    <section>
      <div className={style.aboutBox}>
        <div className={style.aboutQuinnBox}>
          <h2 className={style.titleFirst}>About Quinn…</h2>
          <p className={style.firstText}>
            Soul coach inspiring others to explore their natural magic. After
            several years of studying the way energy moves in the body through
            the chakras and plenty of experience with journeying inward with
            meditation, breathwork, yoga and other spiritual practices — Quinn
            has a mission to remind her students that they are the creators of
            their reality.
          </p>
        </div>
        <img
          className={style.quinnPhoto}
          src="/pictures/QuinnPhotoTablet.png"
          alt="Quinn portrait"
        />
        <img
          className={style.firstImg}
          src="/pictures/QuinnPhotoMobile.png"
          alt="Quinn portrait"
        />
      </div>
      <div className={style.section}>
        <div className={style.questionBox}>
          <h2 className={style.title}>What is MoonPortal?</h2>
          <p className={style.text}>
            MoonPortal is your sacred gateway to connect deeply with the energy
            of the moon and your own inner magic.
            <br />
            Through carefully guided new moon and full moon ceremonies and
            transformative chakra workshops — held online, in person, or both —
            I invite you to step into a portal of self discovery and conscious
            alignment with cosmic cycles and your own natural intelligence.
          </p>
        </div>

        <img
          className={style.img}
          src="/pictures/QuinnPhoto2.png"
          alt="Quinn spiritual session"
        />
        <div className={style.textBox}>
          <img className={style.cloud} src="/pictures/Cloud.png" />
          <h2 className={style.title}>You are the Portal</h2>
          <p className={style.secondText}>
            You are life experiencing itself as an author of the co-creative
            dance with the universe, and when you change your energy, everything
            around you changes too.
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
    </section>
  );
};

export default About;

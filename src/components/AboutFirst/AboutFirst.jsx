import style from "./AboutFirst.module.css";

const AboutFirst = () => {
  return (
    <section>
      <div className={style.aboutBox}>
        <div>
          <h2 className={style.titleFirst}>About Quinn…</h2>
          <p className={style.firstText}>
            Soul coach inspiring others to explore their natural magic. After
            several years of studying the way energy moves in the body through
            the chakras and plenty of experience with journeying inward with
            meditation, breathwork, yoga and other spiritual practices - Quinn
            has a mission to remind her students that they are the creators of
            their reality.
          </p>
        </div>
        <img className={style.firstImg} src="/pictures/QuinnPhotoMobile.png" />
      </div>
      <div className={style.section}>
        <div className={style.textBox}>
          <h2 className={style.title}>You are the Portal</h2>
          <p className={style.firstText}>
            You are life experiencing itself as an author of the co-creative
            dance with the universe, and when you change your energy, everything
            around you changes too.
          </p>
          <p>Each experience is designed to help you:</p>
          <ul className={style.list}>
            <li>awaken your unique intelligence;</li>
            <li>harness the organic flow of energy in your body;</li>
            <li>nurture your personal growth;</li>
            <li>access the wisdom that resides within you;</li>
            <li>feel free and inspired;</li>
          </ul>
          <p className={style.secondText}>
            All in harmony with the moon's energetic signature and significant
            celestial transits.
          </p>
        </div>
        <img className={style.img} src="/pictures/QuinnPhoto2.png" />
      </div>
    </section>
  );
};

export default AboutFirst;

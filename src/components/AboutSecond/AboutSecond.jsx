import style from "./AboutSecond.module.css";

const AboutSecond = () => {
  return (
    <section className={style.section}>
      <div className={style.textBox}>
        <h2 className={style.title}>You are the Portal</h2>
        <p className={style.firstText}>
          You are life experiencing itself as an author of the co-creative dance
          with the universe, and when you change your energy, everything around
          you changes too.
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
    </section>
  );
};

export default AboutSecond;

import style from "./AboutSecond.module.css";

const AboutSecond = () => {
  return (
    <section className={style.box}>
      <h2 className={style.title}>You are the Portal</h2>
      <p className={style.text}>
        You are life experiencing itself as an author of the co-creative dance
        with the universe, and when you change your energy, everything around
        you changes too.
      </p>
      <p className={style.text}>Each experience is designed to help you:</p>
      <ol className={style.list}>
        <li>Awaken your unique intelligence;</li>
        <li>Harness the organic flow of energy in your body;</li>
        <li>Nurture your personal growth;</li>
        <li>Access the wisdom that resides within you;</li>
        <li>Feel free and inspired;</li>
      </ol>
      <p className={style.text}>
        All in harmony with the moon's energetic signature and significant
        celestial transits.
      </p>
    </section>
  );
};

export default AboutSecond;

import style from "./AboutSecond.module.css";

const AboutSecond = () => {
  return (
    <div className={style.box}>
      <img className={style.stars} src="/pictures/Stars.png" />
      <img
        className={style.cloudBottom}
        src="../../../public/pictures/Cloud.png"
      />
      <p className={style.text}>Each experience is designed to help you:</p>
      <ol className={style.list}>
        <li>awaken your unique intelligence;</li>
        <li>nurture your personal growth;</li>
        <li>access the wisdom that resides within you.</li>
      </ol>
      <p className={style.text}>
        All in harmony with the moon’s energetic signature and significant
        celestial transits.
      </p>
      <img className={style.img} src="/pictures/BookOptimized.png" />
    </div>
  );
};

export default AboutSecond;

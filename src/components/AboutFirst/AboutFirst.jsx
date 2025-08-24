import style from "./AboutFirst.module.css";

const AboutFirst = () => {
  return (
    <section className={style.aboutBox}>
      <h2 className={style.title}>About Quinn…</h2>
      <p className={style.firstText}>
        Soul coach inspiring others to explore their natural magic. After
        several years of studying the way energy moves in the body through the
        chakras and plenty of experience with journeying inward with meditation,
        breathwork, yoga and other spiritual practices - Quinn has a mission to
        remind her students that they are the creators of their reality.
      </p>
      <img className={style.img} src="/pictures/QuinnPhotoMobile.png" />
    </section>
  );
};

export default AboutFirst;

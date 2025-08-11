import style from "./AboutFirst.module.css";

const AboutFirst = () => {
  return (
    <section className={style.aboutBox}>
      <img className={style.stars} src="/pictures/Stars.png" />
      <h2 className={style.title}>What is MoonPortal?</h2>
      <p className={style.firstText}>
        MoonPortal is your sacred gateway to connect deeply with the energy of
        the moon and your own inner magic.
      </p>
      <p>
        Through carefully guided new moon and full moon ceremonies and
        transformative workshops — held online, in person, or both — I invite
        you to step into a portal of self-discovery and conscious alignment with
        cosmic cycles.
      </p>
      <img className={style.img} src="/pictures/Quinn.png" />
    </section>
  );
};

export default AboutFirst;

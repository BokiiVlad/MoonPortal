import style from "./ReadyBegin.module.css";
import Button from "../Button/Button.jsx";

const ReadyBegin = () => {
  return (
    <section className={style.box}>
      <img className={style.stars} src="/pictures/Stars.png" />
      <img className={style.cloudTop} src="/pictures/Cloud.png" />
      <img className={style.cloudBottom} src="/pictures/Cloud.png" />
      <h2 className={style.title}>Ready to Begin Your Lunar Journey?</h2>

      <p className={style.text}>
        Join us for an upcoming ceremony or workshop and discover the magic of
        the moon.
      </p>
      <Button className={style.but} children={"Book Now"} />
    </section>
  );
};
export default ReadyBegin;

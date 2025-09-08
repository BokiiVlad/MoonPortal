import style from "./ReadyBegin.module.css";
import Button from "../Button/Button.jsx";

const ReadyBegin = ({ sectionBookingRef }) => {
  const scrollToBooking = () => {
    sectionBookingRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={style.box}>
      <img
        className={style.stars}
        src="/pictures/Stars.png"
        alt="Starry night sky"
      />
      <img
        className={style.cloudTop}
        src="/pictures/Cloud.png"
        srcSet="
    /pictures/Cloud.png 480w,
    /pictures/CloudTablet.png 768w,
    /pictures/CloudTablet.png 1440w
  "
        alt="Cloud at the top"
      />
      <img
        className={style.cloudBottom}
        src="/pictures/Cloud.png"
        srcSet="
    /pictures/Cloud.png 480w,
    /pictures/CloudTablet.png 768w,
    /pictures/CloudTablet.png 1440w
  "
        alt="Cloud at the bottom"
      />
      <h2 className={style.title}>Ready to Begin Your Lunar Journey?</h2>

      <p className={style.text}>
        Join us for an upcoming ceremony or workshop and discover the magic of
        the moon.
      </p>
      <Button
        onClick={scrollToBooking}
        className={style.but}
        children={"Book Now"}
      />
    </section>
  );
};

export default ReadyBegin;

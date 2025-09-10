import style from "./Testimonials.module.css";
import testimonials from "../../data/reviews.js";
import TestimonialsItem from "../TestimonialsItem/TestimonialsItem.jsx";

const Testimonials = () => {
  return (
    <section className={style.section}>
      <h2 className={style.title}>Testimonials</h2>
      <div className={style.list}>
        {testimonials.map((el) => (
          <TestimonialsItem
            key={el.id}
            name={el.name}
            quote={el.quote}
            rating={el.rating}
            socials={el.socials}
          />
        ))}
      </div>
    </section>
  );
};
export default Testimonials;

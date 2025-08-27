import style from "./Testimonials.module.css";
import testimonials from "../../data/reviews.js";
import TestimonialsItem from "../TestimonialsItem/TestimonialsItem.jsx";

const Testimonials = () => {
  const shuffled = [...testimonials].sort(() => Math.random() - 0.5);

  const randomThree = shuffled.slice(0, 3);
  return (
    <section className={style.section}>
      <h2 className={style.title}>Testimonials</h2>
      <div className={style.list}>
        {randomThree.map((el) => (
          <TestimonialsItem
            key={el.id}
            name={el.name}
            quote={el.quote}
            rating={el.rating}
          />
        ))}
      </div>
    </section>
  );
};
export default Testimonials;

import style from "./TestimonialsItem.module.css";

const TestimonialsItem = ({
  name,
  quote,
  rating,
  link = "https://www.instagram.com/",
}) => {
  return (
    <ul className={style.list}>
      <li className={style.quote}>{quote}</li>
      <li className={style.name}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </li>
      <li className={style.rating}>{rating}</li>
    </ul>
  );
};

export default TestimonialsItem;

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
      <li className={style.rating}>
        <div className={style.ratingStars}>
          {[...Array(rating)].map((_, i) => (
            <svg
              key={i}
              width="23"
              height="20"
              viewBox="0 0 23 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.29801 18.9316C4.76726 19.1692 4.16501 18.7528 4.27226 18.2212L5.41351 12.5454L0.569397 8.51835C0.117023 8.14156 0.352147 7.45279 0.958521 7.37839L7.69325 6.54322L10.6962 1.35099C10.9671 0.883004 11.7 0.883004 11.9709 1.35099L14.9739 6.54322L21.7086 7.37839C22.315 7.45279 22.5501 8.14156 22.0963 8.51835L17.2536 12.5454L18.3948 18.2212C18.5021 18.7528 17.8998 19.1692 17.3691 18.9316L11.3315 16.2245L5.29663 18.9316H5.29801Z"
                fill="#7294C2"
              />
            </svg>
          ))}
        </div>
      </li>
    </ul>
  );
};

export default TestimonialsItem;

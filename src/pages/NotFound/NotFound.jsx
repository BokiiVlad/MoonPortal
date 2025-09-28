import { Link } from "react-router-dom";
import style from "./NotFound.module.css";

const NotFound = () => {
  return (
    <section className={style.box}>
      <h2 className={style.title}>404 - Page Not Found</h2>
      <p className={style.text}>
        Oops! The page you’re looking for doesn’t exist or was moved.
      </p>
      <Link to="/" className={style.btn}>
        Go Home
      </Link>
    </section>
  );
};
export default NotFound;

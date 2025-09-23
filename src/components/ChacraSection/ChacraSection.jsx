import style from "./ChacraSection.module.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const ChacraSection = ({ sectionBookingRef }) => {
  const handleclick = async (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    try {
      await axios.post("https://moonportalbackend.onrender.com/api/bookings", {
        name: form.elements.name.value,
        email: form.elements.email.value,
      });
      toast.success("You’re subscribed! You’ll receive your guidebooks soon.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      form.reset();
    } catch (error) {
      toast.error("Something went wrong! Please try again later.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log(error);
    }
  };
  return (
    <section className={style.section} ref={sectionBookingRef}>
      <ToastContainer />
      <img
        className={style.cloud}
        src="/pictures/Cloud.png"
        srcSet="
    /pictures/Cloud.png.png 480w,
    /pictures/CloudTablet.png 768w,
    /pictures/CloudTablet.png 1440w
  "
        alt="cloud"
      />
      <img className={style.stars} src="/pictures/Stars.png" alt="stars" />
      <h3 className={style.title}>The Chakra Portals</h3>
      <p className={style.firstText}>
        Your body has 7 main energetic centers that each hold a unique imprint.
        These centers are portals of experience called the Chakras which means
        ‘spinning wheel’ in Sanskrit and like a computer they are programmed to
        behave in a certain way.
      </p>
      <p className={style.secondText}>
        All together they form a system of energy that is the undercurrent of
        the way you move through the world.
      </p>

      <div className={style.formBox}>
        <img
          className={style.chakra}
          src="/pictures/PhotoChakra.png"
          srcSet="
      /pictures/PhotoChakra.png 480w,
      /pictures/PhotoChakraTablet.png 768w,
      /pictures/PhotoChakraDesktop.png 1440w
    "
          alt="Chakra illustration"
        />
        <div>
          <p className={style.chakraText}>Get the Free MoonPortal Guidebooks</p>
          <p className={style.underChakraText}>
            Connect to the cycles of the moon for your spiritual journey
          </p>
          <form onSubmit={handleclick} className={style.labelBox}>
            <label className={style.label}>
              Name
              <input
                name="name"
                className={style.input}
                type="text"
                placeholder="Your Name"
                required
                minLength={4}
                maxLength={30}
              />
            </label>

            <label className={style.label}>
              Email
              <input
                name="email"
                className={style.input}
                type="email"
                placeholder="Your Email"
                required
                minLength={5}
                maxLength={50}
              />
            </label>

            <button className={style.but} type="submit">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ChacraSection;

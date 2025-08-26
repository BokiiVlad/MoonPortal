import style from "./ChacraSection.module.css";

const ChacraSection = () => {
  return (
    <section className={style.section}>
      <img className={style.stars} src="/pictures/Stars.png" />
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
      <img className={style.img} src="/pictures/PhotoChakra.png" />
      <div className={style.formBox}>
        <p className={style.chakraText}>Get the Free MoonPortal Guidebooks</p>
        <p className={style.underChakraText}>
          Connect to the cycles of the moon for your spiritual journey{" "}
        </p>
        <div className={style.labelBox}>
          <label className={style.label}>
            Name
            <input
              className={style.input}
              type="text"
              placeholder="Your Name"
            />
          </label>

          <label className={style.label}>
            Email
            <input
              className={style.input}
              type="email"
              placeholder="Your Email"
            />
          </label>
        </div>
      </div>
      <button type="submit">Get Guidebooks</button>
    </section>
  );
};

export default ChacraSection;

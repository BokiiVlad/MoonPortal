import { Formik, Form, Field } from "formik";
import style from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={style.box}>
      <div>
        <h2 className={style.title}>Contact Us</h2>
        <p className={style.text}>
          We'd love to hear from you! Whether you have questions, feedback, or
          just want to share your thoughts, please fill out the form below.
        </p>

        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          onSubmit={(values) => {
            console.log("Form values:", values);
          }}
        >
          {() => (
            <Form className={style.form}>
              <div className={style.formGroup}>
                <label htmlFor="name" className={style.label}>
                  Name
                </label>
                <Field
                  id="name"
                  className={style.textInput}
                  type="text"
                  name="name"
                  placeholder="Your Name"
                />
              </div>

              <div className={style.formGroup}>
                <label htmlFor="email" className={style.label}>
                  Email
                </label>
                <Field
                  id="email"
                  className={style.textInput}
                  type="email"
                  name="email"
                  placeholder="Your Email"
                />
              </div>

              <div className={style.formGroup}>
                <label htmlFor="message" className={style.label}>
                  Message
                </label>
                <Field
                  id="message"
                  className={style.textArea}
                  as="textarea"
                  name="message"
                  placeholder="Your Message"
                />
              </div>

              <button type="submit" className={style.submitBtn}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
        <p className={style.textContact}>Additional Contact Methods</p>
        <p class={style.titleAddress}>
          Email:{" "}
          <a href="mailto:contact@moonportal.com">Moonportalq@gmail.com </a>
        </p>
      </div>
      <img className={style.img} src="/pictures/photoStudia.png" />
    </section>
  );
};

export default Contact;

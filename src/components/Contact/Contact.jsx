import { Formik, Form, Field } from "formik";
import axios from "axios";
import style from "./Contact.module.css";
import ContactModal from "../ContactModal/ContactModal.jsx";
import { useState } from "react";

const Contact = ({ sectionContactRef }) => {
  const [isModal, setIsModal] = useState(false);

  const handleCloseModal = () => {
    setIsModal(false);
  };

  const sendForm = async (values) => {
    const { name, email, message } = values;
    try {
      setIsModal(true);
      await axios.post("https://moonportalbackend.onrender.com/api/contact", {
        name,
        email,
        message,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={style.box} ref={sectionContactRef}>
      <ContactModal isOpen={isModal} onCloseModal={handleCloseModal} />
      <div>
        <h2 className={style.title}>Contact Us</h2>
        <p className={style.text}>
          We'd love to hear from you! Whether you have questions, feedback, or
          just want to share your thoughts, please fill out the form below.
        </p>

        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          onSubmit={(values, { resetForm }) => {
            sendForm(values);
            resetForm();
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
        <p className={style.titleAddress}>
          Email:{" "}
          <a href="mailto:contact@moonportal.com">Moonportalq@gmail.com </a>
        </p>
      </div>
      <img
        className={style.img}
        src="/pictures/photoStudia.png"
        alt="Photo of MoonPortal studio interior"
      />
    </section>
  );
};

export default Contact;

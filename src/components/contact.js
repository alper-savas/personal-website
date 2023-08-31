import React from "react";
import classes from "./contact.module.css";
import location from "../images/location-outline.svg";
import mail from "../images/mail-outline.svg";
import contact from "../images/undraw_email_campaign_re_m6k5.svg";

const Contact = () => {
  return (
    <section className={classes.container} id="contact">
      <div className={classes.contact}>
        <div className={classes.iconContainer}>
          <img src={contact} alt="Pin" />
        </div>
        <div className={classes.personalContainer}>
          <h2 className={classes.header}>Contact me</h2>
          <p>
            Whether you have a question or want to say hi, feel free to get in
            touch.
          </p>
          <a href="mailto:alpersavas1998@gmail.com">
            <button className={classes.button}>Contact</button>
          </a>
          <div className={classes.personalInfo}>
            <div className={classes.personal}>
              <img src={location} alt="Pin" />
              <p className={classes.icon}>Berlin</p>
            </div>
            <div className={classes.personal}>
              <img src={mail} alt="Pin" />
              <p className={classes.icon}>alpersavas@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

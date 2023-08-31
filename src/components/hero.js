import React from "react";
import classes from "./hero.module.css";
import background from "../images/background.jpg";
import mail from "../images/mail-outline.svg";
import linkedin from "../images/logo-linkedin.svg";
import github from "../images/logo-github.svg";
import codewars from "../images/codewars.svg";

const Hero = () => {
  return (
    <section className={classes.hero} id="#hero">
      <img src={background} alt="Background" className={classes.background} />
      <div className={classes.info}>
        <h1>Hey, I'm Alper Savas.</h1>
        <h6>
          I'm a software developer-to-be and senior computer science student at
          Freie Universität Berlin.
        </h6>
        <div className={classes.buttons}>
          <button className={`${classes.button} ${classes.contact}`}>
            Resume
          </button>
          <button className={classes.button}>Contact</button>
        </div>
      </div>
      <div className={classes.icons}>
        <a
          href="mailto:alpersavas1998@gmail.com"
          className={classes.icon}
          target="_blank"
          rel="noreferrer"
        >
          <img src={mail} alt="icon" />
        </a>
        <a href="/" className={classes.icon} target="_blank" rel="noreferrer">
          <img src={linkedin} alt="icon" />
        </a>
        <a
          href="https://github.com/alper-savas"
          className={classes.icon}
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="icon" />
        </a>
        <a
          href="https://www.codewars.com/users/Alpersavas"
          className={classes.icon}
          target="_blank"
          rel="noreferrer"
        >
          <img src={codewars} alt="icon" />
        </a>
      </div>
    </section>
  );
};

export default Hero;

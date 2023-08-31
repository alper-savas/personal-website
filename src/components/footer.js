import React from "react";
import classes from "./footer.module.css";
import mail from "../images/mail-outline.svg";
import linkedin from "../images/logo-linkedin.svg";
import github from "../images/logo-github.svg";
import codewars from "../images/codewars.svg";

const Footer = () => {
  return (
    <footer className={classes.footer}>
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
      <div>
        <p className={classes.copyright}>
          © Copyright 2023 | Made by Alper Savas
        </p>
      </div>
    </footer>
  );
};

export default Footer;

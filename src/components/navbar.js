import React from "react";
import classes from "./navbar.module.css";

const Navbar = () => {
  return (
    <section>
      <nav>
        <span className={classes.name}>Alper Savas</span>
        <ul>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;

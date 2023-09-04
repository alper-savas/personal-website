import React from "react";
import classes from "./skills.module.css";

const Skills = () => {
  return (
    <section className={classes.container} id="skills">
      <h3 className={classes.skillsHeader}>Skills</h3>
      <div className={classes.skills}>
        <div className={classes.skill}>
          <h4>Front-end</h4>
          <div className={classes.icons}>
            <img
              className={classes.icon}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
              alt="HTML icon"
            />
            <img
              className={classes.icon}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
              alt="CSS icon"
            />
            <img
              className={classes.icon}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
              alt="JS icon"
            />
            <img
              className={classes.icon}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
              alt="TS icon"
            />
            <img
              className={classes.icon}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React icon"
            />
            <img
              className={classes.icon}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              alt="Nextjs icon"
            />
            <img
              className={classes.icon}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
              alt="Nextjs icon"
            />
          </div>
        </div>
        <div className={classes.skill}>
          <h4>Back-end</h4>
          <div className={classes.icons}>
            <img
              className={classes.icon}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg"
              alt="Nodejs icon"
            />
            <img
              className={classes.icon}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg"
              alt="MySQL icon"
            />
            <img
              className={classes.icon}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg"
              alt="MongoDB icon"
            />
          </div>
        </div>
        <div className={`${classes.skill} ${classes.other}`}>
          <h4>Other</h4>
          <div className={classes.icons}>
            <img
              className={classes.icon}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain.svg"
              alt="Java icon"
            />
            <img
              className={classes.icon}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg"
              alt="Python icon"
            />
            <img
              className={classes.icon}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="Git icon"
            />
            <img
              className={classes.icon}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-plain.svg"
              alt="Flutter icon"
            />
            <img
              className={classes.icon}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-plain.svg"
              alt="Terminal icon"
            />
            <img
              className={classes.icon}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
              alt="VSCode icon"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

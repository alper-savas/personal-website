import React from "react";
import classes from "./projects.module.css";
import redo from "../images/arrow-redo-outline.svg";
import munched from "../images/munched.png";
import quizzy from "../images/quizzy.png";
import radiant from "../images/radiant.png";
import apple from "../images/apple_clone.png";
import airbnb from "../images/airbnb_clone.png";

const Projects = () => {
  return (
    <section id="projects">
      <div className={classes.container}>
        <h2>Personal Projects</h2>
        <div className={classes.projects}>
          <div className={classes.project}>
            <a
              href="https://munched-delivery-app.vercel.app/"
              className={classes.projectImg}
            >
              <img src={munched} alt="Munched delivery app" />
            </a>
            <div className={classes.projectDesc}>
              <h3>Munched Delivery App</h3>
              <p>
                This is a Next.js project.It allows users to order food from
                nearby restaurants by either creating a user account or entering
                their information manually.{" "}
              </p>
              <div className={classes.stack}>
                <div>
                  <span className={classes.stackItem}>Next.js</span>
                  <span className={classes.stackItem}>MongoDB</span>
                  <span className={classes.stackItem}>Redux</span>
                  <span className={classes.stackItem}>HTML/CSS</span>
                </div>
                <a
                  href="https://github.com/alper-savas/munched-delivery-app"
                  className={classes.projectImg}
                >
                  <img src={redo} alt="icon" className={classes.redo} />
                </a>
              </div>
            </div>
          </div>
          <div className={classes.project}>
            <div className={classes.projectDesc}>
              <h3>Quizzy Quiz App</h3>
              <p>
                This is a React project that allows users to choose a topic from
                different categories and test their knowledge on that topic, as
                you guessed.
              </p>
              <div className={classes.stack}>
                <div>
                  <span className={classes.stackItem}>React</span>
                  <span className={classes.stackItem}>Redux</span>
                  <span className={classes.stackItem}>JavaScript</span>
                  <span className={classes.stackItem}>HTML/CSS</span>
                </div>
                <a
                  href="https://github.com/alper-savas/quiz-app"
                  className={classes.projectImg}
                >
                  <img src={redo} alt="icon" className={classes.redo} />
                </a>
              </div>
            </div>
            <a
              href="https://quiz-quizzy.netlify.app/"
              className={classes.projectImg}
            >
              <img src={quizzy} alt="Quizzy quiz app" />
            </a>
          </div>
          <div className={classes.project}>
            <a
              href="https://radiantradio.netlify.app/"
              className={classes.projectImg}
            >
              <img src={radiant} alt="Radiant radio app" />
            </a>
            <div className={classes.projectDesc}>
              <h3>Radiant Web Radio</h3>
              <p>
                This is a Web Radio made by React. It contains different
                information about various artists, selected vinyl and events
                along with live broadcasting feature.
              </p>
              <div className={classes.stack}>
                <div>
                  <span className={classes.stackItem}>React</span>
                  <span className={classes.stackItem}>JavaScript</span>
                  <span className={classes.stackItem}>HTML/CSS</span>
                </div>
                <a
                  href="https://github.com/alper-savas/web-radio"
                  className={classes.projectImg}
                >
                  <img src={redo} alt="icon" className={classes.redo} />
                </a>
              </div>
            </div>
          </div>
          <div className={classes.clone}>
            <div className={classes.cloneProject}>
              <a
                href="https://alper-savas.github.io/apple-clone/"
                className={classes.cloneImg}
              >
                <img src={apple} alt="Apple clone" />
              </a>
              <div className={classes.cloneDesc}>
                <h3>Apple Clone</h3>
                <p>
                  This is a UI clone of Apple's Website. All core features has
                  been implemented along with JavaScript code to allow small
                  amount of user interaction.
                </p>
                <div className={classes.stack}>
                  <div>
                    <span className={classes.stackItem}>JavaScript</span>
                    <span className={classes.stackItem}>HTML/CSS</span>
                  </div>
                  <a
                    href="https://github.com/alper-savas/apple-clone"
                    className={classes.projectImg}
                  >
                    <img src={redo} alt="icon" className={classes.redo} />
                  </a>
                </div>
              </div>
            </div>
            <div className={classes.cloneProject}>
              <a
                href="https://alper-savas.github.io/airbnb-clone/"
                className={classes.cloneImg}
              >
                <img src={airbnb} alt="Airbnb clone" />
              </a>
              <div className={classes.cloneDesc}>
                <h3>Airbnb Clone</h3>
                <p>
                  This is a UI clone of Airbnb's Website. All core features has
                  been implemented along with JavaScript code to allow small
                  amount of user interaction.
                </p>
                <div className={classes.stack}>
                  <div>
                    <span className={classes.stackItem}>JavaScript</span>
                    <span className={classes.stackItem}>HTML/CSS</span>
                  </div>
                  <a
                    href="https://github.com/alper-savas/airbnb-clone"
                    className={classes.projectImg}
                  >
                    <img src={redo} alt="icon" className={classes.redo} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

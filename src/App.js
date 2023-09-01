import "./App.css";
import { Fragment } from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Alper Savas</title>
      </Helmet>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;

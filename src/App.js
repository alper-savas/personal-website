import "./App.css";
import { Fragment } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <Fragment>
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

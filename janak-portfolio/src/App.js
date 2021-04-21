import React from "react";
import "./App.css";
import Banner from "./components/Banner.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Skills from "./components/Skills.jsx"

function App() {
  return (
    <div>
      <Banner />
      <About />
      <Skills/>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

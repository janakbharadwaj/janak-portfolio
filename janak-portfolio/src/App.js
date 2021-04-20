import React from "react";
import "./App.css";
import Banner from "./components/Banner.jsx";
import About from "./components/About.jsx";
import Prices from "./components/Prices.jsx";
import Contact from "./components/Contact.jsx";
import Skills from "./components/Skills.jsx"

function App() {
  return (
    <div>
      <Banner />
      <About />
      <Skills/>
      <Prices />
      <Contact />
    </div>
  );
}

export default App;

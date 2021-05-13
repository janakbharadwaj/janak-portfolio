import React from "react";
import "./App.css";
//import Banner from "./components/Banner.jsx";
//import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Skills from "./components/Skills.jsx";
//import Pic from "./components/Pic.jsx"
import Header from "./components/Header";
import ContactFormNew from "./components/ContactFormNew";
import NewHead from "./components/NewHead";


function App() {
  return (
    <div>
      <NewHead/>
      {/* <Header/> */}
      <Contact />
      {/* <Banner /> */}
      {/* <Pic/> */}
      {/* <About /> */}
      <Skills/>
      <Projects />
      <ContactFormNew/>
    </div>
  );
}

export default App;

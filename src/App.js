import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./pages/About";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark main-container" : "light main-container"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Hero />
      <About />
      <Education/>
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

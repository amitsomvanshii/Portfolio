import React from "react";

function Navbar({ darkMode, setDarkMode }) {

  return (
    <nav className="navbar">
      
      {/* Left Title */}
      <h2 className="logo">Portfolio</h2>

      {/* Center Links */}
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      {/* Resume Button */}
      <a href="/Amit_Singh_Data_Analyst_Resume.pdf" download className="resume-btn">
        Resume
      </a>

    </nav>
  );
}

export default Navbar;

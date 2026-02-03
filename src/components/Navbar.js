import React from "react";

function Navbar({ darkMode, setDarkMode }) {

  return (
    <nav className="navbar">
      
      {/* Left Title */}
      <h2 className="logo">Portfolio</h2>

      {/* Center Links */}
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* ✅ Theme Selector */}
      {/* ✅ Theme Toggle Switch */}
<div className="toggle-container">
  <span className="mode-text">Light</span>

  <label className="switch">
    <input
  type="checkbox"
  checked={darkMode}
  onChange={() => setDarkMode(!darkMode)}
/>

    <span className="slider"></span>
  </label>

  <span className="mode-text">Dark</span>
</div>



      {/* Resume Button */}
      <a href="/resume.pdf" download className="resume-btn">
        Resume
      </a>

    </nav>
  );
}

export default Navbar;

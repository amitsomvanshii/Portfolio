import React from "react";
import SocialLinks from "./SocialLinks";
import abcde from "../assets/abcde.jpg";

function Hero() {
  return (
    <div className="hero-section">
      {/* Left Content */}
      <div className="hero-text">
        <h1>
          Hi, I'm <span className="highlight-name">Amit Singh</span>
        </h1>

        <p className="hero-subtitle">
          MCA Student | Aspiring Data Analyst & Machine Learning Enthusiast
        </p>

        <p className="hero-description">
          I build data-driven projects, create dashboards, and apply machine
          learning to solve real-world business problems.
        </p>

        {/* KPI Stats */}
        <div className="stats-box">
          <div className="stat-card">
            <h3>3</h3>
            <p><li><a href="#projects">Projects</a></li></p>
          </div>
        </div>

        {/* Social Links */}
        <SocialLinks />
      </div>

      {/* Right Profile */}
      <div className="hero-image">
        <img src={abcde} alt="abcde" />
      </div>
    </div>
  );
}

export default Hero;

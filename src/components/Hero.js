import React from "react";
import SocialLinks from "./SocialLinks";
import profile from "../assets/profile.jpg";

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
            <h3>5+</h3>
            <p>Projects</p>
          </div>

          <div className="stat-card">
            <h3>Python</h3>
            <p>Analytics</p>
          </div>

          <div className="stat-card">
            <h3>SQL</h3>
            <p>Insights</p>
          </div>
        </div>

        {/* Social Links */}
        <SocialLinks />
      </div>

      {/* Right Profile */}
      <div className="hero-image">
        <img src={profile} alt="profile" />
      </div>
    </div>
  );
}

export default Hero;

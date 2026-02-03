import React from "react";
import SocialLinks from "./SocialLinks";
import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <div className="hero-section">

      {/* Left Text */}
      <div className="hero-text">
        <h1>Hello, I'm Amit Singh</h1>

        <p>
          MCA student passionate about Data Science,
          building real-world projects and improving skills.
        </p>

        {/* Social Links */}
        <SocialLinks />
      </div>

      {/* Right Circular Photo */}
      <div className="hero-image">
        <img src={profile} alt="profile" />
      </div>

    </div>
  );
}

export default Hero;

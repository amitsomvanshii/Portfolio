import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="social-icons">
      <a href="https://github.com/amitsomvanshii" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>

      <a href="https://instagram.com/" target="_blank" rel="noreferrer">
        <FaInstagram />
      </a>

      <a href="https://www.linkedin.com/in/amitsingh6387/" target="_blank" rel="noreferrer">
        <FaLinkedin />
      </a>

      <a href="https://x.com/amitsomvanshii" target="_blank" rel="noreferrer">
        <FaTwitter />
      </a>
    </div>
  );
}

export default SocialLinks;

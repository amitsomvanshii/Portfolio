import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>

      <div className="contact-box">

        {/* Email */}
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />

          <div>
            <h4>Email</h4>
            <a href="mailto:amitsomvanshi63@gmail.com" className="contact-link">
              amitsomvanshi63@gmail.com
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />

          <div>
            <h4>Phone</h4>
            <p className="contact-link">+91-6387037528</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;

import React from "react";

function Education() {
  return (
    <section id="education" className="section">
      <h2>Education</h2>

      {/* MCA */}
      <div className="card">
        <h3>Master of Computer Applications (MCA)</h3>
        <p>
          <b>University:</b>{" "}
          <a
            href="https://www.pcu.edu.in/"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            Pimpri Chinchwad University, Pune
          </a>
        </p>
        <p>
          <b>Status:</b> Pursuing
        </p>
        <p>
          <b>Current CGPA:</b> 8.42
        </p>
      </div>

      <br />

      {/* BCA */}
      <div className="card">
        <h3>Bachelor of Computer Applications (BCA)</h3>
        <p>
          <b>College:</b>{" "}
          <a
            href="https://www.aimt.edu.in/"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            Ambalika Institute of Higher Education, Lucknow
          </a>
        </p>
        <p>
          <b>Affiliated to:</b> University of Lucknow
        </p>
        <p>
          <b>Percentage:</b> 71%
        </p>
      </div>

      <br />

      {/* Class 12 */}
      <div className="card">
        <h3>Senior Secondary (Class 12)</h3>
        <p>
          <b>School:</b> SBPIC, Bargawan, Bilgram, Hardoi
        </p>
        <p>
          <b>Board:</b> UP Board
        </p>
        <p>
          <b>Percentage:</b> 79%
        </p>
      </div>

      <br />

      {/* Class 10 */}
      <div className="card">
        <h3>Secondary (Class 10)</h3>
        <p>
          <b>School:</b>{" "}
          <a
            href="https://www.stjameshardoi.org/"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            St. James Sr. Sec School, Hardoi
          </a>
        </p>
        <p>
          <b>CGPA:</b> 7.2
        </p>
      </div>
    </section>
  );
}

export default Education;

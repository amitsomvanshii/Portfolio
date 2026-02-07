import React from "react";
import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaGithub,
  FaChartBar,
  FaFileExcel,
} from "react-icons/fa";

function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      {/* ✅ Core Technical Skills */}
      <h3 className="skill-title">Core Technical Skills</h3>

      <div className="icon-skill-grid">
        <div className="icon-skill-card">
          <FaPython />
          <p>Python</p>
        </div>

        <div className="icon-skill-card">
          <FaDatabase />
          <p>SQL / MySQL</p>
        </div>

        <div className="icon-skill-card">
          <FaChartBar />
          <p>Power BI</p>
        </div>

        <div className="icon-skill-card">
          <FaFileExcel />
          <p>MS Excel</p>
        </div>

        <div className="icon-skill-card">
          <FaGithub />
          <p>Git & GitHub</p>
        </div>

        <div className="icon-skill-card">
          <FaHtml5 />
          <p>HTML</p>
        </div>

        <div className="icon-skill-card">
          <FaCss3Alt />
          <p>CSS</p>
        </div>
      </div>

      {/* ✅ Additional Skills */}
      <h3 className="skill-title">Additional Competencies</h3>

      <div className="skills-clean-list">
        
        {/* Data Analytics */}
        <div className="skill-block">
          <h4>Data Analytics</h4>
          <ul>
            <li>Data Cleaning & Preprocessing</li>
            <li>Exploratory Data Analysis (EDA)</li>
            <li>Data Visualization & Reporting</li>
            <li>Statistical Analysis</li>
          </ul>
        </div>

        {/* Tools & Platforms */}
        <div className="skill-block">
          <h4>Tools & Platforms</h4>
          <ul>
            <li>VS Code</li>
            <li>Jupyter Notebook</li>
          </ul>
        </div>

        {/* Professional Skills */}
        <div className="skill-block">
          <h4>Professional Skills</h4>
          <ul>
            <li>Analytical Thinking</li>
            <li>Problem Solving</li>
            <li>Effective Communication</li>
            <li>Team Collaboration</li>
            <li>Presentation & Storytelling</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;

import React from "react";
import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaDatabase,
  FaGithub,
  FaChartBar,
  FaFileExcel,
} from "react-icons/fa";

function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      {/* ✅ ICON SKILLS (Main Attractive Part) */}
      <h3 className="skill-title">Core Technical Skills</h3>
      <div className="icon-skill-grid">
  {/* ✅ Row 1 (6 Skills) */}
  <div className="icon-skill-card"><FaPython /><p>Python</p></div>
  <div className="icon-skill-card"><FaJava /><p>Java</p></div>
  <div className="icon-skill-card"><FaHtml5 /><p>HTML</p></div>
  <div className="icon-skill-card"><FaCss3Alt /><p>CSS</p></div>
  <div className="icon-skill-card"><FaJsSquare /><p>JavaScript</p></div>
  <div className="icon-skill-card"><FaReact /><p>React</p></div>

  {/* ✅ Row 2 (3 Skills) */}
  <div className="icon-skill-card"><FaBootstrap /><p>Bootstrap</p></div>
  <div className="icon-skill-card"><FaDatabase /><p>SQL/MySQL</p></div>
  <div className="icon-skill-card"><FaGithub /><p>GitHub</p></div>

  {/* ✅ Row 3 (2 Skills) */}
  <div className="icon-skill-card"><FaChartBar /><p>Power BI</p></div>
  <div className="icon-skill-card"><FaFileExcel /><p>Excel</p></div>
</div>


      {/* ✅ OTHER SKILLS (No Icons but Stylish List) */}
      <h3 className="skill-title">Additional Skills</h3>

      <div className="skills-clean-list">
        <div className="skill-block">
          <h4>Analytical Abilities</h4>
          <ul>
            <li>Data Cleaning</li>
            <li>Exploratory Data Analysis (EDA)</li>
            <li>Insight Generation</li>
            <li>Descriptive Statistics</li>
          </ul>
        </div>

        <div className="skill-block">
          <h4>Tools</h4>
          <ul>
            <li>Postman</li>
            <li>VS Code</li>
          </ul>
        </div>

        <div className="skill-block">
          <h4>Core Concepts</h4>
          <ul>
            <li>REST APIs</li>
          </ul>
        </div>

        <div className="skill-block">
          <h4>AI & Automation</h4>
          <ul>
            <li>ChatGPT</li>
            <li>Prompt Engineering</li>
          </ul>
        </div>

        <div className="skill-block">
          <h4>Software Testing</h4>
          <ul>
            <li>Agile & Scrum</li>
            <li>Manual Testing</li>
            <li>Functional Testing</li>
            <li>Regression Testing</li>
            <li>SDLC / STLC</li>
          </ul>
        </div>

        <div className="skill-block">
          <h4>Soft Skills</h4>
          <ul>
            <li>Problem Solving</li>
            <li>Attention to Detail</li>
            <li>Communication Skills</li>
            <li>Team Collaboration</li>
            <li>Presentation Skills</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;

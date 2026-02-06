import React from "react";

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="project-cards">

        <div className="card">
          <h3>World University Ranking</h3>
          <p>Statistical Analysis | Python</p>
        </div>

        <div className="card">
          <h3>Orion Hardware </h3>
          <p> Interactive Tableau Sales Dashboard  | MYSQL, Tableau</p>
        </div>

        <div className="card">
          <h3>Smart Cart</h3>
          <p>
           <b> Product Suggestion Web Application | Python, ML, HTML, CSS :</b>{" "}
           <a
           href="https://smartcart-lloj.onrender.com"
           target="_blank"
           rel="noreferrer"
           className="contact-link"
            >
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}

export default Projects;

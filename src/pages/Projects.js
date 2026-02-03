import React from "react";

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="project-cards">

        <div className="card">
          <h3>Customer Churn Analysis</h3>
          <p>Predicting churn using Machine Learning with accuracy & F1-score.</p>
        </div>

        <div className="card">
          <h3>Online Examination System</h3>
          <p>Java + MySQL based exam portal with admin and student modules.</p>
        </div>

        <div className="card">
          <h3>Ecommerce Recommendation System</h3>
          <p>Product recommendation engine using user behavior and filtering.</p>
        </div>

      </div>
    </section>
  );
}

export default Projects;

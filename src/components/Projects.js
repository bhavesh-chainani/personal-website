import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <h1>Projects</h1>
      <div className="project">
        <h2>LangChain Analysis</h2>
        <p>A project demonstrating the use of LangChain...</p>
        <a href="https://github.com/bhavesh-chainani/langchain_analysis">View Project</a>
      </div>
      <div className="project">
        <h2>Topic Modelling</h2>
        <p>Topic modeling analysis for English, Russian, and Italian texts...</p>
        <a href="https://github.com/bhavesh-chainani/topic_modelling">View Project</a>
      </div>
    </section>
  );
}

export default Projects;

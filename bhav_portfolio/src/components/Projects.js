import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <p className="section_text_p1">Browse Through My</p>
      <h1 className="title_2">Projects</h1>
      <div className="details_container">
        <div className="details_container color_container">
          <div className="subdetail_container">
            <img src="./assets/langchain_photo.png" className="project_img" alt="LangChain Analysis" />
            <h2 className="projects_subtitle">LangChain Analysis</h2>
            <p>A project demonstrating language model capabilities for various tasks.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

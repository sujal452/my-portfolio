import React from 'react';
import { projects } from '../data';
import '../styles/projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section" data-aos="fade-up">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            data-aos="zoom-in-up"
            data-aos-delay={index * 200}
          >
            <img src={project.image} alt={project.title} className="project-img" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.live} target="_blank" rel="noreferrer">🔗 Live</a>
              <a href={project.github} target="_blank" rel="noreferrer">💻 Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

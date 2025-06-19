import React from 'react';
import { projects } from '../data';
import '../styles/projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title" data-aos="fade-up">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            data-aos-delay={index * 150}
            data-aos-duration="10000"
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

import React from 'react';
import { upcomingProjects } from '../data';
import '../styles/projects.css';

const UpcomingProjects = () => {
  return (
    <section id="upcoming" className="projects-section">
      <h2 className="section-title" data-aos="fade-up">Upcoming Projects</h2>

      <div className="projects-grid">
        {upcomingProjects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span className="status-tag">{project.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingProjects;

import React from 'react';
import { skills } from '../data';
import '../styles/skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

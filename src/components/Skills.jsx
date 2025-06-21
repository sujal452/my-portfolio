import React from 'react';
import { skills, learning } from '../data';
import '../styles/skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>

      <h3 className="learning-title">🚀 Currently Learning</h3>
<div className="learning-wrapper">
  {learning.map((item, index) => (
    <div className="learning-card" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
      <div className="learning-icon-container">
        <img src={item.icon} alt={item.name} className="learning-icon" />
      </div>
      <p className="learning-name">{item.name}</p>
    </div>
  ))}
</div>

    </section>
  );
};

export default Skills;

import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: "loading..." },
    { name: 'React', level: "loading..." },
    { name: 'Java', level: 78 },
    { name: 'C', level: 75 },
  ];

  return (
    <section className="skills">
      <div className="skills-container">
        <div className="section-header">
          <h2>Skills & Technologies</h2>
          <p className="section-subtitle">Technical expertise and proficiencies</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <h3>{skill.name}</h3>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Chips Alternative Design */}
        <div className="skills-chips">
          <h3>Certifications</h3>
          <div className="chips-container">
            <span className="chip">Cloud Computing</span>
            <span className="chip">BlockChain</span>
            <span className="chip">Internet Of Things</span>
            <span className="chip">Web Development</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

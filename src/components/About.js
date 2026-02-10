import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="section-header">
          <h2>About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        <div className="about-content">
          <div className="about-card">
            <h3>My Journey</h3>
            <p>
              Dedicated computer science student with a strong interest in web development .
              Actively learning React and modern web technologies to build user-friendly digital experiences .
              Focused on continuous learning and improving technical skills through practice .
            </p>
          </div>

          <div className="about-interests">
            <h3>My Interests</h3>
            <div className="interests-grid">
              <div className="interest-item">
                <span className="interest-icon">🌐</span>
                <p>Web Development</p>
              </div>
              <div className="interest-item">
                <span className="interest-icon">🔗</span>
                <p>Blockchain</p>
              </div>
              <div className="interest-item">
                <span className="interest-icon">💰</span>
                <p>Crypto</p>
              </div>
              <div className="interest-item">
                <span className="interest-icon">🚀</span>
                <p>Innovation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

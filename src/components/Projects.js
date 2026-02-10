import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Intra College Project Expo 2024',
      description: 'VCET Explorer – First Position\nCreated an interactive virtual walkthrough of my college campus using Unreal Engine 5 and Blender for 3D modeling and environment design.',
      github: '/VCET EXPLORERS.pptx',
    },
    {
      id: 2,
      title: 'Intra College Project Expo 2025',
      description: 'SIM-DRIVE KIT – Second Position: Built a custom driving simulation kit (steering wheel and pedals) using Arduino, functioning as a standard HID device.',
      github: '/SIM-DRIVE KIT A Custom-Built Steering and Pedal Control System for Realistic Car Simulation.pdf',
    },
    {
      id: 3,
      title: 'Automated Classroom Attendance System Using Deep Learning',
      description: 'Developed an automated attendance system using facial recognition and deep learning techniques.',
      github: '/Classroom-Attendance-System.pptx',
    },
  ];

  return (
    <section className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2>My Projects</h2>
          <p className="section-subtitle">Showcasing my work and experience</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-footer">
                <a href={project.github} className="github-btn" target="_blank" rel="noopener noreferrer">
                  Explore →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

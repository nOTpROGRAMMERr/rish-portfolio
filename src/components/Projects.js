import React, { useState, useEffect } from "react";
import projectsData from "../data/projects.json";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="project-cards">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.techStack.join(", ")}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

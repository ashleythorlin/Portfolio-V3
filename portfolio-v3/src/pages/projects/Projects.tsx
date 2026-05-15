import React from 'react';
import '../pages.css';
import './projects.css';
import { ProjectData } from '../../types';
import GridItem from '../../components/grid-item/GridItem';
import projectsData from '../../data/projects.json';

const Projects = () => {
  return (
    <div className="container" id="projects-container">
      <div className="content" id="projects-content">
        <div className="section" id="projects-grid">
          <h1>projects</h1>
          <div className="grid">
            {(projectsData as ProjectData[]).map((item) => (
              <GridItem key={item.name} name={item.name} desc={item.desc} link={item.link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

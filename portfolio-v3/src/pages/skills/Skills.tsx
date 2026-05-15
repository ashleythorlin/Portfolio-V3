import React from 'react';
import '../pages.css';
import './skills.css';
import { SkillData } from '../../types';
import GridItem from '../../components/grid-item/GridItem';
import skillsData from '../../data/skills.json';

const Skills = () => {
  return (
    <div className="container" id="skills-container">
      <div className="content" id="skills-content">
        <div className="section" id="skill-grid">
          <h1>languages</h1>
          <div className="grid">
            {(skillsData.languages as SkillData[]).map((item) => (
              <GridItem key={item.name} name={item.name} desc={item.desc} />
            ))}
          </div>
        </div>
        <div className="section" id="tech-grid" style={{ marginLeft: 'auto' }}>
          <h1>technologies</h1>
          <div className="grid">
            {(skillsData.technologies as SkillData[]).map((item) => (
              <GridItem key={item.name} name={item.name} desc={item.desc} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

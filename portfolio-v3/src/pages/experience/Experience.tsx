import React from 'react';
import '../pages.css';
import './experience.css';
import { ExperienceEntry } from '../../types';
import experienceData from '../../data/experience.json';

const Experience = () => {
  return (
    <div className="container" id="experience-container">
      <div className="content" id="experience-content">
        <div className="section" id="experience-section">
          <h1>experience</h1>
          <div className="experience-list">
            {(experienceData as ExperienceEntry[]).map((entry) => (
              <ExperienceCard key={entry.company + entry.dates} entry={entry} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceCard = ({ entry }: { entry: ExperienceEntry }) => (
  <div className="experience-card">
    <div className="experience-card-header">
      <div>
        <h2 className="experience-role">{entry.role}</h2>
        <h3 className="experience-company">{entry.company}</h3>
      </div>
      <div className="experience-meta">
        <span>{entry.dates}</span>
        <span>{entry.location}</span>
      </div>
    </div>
    <ul className="experience-bullets">
      {entry.bullets.map((bullet, i) => (
        <li key={i}>{bullet}</li>
      ))}
    </ul>
  </div>
);

export default Experience;

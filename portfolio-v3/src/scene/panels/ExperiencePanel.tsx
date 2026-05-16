import React from 'react';
import SectionPanel from '../SectionPanel';
import { ExperienceEntry } from '../../types';
import experienceData from '../../data/experience.json';
import './panel.css';

interface ExperiencePanelProps {
  position: [number, number, number];
  rotation?: [number, number, number];
}

function ExperiencePanel({ position, rotation }: ExperiencePanelProps) {
  return (
    <SectionPanel position={position} rotation={rotation} sectionIndex={2} height={3.6}>
      <div className="panel-section">
        <h1 className="panel-heading">experience</h1>
        <div className="panel-experience-list">
          {(experienceData as ExperienceEntry[]).map((entry) => (
            <ExperienceCard key={entry.company + entry.dates} entry={entry} />
          ))}
        </div>
      </div>
    </SectionPanel>
  );
}

function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  return (
    <div className="panel-exp-card">
      <div className="panel-exp-header">
        <div>
          <p className="panel-exp-role">{entry.role}</p>
          <p className="panel-exp-company">{entry.company}</p>
        </div>
        <div className="panel-exp-meta">
          <span>{entry.dates}</span>
          <span>{entry.location}</span>
        </div>
      </div>
      <ul className="panel-exp-bullets">
        {entry.bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExperiencePanel;

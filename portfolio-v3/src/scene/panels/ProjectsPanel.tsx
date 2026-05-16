import React, { useState } from 'react';
import SectionPanel from '../SectionPanel';
import { ProjectData } from '../../types';
import projectsData from '../../data/projects.json';
import './panel.css';

interface ProjectsPanelProps {
  position: [number, number, number];
  rotation?: [number, number, number];
}

function ProjectsPanel({ position, rotation }: ProjectsPanelProps) {
  return (
    <SectionPanel position={position} rotation={rotation} sectionIndex={4} width={5.2} height={3.6}>
      <div className="panel-section">
        <h1 className="panel-heading">projects</h1>
        <div className="panel-grid">
          {(projectsData as ProjectData[]).map((item) => (
            <PanelGridItem key={item.name} name={item.name} desc={item.desc} link={item.link} />
          ))}
        </div>
      </div>
    </SectionPanel>
  );
}

function PanelGridItem({ name, desc, link }: ProjectData) {
  const [showTip, setShowTip] = useState(false);

  const inner = (
    <>
      <span className="panel-grid-name">{name}</span>
      {showTip && (
        <div className="panel-grid-tooltip">
          {desc.map((d, i) => <p key={i}>{d}</p>)}
        </div>
      )}
    </>
  );

  if (link) {
    return (
      <a
        className="panel-grid-item"
        href={link}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={name}
        onMouseEnter={() => setShowTip(true)}
        onMouseLeave={() => setShowTip(false)}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      className="panel-grid-item"
      aria-label={name}
      onMouseEnter={() => setShowTip(true)}
      onMouseLeave={() => setShowTip(false)}
      onClick={() => setShowTip((v) => !v)}
    >
      {inner}
    </button>
  );
}

export default ProjectsPanel;

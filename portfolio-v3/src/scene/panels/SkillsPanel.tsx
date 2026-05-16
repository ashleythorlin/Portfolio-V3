import React from 'react';
import SectionPanel from '../SectionPanel';
import './panel.css';

interface SkillsPanelProps {
  position: [number, number, number];
  rotation?: [number, number, number];
}

function SkillsPanel({ position, rotation }: SkillsPanelProps) {
  return (
    <SectionPanel position={position} rotation={rotation} sectionIndex={3} width={3.2} height={1.4}>
      <div className="panel-section panel-skills-label">
        <h1 className="panel-heading">skills</h1>
        <p className="panel-body panel-skills-hint">hover nodes to explore</p>
      </div>
    </SectionPanel>
  );
}

export default SkillsPanel;

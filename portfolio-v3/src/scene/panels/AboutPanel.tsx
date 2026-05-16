import React from 'react';
import SectionPanel from '../SectionPanel';
import homeData from '../../data/home.json';
import './panel.css';

interface AboutPanelProps {
  position: [number, number, number];
  rotation?: [number, number, number];
}

function AboutPanel({ position, rotation }: AboutPanelProps) {
  return (
    <SectionPanel position={position} rotation={rotation} sectionIndex={1}>
      <div className="panel-section">
        <h1 className="panel-heading">about me</h1>
        <p className="panel-body">{homeData.about}</p>
      </div>
    </SectionPanel>
  );
}

export default AboutPanel;

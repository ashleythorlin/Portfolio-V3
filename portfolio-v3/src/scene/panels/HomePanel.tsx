import React from 'react';
import SectionPanel from '../SectionPanel';
import homeData from '../../data/home.json';
import './panel.css';

interface HomePanelProps {
  position: [number, number, number];
  rotation?: [number, number, number];
}

function HomePanel({ position, rotation }: HomePanelProps) {
  return (
    <SectionPanel position={position} rotation={rotation} sectionIndex={0} width={5.2} height={3.4}>
      <div className="panel-home">
        <h1 className="panel-name">{homeData.name}</h1>
        <h2 className="panel-title">{homeData.title}</h2>
      </div>
    </SectionPanel>
  );
}

export default HomePanel;

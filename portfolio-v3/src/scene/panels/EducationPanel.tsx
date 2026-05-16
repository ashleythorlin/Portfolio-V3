import React from 'react';
import SectionPanel from '../SectionPanel';
import { EducationData } from '../../types';
import educationData from '../../data/education.json';
import './panel.css';

interface EducationPanelProps {
  position: [number, number, number];
  rotation?: [number, number, number];
}

const data = educationData as EducationData;

function EducationPanel({ position, rotation }: EducationPanelProps) {
  return (
    <SectionPanel position={position} rotation={rotation} sectionIndex={5} width={5.2} height={3.6}>
      <div className="panel-section panel-edu">
        <div className="panel-edu-left">
          <div>
            <h1 className="panel-heading">education</h1>
            {data.schools.map((school) => (
              <div key={school.name} className="panel-edu-school">
                <p className="panel-edu-school-name">{school.name}</p>
                <p className="panel-edu-degree">{school.degree}</p>
                <p className="panel-edu-dates">
                  {school.dates}{school.gpa ? ` · GPA: ${school.gpa}` : ''}
                </p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="panel-subheading">coursework</h2>
            <div className="panel-tags">
              {data.coursework.map((course) => (
                <span key={course} className="panel-tag">{course}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="panel-edu-right">
          <h2 className="panel-subheading">organizations</h2>
          {data.organizations.map((org) => (
            <div key={org.name} className="panel-org">
              <p className="panel-org-name">{org.name}</p>
              <p className="panel-org-role">{org.role}</p>
              <p className="panel-edu-dates">{org.dates}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionPanel>
  );
}

export default EducationPanel;

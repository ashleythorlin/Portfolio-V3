import React from 'react';
import '../pages.css';
import './education.css';
import { EducationData } from '../../types';
import educationData from '../../data/education.json';

const data = educationData as EducationData;

const Education = () => {
  return (
    <div className="container" id="education-container">
      <div className="content" id="education-content">
        <div className="section" id="education-left">
          <div className="sub-section" id="education-school">
            <h1>education</h1>
            {data.schools.map((school) => (
              <div key={school.name} className="education-school-entry">
                <h2 className="education-school-name">{school.name}</h2>
                <p className="education-degree">{school.degree}</p>
                <p className="education-dates">
                  {school.dates}{school.gpa ? ` · GPA: ${school.gpa}` : ''}
                </p>
              </div>
            ))}
          </div>
          <div className="sub-section" id="coursework-section">
            <h1>coursework</h1>
            <div className="coursework-tags">
              {data.coursework.map((course) => (
                <span key={course} className="coursework-tag">{course}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="section" id="orgs" style={{ marginLeft: 'auto' }}>
          <h1>organizations &amp; clubs</h1>
          <div className="orgs-list">
            {data.organizations.map((org) => (
              <div key={org.name} className="org-entry">
                <h2 className="org-name">{org.name}</h2>
                <p className="org-role">{org.role}</p>
                <p className="org-dates">{org.dates}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

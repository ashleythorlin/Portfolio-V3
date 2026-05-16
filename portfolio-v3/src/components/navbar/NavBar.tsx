import React from 'react';
import './navbar.css';
import { useSceneStore, SCHEME_COLORS } from '../../store/sceneStore';

const NAV_ITEMS = [
  {
    id: 'homeNav',
    label: 'home',
    href: '#home-container',
    icon: (
      <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4,12 l8,-8 l8,8" />
        <path d="M7,9 v10 h10 v-10" />
        <path d="M10,19 v-6 h4 v6" />
      </svg>
    ),
  },
  {
    id: 'aboutNav',
    label: 'about me',
    href: '#about-me-container',
    icon: (
      <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4,4 v12 h16 v -12 z" />
        <path d="M17,13 v-6 h-10 v6 z" />
        <path d="M12,16 v4" />
        <path d="M6,20 h12" />
      </svg>
    ),
  },
  {
    id: 'experienceNav',
    label: 'experience',
    href: '#experience-container',
    icon: (
      <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8,8 v-4 h8 v4" />
        <path d="M4,18 v-10 h16 v10z" />
        <path d="M20,12 h-16" />
        <path d="M10,12 v2 h4 v-2" />
      </svg>
    ),
  },
  {
    id: 'skillsNav',
    label: 'skills',
    href: '#skills-container',
    icon: (
      <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3.4,11.9l8.8,4.4l8.4-4.4" />
        <path d="M3.4,16.2l8.8,4.5l8.4-4.5" />
        <path d="M3.7,7.8l8.6-4.5l8,4.5l-8,4.3L3.7,7.8z" />
      </svg>
    ),
  },
  {
    id: 'projectsNav',
    label: 'projects',
    href: '#projects-container',
    icon: (
      <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7,8 l-4,4 l4,4" />
        <path d="M17,8  l4,4 l-4,4" />
        <path d="M10,19 l4,-14" />
      </svg>
    ),
  },
  {
    id: 'educationNav',
    label: 'education',
    href: '#education-container',
    icon: (
      <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4,7.5 l8,-3.5 l8,3.5 l-8,3.5 l-8,-3.5" />
        <path d="M8,9 l-1.5,8 c0,0,0,2,6,2 c0,0,4,0,6,-2 l-1.5,-8" />
      </svg>
    ),
  },
  {
    id: 'contactNav',
    label: 'contact',
    href: '#contact-container',
    icon: (
      <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.7,4.8 h10.7 c0.3,0,0.6,0.2,0.7,0.5 l2.8,7.3 c0,0.1,0,0.2,0,0.3 v5.6 c0,0.4-0.4,0.8-0.8,0.8 H3.8 C3.4,19.3,3,19,3,18.5 v-5.6 c0-0.1,0-0.2,0.1-0.3 L6,5.3C6.1,5,6.4,4.8,6.7,4.8z" />
        <path d="M3.4,12.9 H8 l1.6,2.8 h4.9 l1.5-2.8 h4.6" />
      </svg>
    ),
  },
];

function NavBar() {
  const activeSection = useSceneStore((s) => s.activeSection);
  const setActiveSection = useSceneStore((s) => s.setActiveSection);

  return (
    <nav
      className="nav-pill"
      role="navigation"
      aria-label="Main navigation"
      style={{ '--nav-glow': SCHEME_COLORS[activeSection] } as React.CSSProperties}
    >
      {NAV_ITEMS.map((item, i) => {
        const isActive = activeSection === i;
        const accentColor = SCHEME_COLORS[i];

        const content = (
          <>
            <span
              className="nav-item-icon"
              style={{ color: isActive ? accentColor : undefined }}
            >
              {item.icon}
            </span>
            <span className={`nav-item-label${isActive ? ' visible' : ''}`}>
              {item.label}
            </span>
          </>
        );

        const handleClick = () => {
          setActiveSection(i);
          document
            .getElementById(`section-${i}`)
            ?.scrollIntoView({ behavior: 'smooth' });
        };

        return (
          <button
            key={item.id}
            className={`nav-item${isActive ? ' active' : ''}`}
            aria-label={item.label}
            aria-current={isActive ? 'page' : undefined}
            onClick={handleClick}
            style={isActive ? { '--nav-accent': accentColor } as React.CSSProperties : undefined}
          >
            {content}
          </button>
        );
      })}
    </nav>
  );
}

export default NavBar;

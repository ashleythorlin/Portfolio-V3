import React from 'react';
import SectionPanel from '../SectionPanel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import './panel.css';

interface ContactPanelProps {
  position: [number, number, number];
  rotation?: [number, number, number];
}

function ContactPanel({ position, rotation }: ContactPanelProps) {
  return (
    <SectionPanel position={position} rotation={rotation} sectionIndex={6} width={4.8} height={3.0}>
      <div className="panel-section panel-contact">
        <h1 className="panel-heading">contact me</h1>
        <div className="panel-contact-links">
          <ContactLink href="https://www.github.com/ashleythorlin" icon={faGithub} label="GitHub" />
          <ContactLink href="https://www.linkedin.com/in/ashley-thorlin" icon={faLinkedin} label="LinkedIn" />
          <ContactLink href="mailto:ashleythorlin@gmail.com" icon={faEnvelope} label="Email" />
        </div>
        <a
          className="panel-resume-link"
          href="https://docs.google.com/document/d/1yI4ytS8uV8nLnPgFpWSELHJcQo1wFoPgBaNN06RFNZk/edit?usp=sharing"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Resume (opens in new tab)"
        >
          <span>resume</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </div>
    </SectionPanel>
  );
}

function ContactLink({ href, icon, label }: { href: string; icon: IconProp; label: string }) {
  return (
    <a
      className="panel-contact-link"
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
    >
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}

export default ContactPanel;

import React, { useEffect, useRef, useState } from 'react';
import './scroll-layout.css';
import { useSceneStore } from './store/sceneStore';
import { ExperienceEntry, SkillData, ProjectData, EducationData } from './types';
import homeData from './data/home.json';
import experienceData from './data/experience.json';
import skillsData from './data/skills.json';
import projectsData from './data/projects.json';
import educationData from './data/education.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SECTION_COUNT = 7;

function useInViewAnimation(ref: React.RefObject<HTMLElement | null>) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

// ── Section wrapper ───────────────────────────────────────────────────────────

interface SectionProps {
  index: number;
  children: React.ReactNode;
  className?: string;
}

function Section({ index, children, className = '' }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const setActiveSection = useSceneStore((s) => s.setActiveSection);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActiveSection(index); },
      { threshold: 0.5, rootMargin: '0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index, setActiveSection]);

  return (
    <section
      ref={ref}
      id={`section-${index}`}
      data-index={index}
      className={`snap-section ${className}`}
    >
      {children}
    </section>
  );
}

// ── Glass card ────────────────────────────────────────────────────────────────

function GlassCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInViewAnimation(ref as React.RefObject<HTMLElement>);
  return (
    <div ref={ref} className={`glass-card ${visible ? 'in-view' : ''} ${className}`}>
      {children}
    </div>
  );
}

// ── Sections ──────────────────────────────────────────────────────────────────

function HomeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInViewAnimation(ref as React.RefObject<HTMLElement>);
  return (
    <Section index={0} className="section-home">
      <div ref={ref} className={`home-content ${visible ? 'in-view' : ''}`}>
        <p className="home-eyebrow">portfolio</p>
        <h1 className="home-name">{homeData.name}</h1>
        <p className="home-title">{homeData.title}</p>
        <div className="home-line" />
      </div>
    </Section>
  );
}

function AboutSection() {
  return (
    <Section index={1} className="section-about">
      <GlassCard className="about-card">
        <h2 className="card-heading">about me</h2>
        <p className="card-body">{homeData.about}</p>
      </GlassCard>
    </Section>
  );
}

function ExperienceSection() {
  return (
    <Section index={2} className="section-experience">
      <GlassCard className="experience-card">
        <h2 className="card-heading">experience</h2>
        <div className="exp-list">
          {(experienceData as ExperienceEntry[]).map((entry) => (
            <div key={entry.company + entry.dates} className="exp-entry">
              <div className="exp-header">
                <div>
                  <p className="exp-role">{entry.role}</p>
                  <p className="exp-company">{entry.company}</p>
                </div>
                <div className="exp-meta">
                  <span>{entry.dates}</span>
                  <span>{entry.location}</span>
                </div>
              </div>
              <ul className="exp-bullets">
                {entry.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </GlassCard>
    </Section>
  );
}

function SkillsSection() {
  const languages = skillsData.languages as SkillData[];
  const technologies = skillsData.technologies as SkillData[];
  return (
    <Section index={3} className="section-skills">
      <GlassCard className="skills-card">
        <div className="skills-col">
          <h2 className="card-heading">languages</h2>
          <div className="skill-grid">
            {languages.map((s) => (
              <SkillChip key={s.name} name={s.name} desc={s.desc} />
            ))}
          </div>
        </div>
        <div className="skills-divider" />
        <div className="skills-col">
          <h2 className="card-heading">technologies</h2>
          <div className="skill-grid">
            {technologies.map((s) => (
              <SkillChip key={s.name} name={s.name} desc={s.desc} />
            ))}
          </div>
        </div>
      </GlassCard>
    </Section>
  );
}

function SkillChip({ name, desc }: SkillData) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`skill-chip ${open ? 'open' : ''}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span className="skill-chip-name">{name}</span>
      {open && desc.length > 0 && !desc[0].startsWith('TODO') && (
        <div className="skill-chip-tip">
          {desc.map((d, i) => <p key={i}>{d}</p>)}
        </div>
      )}
    </div>
  );
}

function ProjectsSection() {
  return (
    <Section index={4} className="section-projects">
      <GlassCard className="projects-card">
        <h2 className="card-heading">projects</h2>
        <div className="project-grid">
          {(projectsData as ProjectData[]).map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </GlassCard>
    </Section>
  );
}

function ProjectCard({ project }: { project: ProjectData }) {
  const [open, setOpen] = useState(false);
  const inner = (
    <>
      <p className="project-name">{project.name}</p>
      {open && (
        <div className="project-tip">
          {project.desc.map((d, i) => <p key={i}>{d}</p>)}
        </div>
      )}
    </>
  );

  if (project.link) {
    return (
      <a
        className="project-card"
        href={project.link}
        target="_blank"
        rel="noreferrer noopener"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {inner}
      </a>
    );
  }
  return (
    <button
      className="project-card"
      onClick={() => setOpen((v) => !v)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {inner}
    </button>
  );
}

function EducationSection() {
  const data = educationData as EducationData;
  return (
    <Section index={5} className="section-education">
      <GlassCard className="education-card">
        <div className="edu-col">
          <h2 className="card-heading">education</h2>
          {data.schools.map((s) => (
            <div key={s.name} className="edu-school">
              <p className="edu-school-name">{s.name}</p>
              <p className="edu-degree">{s.degree}</p>
              <p className="edu-dates">{s.dates}{s.gpa ? ` · GPA ${s.gpa}` : ''}</p>
            </div>
          ))}
          <h3 className="edu-subheading">coursework</h3>
          <div className="edu-tags">
            {data.coursework.map((c) => <span key={c} className="edu-tag">{c}</span>)}
          </div>
        </div>
        <div className="skills-divider" />
        <div className="edu-col">
          <h2 className="card-heading">organizations</h2>
          {data.organizations.map((o) => (
            <div key={o.name} className="edu-org">
              <p className="edu-org-name">{o.name}</p>
              <p className="edu-org-role">{o.role}</p>
              <p className="edu-dates">{o.dates}</p>
            </div>
          ))}
        </div>
      </GlassCard>
    </Section>
  );
}

function ContactSection() {
  const RESUME = 'https://docs.google.com/document/d/1yI4ytS8uV8nLnPgFpWSELHJcQo1wFoPgBaNN06RFNZk/edit?usp=sharing';
  return (
    <Section index={6} className="section-contact">
      <GlassCard className="contact-card">
        <h2 className="card-heading">contact me</h2>
        <div className="contact-links">
          <a className="contact-link" href="https://www.github.com/ashleythorlin" target="_blank" rel="noreferrer noopener" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a className="contact-link" href="https://www.linkedin.com/in/ashley-thorlin" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a className="contact-link" href="mailto:ashleythorlin@gmail.com" aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
        <a className="resume-btn" href={RESUME} target="_blank" rel="noreferrer noopener">
          resume <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
        </a>
      </GlassCard>
    </Section>
  );
}

// ── Root ──────────────────────────────────────────────────────────────────────

function ScrollLayout() {
  return (
    <div className="scroll-container">
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
}

export default ScrollLayout;

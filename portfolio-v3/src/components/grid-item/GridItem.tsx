import { default as React, useState } from 'react';
import './GridItem.css';

interface GridItemProps {
  name: string;
  desc: string[];
  link?: string;
}

const GridItem = ({ name, desc, link }: GridItemProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipId = `tooltip-${name.replace(/\s+/g, '-')}`;

  const handleClick = () => {
    if (link) window.open(link, '_blank', 'noreferrer');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (link) handleClick();
      else setShowTooltip(v => !v);
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <div
        className={`grid-item${link ? ' grid-item--linked' : ''}`}
        onMouseOver={() => setShowTooltip(true)}
        onMouseOut={() => setShowTooltip(false)}
        onClick={link ? handleClick : undefined}
        role={link ? 'link' : 'button'}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        aria-describedby={tooltipId}
      >
        <div className="grid-item-title">{name}</div>
      </div>
      <div style={{ position: 'absolute' }}>
        <div
          className="info-tooltip"
          id={tooltipId}
          role="tooltip"
          aria-hidden={!showTooltip}
          style={{ display: showTooltip ? 'inline-block' : 'none' }}
          onMouseOver={() => setShowTooltip(true)}
          onMouseOut={() => setShowTooltip(false)}
        >
          <ul>
            {desc.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GridItem;

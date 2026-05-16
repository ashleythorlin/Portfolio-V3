import React, { useState, MutableRefObject } from 'react';
import { Float, Html } from '@react-three/drei';
import { usePanelPortal } from './PanelContext';

interface SkillNodeProps {
  position: [number, number, number];
  name: string;
  desc: string[];
  color: string;
  radius?: number;
}

function SkillNode({ position, name, desc, color, radius = 0.09 }: SkillNodeProps) {
  const [hovered, setHovered] = useState(false);
  const portalRef = usePanelPortal() as MutableRefObject<HTMLElement>;

  return (
    <Float speed={1.5} rotationIntensity={0} floatIntensity={0.35} floatingRange={[-0.05, 0.05]}>
      <group position={position}>
        <mesh
          onPointerEnter={(e) => { e.stopPropagation(); setHovered(true); }}
          onPointerLeave={() => setHovered(false)}
        >
          <sphereGeometry args={[radius, 16, 16]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={hovered ? 1.4 : 0.7}
            roughness={0.2}
            metalness={0.1}
          />
        </mesh>

        {/* Label — always shown */}
        {portalRef.current && (
          <Html
            center
            portal={portalRef}
            position={[0, radius + 0.12, 0]}
            style={{ pointerEvents: 'none' }}
          >
            <span style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '9px',
              fontWeight: 600,
              color: hovered ? '#f7f7f7' : 'rgba(247,247,247,0.7)',
              whiteSpace: 'nowrap',
              letterSpacing: '0.04em',
              textShadow: '0 1px 4px rgba(0,0,0,0.9)',
              transition: 'color 0.2s',
            }}>
              {name}
            </span>
          </Html>
        )}

        {/* Tooltip on hover */}
        {hovered && desc.length > 0 && !desc[0].startsWith('TODO') && portalRef.current && (
          <Html
            center
            portal={portalRef}
            position={[0, radius + 0.28, 0]}
          >
            <div style={{
              background: 'rgba(15, 10, 20, 0.95)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '8px',
              padding: '0.4rem 0.6rem',
              width: '140px',
              fontSize: '0.62rem',
              color: 'rgba(247,247,247,0.85)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.6)',
              pointerEvents: 'none',
              fontFamily: "'Poppins', sans-serif",
            }}>
              {desc.map((d, i) => <p key={i} style={{ margin: '0.1rem 0' }}>{d}</p>)}
            </div>
          </Html>
        )}
      </group>
    </Float>
  );
}

export default SkillNode;

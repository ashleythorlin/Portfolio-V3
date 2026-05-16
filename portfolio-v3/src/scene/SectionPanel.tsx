import React, { useMemo, useRef, MutableRefObject } from 'react';
import { Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useSceneStore, SCHEME_COLORS } from '../store/sceneStore';
import { usePanelPortal } from './PanelContext';

interface SectionPanelProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  width?: number;
  height?: number;
  sectionIndex: number;
  children: React.ReactNode;
}

// Shared across all panels — never recreated
const glassMaterial = new THREE.MeshStandardMaterial({
  color: new THREE.Color('#0f0a14'),
  transparent: true,
  opacity: 0.6,
  roughness: 0.15,
  metalness: 0.05,
  side: THREE.DoubleSide,
});

const BOB_AMPLITUDE = 0.055;
const BOB_SPEED = 0.28;

function SectionPanel({
  position,
  rotation = [0, 0, 0],
  width = 4.8,
  height = 3.2,
  sectionIndex,
  children,
}: SectionPanelProps) {
  const activeSection = useSceneStore((s) => s.activeSection);
  const portalRef = usePanelPortal() as MutableRefObject<HTMLElement>;
  const groupRef = useRef<THREE.Group>(null);
  const activeSectionRef = useRef(activeSection);
  activeSectionRef.current = activeSection;

  const phase = (sectionIndex * Math.PI * 2) / 7;

  const glowMat = useMemo(() => new THREE.MeshBasicMaterial({
    color: new THREE.Color(SCHEME_COLORS[sectionIndex] ?? '#a2c96e'),
    transparent: true,
    opacity: 0.04,
    side: THREE.DoubleSide,
  }), [sectionIndex]);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    const isActive = activeSectionRef.current === sectionIndex;

    // Pulsing glow border when active
    glowMat.opacity = isActive
      ? 0.12 + Math.sin(t * 1.8) * 0.05
      : 0.04;

    // Gentle float
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(t * BOB_SPEED + phase) * BOB_AMPLITUDE;
    }
  });

  return (
    <group ref={groupRef} position={position} rotation={rotation}>
      <mesh material={glassMaterial}>
        <planeGeometry args={[width, height]} />
      </mesh>

      {/* Accent glow border */}
      <mesh position={[0, 0, -0.005]} scale={[1.015, 1.015, 1]} material={glowMat}>
        <planeGeometry args={[width, height]} />
      </mesh>

      {/* No occlude — raycast occlusion toggles visibility every frame and causes flicker */}
      <Html
        transform
        portal={portalRef}
        style={{ width: '520px' }}
      >
        <div className="panel-content">{children}</div>
      </Html>
    </group>
  );
}

export default SectionPanel;

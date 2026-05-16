import React, { useRef } from 'react';
import { Line } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useSceneStore, SCHEME_COLORS } from '../store/sceneStore';
import SkillNode from './SkillNode';
import skillsData from '../data/skills.json';
import { SkillData } from '../types';

interface SkillsConstellationProps {
  center: [number, number, number];
  rotation: [number, number, number];
}

function fibonacciSphere(count: number, radius: number): [number, number, number][] {
  if (count <= 0) return [];
  const points: [number, number, number][] = [];
  const phi = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / Math.max(count - 1, 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = phi * i;
    points.push([Math.cos(theta) * r * radius, y * radius, Math.sin(theta) * r * radius]);
  }
  return points;
}

function SkillsConstellation({ center, rotation }: SkillsConstellationProps) {
  const activeSection = useSceneStore((s) => s.activeSection);
  const groupRef = useRef<THREE.Group>(null);
  const baseRotY = rotation[1];

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = baseRotY + clock.elapsedTime * 0.07;
    }
  });

  // Only render when near the skills section (3) for performance
  if (activeSection < 2 || activeSection > 4) return null;

  const langColor = SCHEME_COLORS[3];
  const techColor = SCHEME_COLORS[4];

  const languages = skillsData.languages as SkillData[];
  const technologies = skillsData.technologies as SkillData[];

  const langSpread = 0.7;
  const techSpread = 0.65;

  // Cluster offsets within the group
  const langOffset: [number, number, number] = [-1.4, 0, 0];
  const techOffset: [number, number, number] = [1.1, 0, 0];

  const langPositions = fibonacciSphere(languages.length, langSpread);
  const techPositions = fibonacciSphere(technologies.length, techSpread);

  const lineColor = 'rgba(255,255,255,0.12)';

  return (
    <group ref={groupRef} position={center} rotation={rotation}>
      {/* Language hub */}
      <mesh position={langOffset}>
        <sphereGeometry args={[0.12, 20, 20]} />
        <meshStandardMaterial color={langColor} emissive={langColor} emissiveIntensity={1.2} />
      </mesh>

      {/* Language nodes + lines */}
      {languages.map((lang, i) => {
        const np = langPositions[i];
        if (!np) return null;
        const nodePos: [number, number, number] = [
          langOffset[0] + np[0],
          langOffset[1] + np[1],
          langOffset[2] + np[2],
        ];
        return (
          <React.Fragment key={lang.name}>
            <Line
              points={[langOffset, nodePos]}
              color={lineColor}
              lineWidth={0.8}
            />
            <SkillNode position={nodePos} name={lang.name} desc={lang.desc} color={langColor} />
          </React.Fragment>
        );
      })}

      {/* Technology hub */}
      <mesh position={techOffset}>
        <sphereGeometry args={[0.12, 20, 20]} />
        <meshStandardMaterial color={techColor} emissive={techColor} emissiveIntensity={1.2} />
      </mesh>

      {/* Technology nodes + lines */}
      {technologies.map((tech, i) => {
        const np = techPositions[i];
        if (!np) return null;
        const nodePos: [number, number, number] = [
          techOffset[0] + np[0],
          techOffset[1] + np[1],
          techOffset[2] + np[2],
        ];
        return (
          <React.Fragment key={tech.name}>
            <Line
              points={[techOffset, nodePos]}
              color={lineColor}
              lineWidth={0.8}
            />
            <SkillNode position={nodePos} name={tech.name} desc={tech.desc} color={techColor} />
          </React.Fragment>
        );
      })}
    </group>
  );
}

export default SkillsConstellation;

import React, { useMemo } from 'react';
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';
import { useSceneStore } from '../store/sceneStore';

type GradientConfig = {
  color1: string;
  color2: string;
  color3: string;
};

// type:'plane' is flat and full-screen with no blob.
// cPolarAngle must stay at exactly 90 and cAzimuthAngle at 180 — any deviation
// angles the plane away from the camera and leaves bare corners.
// Color and uStrength/uSpeed drive all the visual variety.
const GRADIENT_CONFIGS: GradientConfig[] = [
  { color1: '#364b1b', color2: '#091a03', color3: '#364b1b' }, // home
  { color1: '#22523c', color2: '#021a0f', color3: '#22523c' }, // about
  { color1: '#214b57', color2: '#020e1a', color3: '#214b57' }, // experience
  { color1: '#2a4364', color2: '#020b14', color3: '#2a4364' }, // skills
  { color1: '#25255e', color2: '#030216', color3: '#25255e' }, // projects
  { color1: '#502b6b', color2: '#0f031b', color3: '#502b6b' }, // education
  { color1: '#632a49', color2: '#16030e', color3: '#632a49' }, // contact
];

function GradientBackground() {
  const activeSection = useSceneStore((s) => s.activeSection);
  const cfg = useMemo(() => GRADIENT_CONFIGS[activeSection] ?? GRADIENT_CONFIGS[0], [activeSection]);

  return (
    <ShaderGradientCanvas
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#000'
      }}
      pixelDensity={2}
      pointerEvents="none"
    >
      <ShaderGradient
        key={activeSection}
        control="props"
        type="waterPlane"
        animate="on"
        uSpeed={0.2}
        uStrength={1.5}
        color1={cfg.color1}
        color2={cfg.color2}
        color3={cfg.color3}
        cAzimuthAngle={180.0}
        cPolarAngle={90.0}
        cDistance={2.0}
        grain="on"
        brightness={2.0}
        enableTransition={true}
      />
    </ShaderGradientCanvas>
  );
}

export default GradientBackground;

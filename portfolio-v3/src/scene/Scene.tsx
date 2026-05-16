import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import CameraRig from './CameraRig';
import { PanelPortalProvider } from './PanelContext';
import HomePanel from './panels/HomePanel';
import AboutPanel from './panels/AboutPanel';
import ExperiencePanel from './panels/ExperiencePanel';
import SkillsPanel from './panels/SkillsPanel';
import ProjectsPanel from './panels/ProjectsPanel';
import EducationPanel from './panels/EducationPanel';
import ContactPanel from './panels/ContactPanel';
import SkillsConstellation from './SkillsConstellation';

const PI = Math.PI;

function SceneContent() {
  return (
    <PanelPortalProvider>
      <CameraRig />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 5]} intensity={1.5} />
      <pointLight position={[-10, -5, -10]} intensity={0.4} color="#6bc99f" />

      <HomePanel position={[0, 0, 0]} />
      <AboutPanel position={[6, 0.5, -3]} rotation={[0, -PI / 6, 0]} />
      <ExperiencePanel position={[2, 2.5, -8]} rotation={[0, PI / 18, 0]} />

      {/* Skills: small label panel + separate constellation */}
      <SkillsPanel position={[-5, 2.4, -13]} rotation={[0, PI / 7.2, 0]} />
      <SkillsConstellation
        center={[-5, 0.8, -13]}
        rotation={[0, PI / 7.2, 0]}
      />

      <ProjectsPanel position={[0, -1.5, -18]} rotation={[0, -PI / 36, 0]} />
      <EducationPanel position={[5, 2, -23]} rotation={[0, -PI / 9, 0]} />
      <ContactPanel position={[0, 0, -28]} />

      <EffectComposer>
        <Bloom
          luminanceThreshold={0.25}
          luminanceSmoothing={0.85}
          intensity={0.7}
          mipmapBlur
        />
      </EffectComposer>
    </PanelPortalProvider>
  );
}

function Scene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ fov: 60, near: 0.1, far: 200, position: [0, 0, 7] }}
      gl={{ antialias: true, alpha: true }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1,
        background: 'transparent',
      }}
    >
      <Suspense fallback={null}>
        <SceneContent />
      </Suspense>
    </Canvas>
  );
}

export default Scene;

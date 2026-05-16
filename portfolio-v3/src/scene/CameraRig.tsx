import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useSceneStore } from '../store/sceneStore';

// Camera position and lookAt target for each section (7 total)
const CAMERA_TARGETS = [
  { pos: [0, 0, 7],         look: [0, 0, 0] },
  { pos: [2.5, 0.5, 2.5],   look: [6, 0.5, -3] },
  { pos: [0.8, 2.5, -1.3],  look: [2, 2.5, -8] },
  { pos: [-8, 1, -9.8],     look: [-5, 1, -13] },
  { pos: [0, -1.5, -11.4],  look: [0, -1.5, -18] },
  { pos: [2.6, 2, -16.6],   look: [5, 2, -23] },
  { pos: [0, 0, -21],       look: [0, 0, -28] },
] as const;

const LERP_FACTOR = 0.045;
const ARRIVAL_THRESHOLD = 0.015;

function CameraRig() {
  const { camera } = useThree();
  const activeSection = useSceneStore((s) => s.activeSection);

  const targetPos = useRef(new THREE.Vector3(0, 0, 7));
  const targetLook = useRef(new THREE.Vector3(0, 0, 0));
  const currentLook = useRef(new THREE.Vector3(0, 0, 0));

  useEffect(() => {
    const t = CAMERA_TARGETS[activeSection];
    if (!t) return;
    targetPos.current.set(t.pos[0], t.pos[1], t.pos[2]);
    targetLook.current.set(t.look[0], t.look[1], t.look[2]);
  }, [activeSection]);

  useFrame(() => {
    camera.position.lerp(targetPos.current, LERP_FACTOR);
    currentLook.current.lerp(targetLook.current, LERP_FACTOR);
    camera.lookAt(currentLook.current);
  });

  return null;
}

export default CameraRig;

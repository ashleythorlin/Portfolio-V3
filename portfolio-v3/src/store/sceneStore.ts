import { create } from 'zustand';

interface SceneStore {
  activeSection: number;
  setActiveSection: (i: number) => void;
}

export const useSceneStore = create<SceneStore>((set) => ({
  activeSection: 0,
  setActiveSection: (i) => set({ activeSection: i }),
}));

export const SECTION_NAMES = [
  'home',
  'about',
  'experience',
  'skills',
  'projects',
  'education',
  'contact',
] as const;

export const SCHEME_COLORS = [
  '#a2c96e',
  '#6bc99f',
  '#4f889b',
  '#4f6b89',
  '#4f4d76',
  '#6d4976',
  '#54385b',
] as const;

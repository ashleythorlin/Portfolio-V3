
export type ActiveNav = {
  id: string;
  index: number;
};

export type SkillData = {
  name: string;
  desc: string[];
};

export type ProjectData = {
  name: string;
  desc: string[];
  link?: string;
};

export type ExperienceEntry = {
  company: string;
  role: string;
  dates: string;
  location: string;
  bullets: string[];
};

export type EducationSchool = {
  name: string;
  degree: string;
  dates: string;
  gpa?: string;
};

export type EducationData = {
  schools: EducationSchool[];
  coursework: string[];
  organizations: { name: string; role: string; dates: string }[];
};

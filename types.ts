
export interface NavLink {
  label: string;
  path: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Article {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export enum ConfigStep {
  MODEL = 'MODEL',
  LOFT = 'LOFT',
  SHAFT = 'SHAFT',
  GRIP = 'GRIP',
  FINISH = 'FINISH'
}

export interface ClubConfig {
  model: string;
  loft: string;
  shaft: string;
  grip: string;
  finish: string;
}

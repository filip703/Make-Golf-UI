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

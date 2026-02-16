
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

// --- CMS STRUCTURE TYPES ---

export type ArticleCategory = 'ENGINEERING' | 'R&D' | 'OPINION' | 'TOUR REPORT';

export interface ContentBlock {
  type: 'paragraph' | 'h2' | 'h3' | 'image' | 'quote' | 'list';
  content: string;
  alt?: string; // For images
}

export interface Author {
  name: string;
  role: string;
  image: string;
}

export interface Article {
  id: string | number;
  slug: string; // The URL part (e.g., "physics-of-porosity")
  title: string;
  excerpt: string;
  date: string;
  category: ArticleCategory;
  image: string;
  author: Author;
  readTime: string;
  content: ContentBlock[]; // Array of content blocks to simulate rich text
}

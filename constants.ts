import { NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Clubs', path: '/clubs' },
  { label: 'AI Fitting', path: '/ai-fitting' },
  { label: 'For Fitters', path: '/fitters' },
  { label: 'Technology', path: '/technology' },
];

export const MOCK_STATS = [
  { label: 'Dispersion Reduction', value: '42%' },
  { label: 'Ball Speed Gain', value: '+3.2mph' },
  { label: 'Manufacturing Time', value: '48hrs' },
];

export const CLUB_MODELS = [
  { id: 'mg-1-blade', name: 'MG-1 Blade', desc: 'Pure feedback. Tour profile.' },
  { id: 'mg-1-cavity', name: 'MG-1 Cavity', desc: 'Forgiveness meets precision.' },
  { id: 'mg-x-hollow', name: 'MG-X Hollow', desc: 'Max distance. Soft feel.' },
];

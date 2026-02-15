
import { NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Clubs', path: '/clubs' },
  { label: 'Engine', path: '/engine' }, // Changed from AI Fitting
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

export const CLUB_CATEGORIES = [
  {
    id: 'blade',
    name: 'Blade',
    desc: 'Workable. Precise. For the purist.',
    image: 'https://images.unsplash.com/photo-1610427847926-22467d5e4620?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 'cavity',
    name: 'Cavity',
    desc: 'Balanced. Stable. For the competitor.',
    image: 'https://images.unsplash.com/photo-1596727284451-b0db0a10c73e?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 'hollow',
    name: 'Hollow',
    desc: 'Fast. Forgiving. For the distance seeker.',
    image: 'https://images.unsplash.com/photo-1628256382834-367073b64436?q=80&w=2070&auto=format&fit=crop'
  }
];

import { Layers, Monitor, Palette, Smartphone, Tv } from 'lucide-react';

export const REELS_VIDEOS = [
  { id: 'se3', title: 'Reels 03', driveId: '161H-v1lE7qLY0xEcfKlB896XwRvQ3SsH' },
  { id: 'se4', title: 'Reels 04', driveId: '1tm_r4ENLdisq2ptZCrr1Ioyl7Rgh9O6S' },
  { id: 'se5', title: 'Reels 05', driveId: '18X5gyTexszSYrLRNrIFiY5e9_6qVRAhh' },
];

export const FULLSCREEN_VIDEOS = [
  { id: 'se1', title: 'Reels 01', driveId: '1BYrQgXSZtPVEQ2iJpEQF6-CBnsaHsBnp' },
  { id: 'se2', title: 'Reels 02', driveId: '1gWyXa6d6Gvqn8XACLKdJztdvz2eutqdn' },
];

export const VIDEO_CATEGORIES = [
  { 
    id: 'v1', 
    title: 'REELS (9:16)', 
    icon: Smartphone, 
    desc: 'Conteúdo vertical otimizado para mobile e redes sociais.', 
    aspect: 'reels',
    items: REELS_VIDEOS 
  },
  { 
    id: 'v2', 
    title: 'FULLSCREEN (16:9)', 
    icon: Tv, 
    desc: 'Produções em alta resolução, curta-metragens e comerciais.', 
    aspect: 'fullscreen',
    items: FULLSCREEN_VIDEOS 
  },
];

export const DESIGN_CATEGORIES = [
  { id: 'd1', title: 'BRANDING', icon: Palette, desc: 'Identidades visuais e logotipos.', items: [] },
  { id: 'd2', title: 'THUMBNAILS', icon: Layers, desc: 'Artes focadas em alta retenção.', items: [] },
  { id: 'd3', title: 'BANNERS', icon: Monitor, desc: 'Composições para web e eventos.', items: [] },
];


import { Layers, Monitor, Palette, Smartphone, Tv } from 'lucide-react';

export const REELS_VIDEOS = [
  { id: 're3', title: 'REELS 03', driveId: '18X5gyTexszSYrLRNrIFiY5e9_6qVRAhh' },
  { id: 're1', title: 'REELS 01', driveId: '161H-v1lE7qLY0xEcfKlB896XwRvQ3SsH' },
  { id: 're2', title: 'REELS 02', driveId: '1tm_r4ENLdisq2ptZCrr1Ioyl7Rgh9O6S' },
];

export const FULLSCREEN_VIDEOS = [
  { id: 'fs1', title: 'VÍDEO 01', driveId: '1BYrQgXSZtPVEQ2iJpEQF6-CBnsaHsBnp' },
  { id: 'fs2', title: 'VÍDEO 02', driveId: '1gWyXa6d6Gvqn8XACLKdJztdvz2eutqdn' },
];

export const VIDEO_CATEGORIES = [
  { 
    id: 'v1', 
    title: 'REELS (9:16)', 
    icon: Smartphone, 
    desc: 'CONTEÚDO VERTICAL OTIMIZADO PARA MOBILE E REDES SOCIAIS.', 
    aspect: 'reels',
    items: REELS_VIDEOS 
  },
  { 
    id: 'v2', 
    title: 'FULLSCREEN (16:9)', 
    icon: Tv, 
    desc: 'PRODUÇÕES EM ALTA RESOLUÇÃO E COMERCIAIS.', 
    aspect: 'fullscreen',
    items: FULLSCREEN_VIDEOS 
  },
];

export const DESIGN_CATEGORIES = [
  { id: 'd1', title: 'BRANDING', icon: Palette, desc: 'IDENTIDADES VISUAIS E LOGOTIPOS.', items: [] },
  { id: 'd2', title: 'THUMBNAILS', icon: Layers, desc: 'ARTES FOCADAS EM ALTA RETENÇÃO.', items: [] },
  { id: 'd3', title: 'BANNERS', icon: Monitor, desc: 'COMPOSIÇÕES PARA WEB E EVENTOS.', items: [] },
];

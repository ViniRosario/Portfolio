
import { Layers, Monitor, Palette } from 'lucide-react';

export const SHORT_EDITS_VIDEOS = [
  { id: 'se1', title: 'Short Edit 01', driveId: '1BYrQgXSZtPVEQ2iJpEQF6-CBnsaHsBnp' },
  { id: 'se2', title: 'Short Edit 02', driveId: '1gWyXa6d6Gvqn8XACLKdJztdvz2eutqdn' },
  { id: 'se3', title: 'Short Edit 03', driveId: '161H-v1lE7qLY0xEcfKlB896XwRvQ3SsH' },
  { id: 'se4', title: 'Short Edit 04', driveId: '1tm_r4ENLdisq2ptZCrr1Ioyl7Rgh9O6S' },
  { id: 'se5', title: 'Short Edit 05', driveId: '18X5gyTexszSYrLRNrIFiY5e9_6qVRAhh' },
];

export const VIDEO_CATEGORIES = [
  { 
    id: 'v1', 
    title: 'SHORT EDITS', 
    icon: Layers, 
    desc: 'Vídeos dinâmicos para redes sociais.', 
    items: SHORT_EDITS_VIDEOS 
  },
  { 
    id: 'v2', 
    title: 'LONG FORM', 
    icon: Monitor, 
    desc: 'Edições completas e narrativas.', 
    items: [] 
  },
];

export const DESIGN_CATEGORIES = [
  { id: 'd1', title: 'BRANDING', icon: Palette, desc: 'Identidades visuais e logotipos.', items: [] },
  { id: 'd2', title: 'THUMBNAILS', icon: Layers, desc: 'Artes focadas em alta retenção.', items: [] },
  { id: 'd3', title: 'BANNERS', icon: Monitor, desc: 'Composições para web e eventos.', items: [] },
];


import { Layers, Monitor, Palette, Smartphone, Tv } from 'lucide-react';

export const REELS_VIDEOS = [
  { id: 're1', title: 'REELS 01', driveId: '18X5gyTexszSYrLRNrIFiY5e9_6qVRAhh' },
  { id: 're2', title: 'REELS 02', driveId: '161H-v1lE7qLY0xEcfKlB896XwRvQ3SsH' },
  { id: 're3', title: 'REELS 03', driveId: '1tm_r4ENLdisq2ptZCrr1Ioyl7Rgh9O6S' },
];

export const FULLSCREEN_VIDEOS = [
  { id: 'fs1', title: 'VÍDEO 01', driveId: '1DerTsieiiaL86gOp5laB8C_U0vX34wxd' },
  { id: 'fs2', title: 'VÍDEO 02', driveId: '1apLNhfWEHJ6XqQM0Jx3dt7nxAstW-X4F' },
  { id: 'fs3', title: 'VÍDEO 03', driveId: '1PNp7k-CYlWQPlKShPpqg-GgHBoW2cWNg' },
];

export const BRANDING_ITEMS = [
  { id: 'br1', title: 'BRANDING 01', driveId: '1RliV-KjoGbxjiC0EjXQT3-KEeusR93gg' },
  { id: 'br2', title: 'BRANDING 02', driveId: '1LGK3IVS1FIOZpEE-zgwDR9S4UcZAxRrR' },
  { id: 'br3', title: 'BRANDING 03', driveId: '1cqlYpQsJzK-qqmBjeCZs1OCYsn8hvBzI' },
  { id: 'br4', title: 'BRANDING 04', driveId: '1ZcKgWDJWPHKhmb-2txzmGeFEJpq_ejMH' },
  { id: 'br5', title: 'BRANDING 05', driveId: '1HzZgO3xljAimihhfpQSScl6XVu4aSDW0' },
  { id: 'br6', title: 'BRANDING 06', driveId: '1ZftN2FlcyItp3FIjT0AX6Un_GkChkeg0' },
  { id: 'br7', title: 'BRANDING 07', driveId: '1rSY6ZwrS48drvmcIoorzm7Pk193J0XNb' },
  { id: 'br8', title: 'BRANDING 08', driveId: '1n4QKU6pCNFJ0etmkAz2Wb0pmbOzyJPgn' },
  { id: 'br9', title: 'BRANDING 09', driveId: '1OnSPsYXTycwTfVrNx8fVTdjRCHxtLUai' },
];

export const BANNERS_ITEMS = [
  { id: 'ba1', title: 'BANNER 01', driveId: '14R0tVS73EJvq2sHc5lQhh4Uig2FGr1tp' },
  { id: 'ba2', title: 'BANNER 02', driveId: '1XADyBUlsNYd3MUSajjiJDHlRPAydnwa_' },
  { id: 'ba3', title: 'BANNER 03', driveId: '11hBlV41zeVB4ht_q0xaOj1xmDQhK1h3f' },
  { id: 'ba4', title: 'BANNER 04', driveId: '1gGKFNUvN5Xp3hoz9OOMcXQBVsUAoYC5u' },
  { id: 'ba5', title: 'BANNER 05', driveId: '1vPjGkCxXilO1ZZV5jGqAHNDdGLCo5XPg' },
  { id: 'ba6', title: 'BANNER 06', driveId: '1MNYBFlOoF1CtZBhAtd74uNAj-TCB2uSk' },
  { id: 'ba7', title: 'BANNER 07', driveId: '1M7uPFxztG6hqtdTNAHCx-oh1M3ErMfDp' },
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
  { 
    id: 'd1', 
    title: 'BRANDING', 
    icon: Palette, 
    desc: 'IDENTIDADES VISUAIS E LOGOTIPOS.', 
    aspect: 'square',
    items: BRANDING_ITEMS 
  },
  { 
    id: 'd2', 
    title: 'THUMBNAILS', 
    icon: Layers, 
    desc: 'ARTES FOCADAS EM ALTA RETENÇÃO.', 
    aspect: 'fullscreen',
    items: [] 
  },
  { 
    id: 'd3', 
    title: 'BANNERS', 
    icon: Monitor, 
    desc: 'COMPOSIÇÕES PARA WEB E EVENTOS.', 
    aspect: 'fullscreen',
    items: BANNERS_ITEMS 
  },
];


export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = [
  {
    "id": "vini-profile",
    "description": "Foto de perfil oficial do Vini Rosário",
    "imageUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&h=800&auto=format&fit=crop",
    "imageHint": "man profile"
  },
  {
    "id": "capcut-icon",
    "description": "Logo oficial do CapCut",
    "imageUrl": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=200&h=200&auto=format&fit=crop",
    "imageHint": "video app icon"
  },
  {
    "id": "archive-video",
    "description": "Capa da galeria de vídeos",
    "imageUrl": "https://picsum.photos/seed/v_archive/1280/720",
    "imageHint": "cinematic neon"
  },
  {
    "id": "archive-design",
    "description": "Capa da galeria de design",
    "imageUrl": "https://picsum.photos/seed/d_archive/1280/720",
    "imageHint": "graphic design collage"
  }
];

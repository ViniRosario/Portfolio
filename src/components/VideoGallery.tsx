"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { ArrowLeft, Film, Palette, Layers, Monitor, Play, Search } from 'lucide-react';

const VIDEO_CATEGORIES = [
  { id: 'v1', title: 'SHORT EDITS', icon: Layers, desc: 'Vídeos dinâmicos para redes sociais.' },
  { id: 'v2', title: 'LONG FORM', icon: Monitor, desc: 'Edições completas e narrativas.' },
];

const DESIGN_CATEGORIES = [
  { id: 'd1', title: 'BRANDING', icon: Palette, desc: 'Identidades visuais e logotipos.' },
  { id: 'd2', title: 'THUMBNAILS', icon: Layers, desc: 'Artes focadas em alta retenção.' },
  { id: 'd3', title: 'BANNERS', icon: Monitor, desc: 'Composições para web e eventos.' },
];

export function VideoGallery() {
  const [exploding, setExploding] = useState<string | null>(null);
  const [view, setView] = useState<'main' | 'video' | 'design'>('main');
  
  const videoImage = PlaceHolderImages.find(img => img.id === 'archive-video');
  const designImage = PlaceHolderImages.find(img => img.id === 'archive-design');

  const handlePortalClick = (type: 'video' | 'design') => {
    setExploding(type);
    setTimeout(() => {
      setView(type);
      setExploding(null);
      const el = document.getElementById('gallery');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 600);
  };

  const handleBack = () => {
    setView('main');
  };

  if (view !== 'main') {
    const categories = view === 'video' ? VIDEO_CATEGORIES : DESIGN_CATEGORIES;
    const title = view === 'video' ? 'GALERIA DE VIDEOS' : 'GALERIA DE DESIGN';

    return (
      <section id="gallery" className="relative py-32 px-6 bg-[#120812] min-h-screen overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <button 
            onClick={handleBack}
            className="flex items-center gap-2 text-primary font-mono text-sm mb-12 hover:translate-x-[-8px] transition-transform group"
          >
            <ArrowLeft size={16} /> [ VOLTAR_AO_INÍCIO ]
          </button>

          <div className="mb-20">
            <h2 className="font-headline text-5xl md:text-7xl font-black text-white uppercase tracking-tighter glitch-text" data-text={title}>
              {title}
            </h2>
            <div className="h-1 w-24 bg-primary mt-4" />
          </div>

          <div className={cn(
            "grid grid-cols-1 gap-8",
            categories.length === 2 ? "md:grid-cols-2 max-w-4xl mx-auto" : "md:grid-cols-3"
          )}>
            {categories.map((cat) => (
              <div 
                key={cat.id}
                className="group relative bg-white/[0.03] border-2 border-white/10 p-8 hover:border-primary transition-all cursor-pointer overflow-hidden aspect-square flex flex-col justify-end"
              >
                <div className="absolute top-6 left-6 opacity-20 group-hover:opacity-100 group-hover:text-primary transition-all">
                  <cat.icon size={48} />
                </div>
                
                <div className="relative z-10">
                  <h3 className="font-headline text-2xl font-bold text-white mb-2 group-hover:text-primary">{cat.title}</h3>
                  <p className="font-body text-sm text-white/40 uppercase tracking-widest leading-tight">{cat.desc}</p>
                </div>

                <div className="absolute -right-4 -bottom-4 text-white opacity-[0.02] font-black text-9xl select-none group-hover:opacity-[0.05] transition-opacity">
                  {cat.id}
                </div>
                
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      </section>
    );
  }

  return (
    <section id="gallery" className="relative py-32 px-6 bg-[#120812] overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="mb-20 text-center lg:text-left">
          <h2 className="font-headline text-6xl md:text-8xl font-black text-white uppercase tracking-tighter glitch-text" data-text="TRABALHOS">
            TRABALHOS
          </h2>
          <p className="font-body text-xl text-primary/80 mt-4 max-w-2xl">
            Acesse meus trabalhos mais recentes e meu portfólio completo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Portal 1: Vídeo */}
          <div 
            className={cn(
              "group relative cursor-pointer transition-all duration-300",
              exploding === 'video' && "scale-110 opacity-50 blur-sm"
            )}
            onClick={() => handlePortalClick('video')}
          >
            <div className="relative border-[12px] border-white bg-black aspect-video shadow-[20px_20px_0px_#9214CC] group-hover:shadow-[25px_25px_0px_#F40FC0] group-hover:-translate-y-2 group-hover:-translate-x-2 transition-all duration-500 overflow-hidden">
              <Image
                src={videoImage?.imageUrl || ""}
                alt="Showreel Vídeo"
                fill
                className="object-cover contrast-125 saturate-150 group-hover:scale-110 transition-transform duration-1000 brightness-50 group-hover:brightness-75"
                data-ai-hint={videoImage?.imageHint}
              />
              
              {/* Preview Content on Cover */}
              <div className="absolute inset-0 flex items-center justify-center p-8 bg-black/40 group-hover:bg-black/20 transition-colors">
                <div className={cn(
                  "grid gap-4 w-full h-full opacity-60 group-hover:opacity-100 transition-opacity",
                  VIDEO_CATEGORIES.length === 2 ? "grid-cols-2" : "grid-cols-3"
                )}>
                  {VIDEO_CATEGORIES.map((cat) => (
                    <div key={cat.id} className="border border-white/20 bg-white/5 flex flex-col items-center justify-center gap-2 p-2 group-hover:border-primary/50 transition-colors">
                      <cat.icon size={24} className="text-white group-hover:text-primary transition-colors" />
                      <span className="font-mono text-[8px] md:text-[10px] text-white/70 text-center uppercase tracking-tighter">
                        {cat.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Play size={64} className="text-white fill-white" />
              </div>
              
              <div className="absolute top-4 right-4 bg-primary text-white px-6 py-2 font-headline font-black text-sm uppercase tracking-widest sticker -rotate-2">
                VIDEO PROJECTS
              </div>
              
              <div className="absolute bottom-4 left-4 w-10 h-10 flex items-center justify-center bg-white text-black font-black text-2xl border-2 border-black">
                N
              </div>
            </div>
          </div>

          {/* Portal 2: Design */}
          <div 
            className={cn(
              "group relative cursor-pointer transition-all duration-300",
              exploding === 'design' && "scale-110 opacity-50 blur-sm"
            )}
            onClick={() => handlePortalClick('design')}
          >
            <div className="relative border-[12px] border-white bg-black aspect-video shadow-[20px_20px_0px_#9214CC] group-hover:shadow-[25px_25px_0px_#00FFF9] group-hover:-translate-y-2 group-hover:-translate-x-2 transition-all duration-500 overflow-hidden">
              <Image
                src={designImage?.imageUrl || ""}
                alt="Arquivo Design"
                fill
                className="object-cover contrast-150 group-hover:scale-110 transition-transform duration-1000 brightness-50 group-hover:brightness-75"
                data-ai-hint={designImage?.imageHint}
              />

              {/* Preview Content on Cover */}
              <div className="absolute inset-0 flex items-center justify-center p-8 bg-black/40 group-hover:bg-black/20 transition-colors">
                <div className="grid grid-cols-3 gap-4 w-full h-full opacity-60 group-hover:opacity-100 transition-opacity">
                  {DESIGN_CATEGORIES.map((cat) => (
                    <div key={cat.id} className="border border-white/20 bg-white/5 flex flex-col items-center justify-center gap-2 p-2 group-hover:border-accent/50 transition-colors">
                      <cat.icon size={24} className="text-white group-hover:text-accent transition-colors" />
                      <span className="font-mono text-[8px] md:text-[10px] text-white/70 text-center uppercase tracking-tighter">
                        {cat.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Search size={64} className="text-white" />
              </div>

              <div className="absolute top-4 right-4 bg-primary text-white px-6 py-2 font-headline font-black text-sm uppercase tracking-widest sticker rotate-3">
                DESIGN ARCHIVE
              </div>

              <div className="absolute bottom-4 left-4 w-10 h-10 flex items-center justify-center bg-white text-black font-black text-2xl border-2 border-black">
                D
              </div>
            </div>
          </div>

        </div>
      </div>

      {exploding && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden pointer-events-none">
          <div className={cn(
            "absolute inset-0 bg-primary animate-pixel-burst",
            exploding === 'video' ? "paper-tear" : "animate-pixel-burst"
          )} />
          <div className="absolute inset-0 bg-[#120812] translate-y-full animate-[slide-up_0.6s_ease-out_forwards]" />
        </div>
      )}
    </section>
  );
}
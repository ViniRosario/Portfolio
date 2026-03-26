
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { ArrowLeft, Play, Search, Smartphone, Tv, Palette, Layers, Monitor } from 'lucide-react';
import { VIDEO_CATEGORIES, DESIGN_CATEGORIES } from '@/data/portfolio';

export function VideoGallery() {
  const [exploding, setExploding] = useState<string | null>(null);
  const [view, setView] = useState<'main' | 'video' | 'design'>('main');
  const [selectedCatId, setSelectedCatId] = useState<string | null>(null);
  
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
    if (selectedCatId) {
      setSelectedCatId(null);
    } else {
      setView('main');
    }
  };

  const getPreviewLink = (id: string) => `https://drive.google.com/file/d/${id}/preview`;
  const getThumbnailUrl = (id: string) => `https://drive.google.com/thumbnail?id=${id}&sz=w1280`;

  if (view !== 'main') {
    const categories = view === 'video' ? VIDEO_CATEGORIES : DESIGN_CATEGORIES;
    const title = view === 'video' ? 'GALERIA DE VÍDEOS' : 'GALERIA DE DESIGN';
    const activeCategory = categories.find(c => c.id === selectedCatId);
    
    const getAspectClass = (aspect?: string) => {
      switch (aspect) {
        case 'fullscreen': return "aspect-video";
        case 'reels': return "aspect-[9/16]";
        case 'square': return "aspect-square";
        default: return "aspect-video";
      }
    };

    const aspectClass = getAspectClass(activeCategory?.aspect);

    return (
      <section id="gallery" className="relative py-32 px-6 bg-[#120812] min-h-screen overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <button 
            onClick={handleBack}
            className="flex items-center gap-2 text-primary font-mono text-sm mb-12 hover:translate-x-[-8px] transition-transform group"
          >
            <ArrowLeft size={16} /> [ {selectedCatId ? 'VOLTAR PARA CATEGORIAS' : 'VOLTAR AO INÍCIO'} ]
          </button>

          <div className="mb-20">
            <h2 className="font-headline text-5xl md:text-7xl font-black text-white uppercase tracking-tighter glitch-text" data-text={activeCategory ? activeCategory.title : title}>
              {activeCategory ? activeCategory.title : title}
            </h2>
            <div className="h-1 w-24 bg-primary mt-4" />
          </div>

          {selectedCatId && activeCategory ? (
            <div className={cn(
              "grid grid-cols-1 gap-y-16 gap-x-8",
              activeCategory.aspect === 'fullscreen' 
                ? "md:grid-cols-2" 
                : (activeCategory.aspect === 'square' ? "md:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-3")
            )}>
              {activeCategory.items.length > 0 ? (
                activeCategory.items.map((item: any) => (
                  <div key={item.id} className="flex flex-col group">
                    <div className="bg-white text-black px-3 py-1 font-headline font-bold text-[10px] uppercase inline-block self-start border-t-4 border-l-4 border-r-4 border-white transition-colors group-hover:bg-primary group-hover:text-white">
                      {item.title}
                    </div>
                    <div 
                      className={cn(
                        "relative border-4 border-white bg-black overflow-hidden shadow-[10px_10px_0px_#9214CC] group-hover:shadow-[15px_15px_0px_#F40FC0] transition-all",
                        aspectClass
                      )}
                    >
                      <iframe 
                        src={getPreviewLink(item.driveId)}
                        className="w-full h-full border-none grayscale-[0.3] group-hover:grayscale-0 transition-all"
                        allow="autoplay"
                      />
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                  <p className="font-mono text-white/30 uppercase tracking-widest animate-pulse">Nenhum projeto adicionado nesta categoria ainda.</p>
                </div>
              )}
            </div>
          ) : (
            <div className={cn(
              "grid grid-cols-1 gap-8",
              categories.length <= 2 ? "md:grid-cols-2 max-w-4xl mx-auto" : "md:grid-cols-3"
            )}>
              {categories.map((cat) => (
                <div 
                  key={cat.id}
                  onClick={() => setSelectedCatId(cat.id)}
                  className="group relative bg-black border-4 border-white p-8 hover:border-primary transition-all cursor-pointer overflow-hidden aspect-square flex flex-col justify-end shadow-[10px_10px_0px_#9214CC] hover:shadow-[15px_15px_0px_#F40FC0]"
                >
                  {cat.items && cat.items.length > 0 ? (
                    <div className="absolute inset-0 z-0">
                      <Image 
                        src={getThumbnailUrl(cat.items[0].driveId)}
                        alt={cat.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 contrast-125 brightness-50 group-hover:brightness-75 transition-all duration-700"
                      />
                    </div>
                  ) : (
                    <div className="absolute inset-0 z-0 opacity-20">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#9214CC,transparent)]" />
                    </div>
                  )}
                  
                  <div className="relative z-10">
                    <div className="mb-4 text-white group-hover:text-primary transition-colors">
                      <cat.icon size={48} />
                    </div>
                    <h3 className="font-headline text-2xl font-bold text-white mb-2 group-hover:text-primary uppercase">{cat.title}</h3>
                    <p className="font-body text-xs text-white/60 uppercase tracking-widest leading-tight">{cat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
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
          
          <div 
            className={cn(
              "group relative cursor-pointer transition-all duration-300",
              exploding === 'video' && "scale-110 opacity-50 blur-sm"
            )}
            onClick={() => handlePortalClick('video')}
          >
            <div className="relative border-[12px] border-white bg-black aspect-video shadow-[20px_20px_0px_#9214CC] group-hover:shadow-[25px_25px_0px_#F40FC0] group-hover:-translate-y-2 group-hover:-translate-x-2 transition-all duration-500 overflow-hidden flex">
              <div className="relative w-1/2 h-full border-r-4 border-white overflow-hidden">
                <Image
                  src={getThumbnailUrl('18X5gyTexszSYrLRNrIFiY5e9_6qVRAhh')}
                  alt="Reels 01 Peek"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 contrast-125 brightness-50 group-hover:brightness-100 transition-all duration-700"
                />
              </div>
              <div className="relative w-1/2 h-full overflow-hidden">
                <Image
                  src={getThumbnailUrl('1BYrQgXSZtPVEQ2iJpEQF6-CBnsaHsBnp')}
                  alt="Vídeo 01 Peek"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 contrast-125 brightness-50 group-hover:brightness-100 transition-all duration-700"
                />
              </div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-black/40 group-hover:bg-transparent transition-colors z-20">
                <div className="text-white flex flex-col items-center gap-4">
                  <Play size={64} className="fill-white drop-shadow-2xl" />
                  <span className="font-headline text-4xl font-black uppercase tracking-tighter glitch-text" data-text="GALERIA DE VIDEOS">
                    GALERIA DE VIDEOS
                  </span>
                </div>
              </div>
              
              <div className="absolute top-4 right-4 bg-primary text-white px-6 py-2 font-headline font-black text-sm uppercase tracking-widest sticker -rotate-2 z-40">
                PORTAL V01
              </div>
            </div>
          </div>

          <div 
            className={cn(
              "group relative cursor-pointer transition-all duration-300",
              exploding === 'design' && "scale-110 opacity-50 blur-sm"
            )}
            onClick={() => handlePortalClick('design')}
          >
            <div className="relative border-[12px] border-white bg-black aspect-video shadow-[20px_20px_0px_#9214CC] group-hover:shadow-[25px_25px_0px_#00FFF9] group-hover:-translate-y-2 group-hover:-translate-x-2 transition-all duration-500 overflow-hidden flex">
              <div className="relative w-1/2 h-full border-r-4 border-white overflow-hidden">
                <Image
                  src={getThumbnailUrl('1RliV-KjoGbxjiC0EjXQT3-KEeusR93gg')}
                  alt="Branding Peek"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 contrast-125 brightness-50 group-hover:brightness-100 transition-all duration-700"
                />
              </div>
              <div className="relative w-1/2 h-full overflow-hidden">
                <Image
                  src={getThumbnailUrl('14R0tVS73EJvq2sHc5lQhh4Uig2FGr1tp')}
                  alt="Banner Peek"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 contrast-125 brightness-50 group-hover:brightness-100 transition-all duration-700"
                />
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-black/40 group-hover:bg-black/10 transition-colors z-20">
                <div className="text-white flex flex-col items-center gap-4">
                  <Search size={64} className="drop-shadow-2xl" />
                  <span className="font-headline text-4xl font-black uppercase tracking-tighter glitch-text" data-text="GALERIA DE DESIGN">
                    GALERIA DE DESIGN
                  </span>
                </div>
              </div>

              <div className="absolute top-4 right-4 bg-primary text-white px-6 py-2 font-headline font-black text-sm uppercase tracking-widest sticker rotate-3 z-40">
                PORTAL D01
              </div>
            </div>
          </div>

        </div>
      </div>

      {exploding && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden pointer-events-none">
          <div className={cn(
            "absolute inset-0 bg-primary animate-pixel-burst paper-tear"
          )} />
          <div className="absolute inset-0 bg-[#120812] translate-y-full animate-[slide-up_0.6s_ease-out_forwards]" />
        </div>
      )}
    </section>
  );
}

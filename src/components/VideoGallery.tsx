
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Play, Search, X } from 'lucide-react';

export function VideoGallery() {
  const [exploding, setExploding] = useState<string | null>(null);
  
  const videoImage = PlaceHolderImages.find(img => img.id === 'archive-video');
  const designImage = PlaceHolderImages.find(img => img.id === 'archive-design');

  const handlePortalClick = (type: string) => {
    setExploding(type);
    // In a real app, this would route to the full gallery or open a player
    setTimeout(() => setExploding(null), 1000);
  };

  return (
    <section id="gallery" className="relative py-32 px-6 bg-[#120812] overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="mb-20 text-center lg:text-left">
          <h2 className="font-headline text-6xl md:text-8xl font-black text-white uppercase tracking-tighter glitch-text" data-text="O ARQUIVO">
            O ARQUIVO
          </h2>
          <p className="font-body text-xl text-primary/80 mt-4 max-w-2xl">
            Acesse meus trabalhos mais recentes e meu portfolio completo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Element 1: Portal de Vídeo */}
          <div 
            className={cn(
              "group relative cursor-pointer transition-all duration-300",
              exploding === 'video' && "animate-pixel-burst"
            )}
            onClick={() => handlePortalClick('video')}
          >
            <div className="relative border-[12px] border-white bg-black aspect-video shadow-[20px_20px_0px_#9214CC] group-hover:shadow-[25px_25px_0px_#F40FC0] transition-all duration-500 overflow-hidden">
              <Image
                src={videoImage?.imageUrl || ""}
                alt="Showreel Vídeo"
                fill
                className="object-cover contrast-125 saturate-150 group-hover:scale-105 transition-transform duration-700 brightness-75 group-hover:brightness-100"
                data-ai-hint={videoImage?.imageHint}
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white flex items-center justify-center rounded-full group-hover:scale-110 group-hover:bg-primary transition-all duration-300 group-hover:animate-pulse">
                  <Play className="w-10 h-10 text-black fill-black" />
                </div>
              </div>

              {/* Label Sticker */}
              <div className="absolute bottom-4 right-4 bg-primary text-white px-6 py-2 font-headline font-black text-sm uppercase tracking-widest sticker">
                SHOWREELS & VIDEO PROJECTS
              </div>

              {/* Bottom Left Icon 'N' */}
              <div className="absolute bottom-4 left-4 w-8 h-8 flex items-center justify-center bg-white text-black font-black text-xl leading-none">
                N
              </div>

              {/* Scanline / RGB Split simulation on hover */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,4px_100%] transition-opacity" />
            </div>
            
            {/* Idle micro-vibration via CSS */}
            <div className="absolute -inset-1 border border-white/5 opacity-0 group-hover:opacity-100 animate-glitch pointer-events-none" />
          </div>

          {/* Element 2: Portal de Design */}
          <div 
            className={cn(
              "group relative cursor-pointer transition-all duration-300",
              exploding === 'design' && "animate-pixel-burst"
            )}
            onClick={() => handlePortalClick('design')}
          >
            <div className="relative border-[12px] border-white bg-black aspect-video shadow-[20px_20px_0px_#9214CC] group-hover:shadow-[25px_25px_0px_#00FFF9] transition-all duration-500 overflow-hidden">
              <Image
                src={designImage?.imageUrl || ""}
                alt="Arquivo Design"
                fill
                className="object-cover contrast-150 group-hover:scale-105 transition-transform duration-700 brightness-75 group-hover:brightness-100"
                data-ai-hint={designImage?.imageHint}
              />
              
              {/* Design Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white flex items-center justify-center group-hover:scale-110 group-hover:bg-accent transition-all duration-300 group-hover:animate-pulse rotate-45">
                  <Search className="w-10 h-10 text-black -rotate-45" />
                </div>
              </div>

              {/* Label Sticker (Top Left) */}
              <div className="absolute top-4 left-4 bg-primary text-white px-6 py-2 font-headline font-black text-sm uppercase tracking-widest sticker -rotate-2">
                DESIGN ARCHIVE
              </div>

              {/* Bottom Left Icon 'D' */}
              <div className="absolute bottom-4 left-4 w-8 h-8 flex items-center justify-center bg-white text-black font-black text-xl leading-none">
                D
              </div>

              {/* Pixelation / Distort simulation on hover */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-30 bg-[radial-gradient(circle,currentColor_1px,transparent_1px)] bg-[size:4px_4px] text-accent transition-opacity" />
            </div>

            {/* Idle micro-vibration */}
            <div className="absolute -inset-1 border border-white/5 opacity-0 group-hover:opacity-100 animate-glitch pointer-events-none" />
          </div>

        </div>
      </div>

      {/* Explosion Overlay (when active) */}
      {exploding && (
        <div className="fixed inset-0 z-[100] bg-white animate-pixel-burst pointer-events-none" />
      )}
    </section>
  );
}

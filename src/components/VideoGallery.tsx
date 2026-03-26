
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Play, X } from 'lucide-react';

export function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  
  const mainVideo = PlaceHolderImages.find(img => img.id === 'video-main');
  const thumbs = [
    PlaceHolderImages.find(img => img.id === 'video-sub1'),
    PlaceHolderImages.find(img => img.id === 'video-sub2'),
    PlaceHolderImages.find(img => img.id === 'video-sub3'),
  ];

  return (
    <section id="gallery" className="relative py-40 px-6 min-h-screen">
      <div className="container mx-auto">
        <h2 className="font-headline text-6xl md:text-9xl font-black text-white/10 absolute -top-10 left-0 uppercase pointer-events-none">
          REELS_EXPLOSION
        </h2>

        <div className="relative flex items-center justify-center min-h-[600px]">
          {/* Main Focused Video */}
          <div className="relative w-full max-w-4xl aspect-video bg-black border-4 border-white overflow-hidden shadow-[20px_20px_0px_rgba(244,15,192,0.5)] group cursor-pointer" onClick={() => setActiveVideo("main")}>
            <Image
              src={mainVideo?.imageUrl || ""}
              alt="Main Showreel"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              data-ai-hint={mainVideo?.imageHint}
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/0 transition-colors">
              <Play className="w-20 h-20 text-white fill-white group-hover:scale-110 transition-transform" />
            </div>
            <div className="absolute bottom-4 left-4 bg-primary text-white px-4 py-1 font-headline font-bold uppercase sticker">
              LATEST SHOWREEL 2024
            </div>
          </div>

          {/* Floating Thumbnails */}
          {thumbs.map((thumb, idx) => (
            <div
              key={thumb?.id}
              className={cn(
                "absolute hidden lg:block cursor-pointer transition-all duration-500 hover:z-20",
                idx === 0 && "-top-20 -left-10 w-64 aspect-square rotate-[-10deg] hover:rotate-0",
                idx === 1 && "top-1/2 -right-20 w-80 aspect-square rotate-[15deg] hover:rotate-0",
                idx === 2 && "-bottom-20 left-20 w-72 aspect-video rotate-[5deg] hover:rotate-0"
              )}
              onClick={() => setActiveVideo(thumb?.id || null)}
            >
              <div className="relative w-full h-full border-2 border-white bg-black overflow-hidden shadow-xl">
                <Image
                  src={thumb?.imageUrl || ""}
                  alt="Thumbnail"
                  fill
                  className="object-cover grayscale contrast-150 hover:grayscale-0 transition-all"
                  data-ai-hint={thumb?.imageHint}
                />
                <div className="absolute inset-0 bg-secondary/20 hover:bg-transparent" />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-white text-black text-[10px] font-mono p-1">
                FILE_00{idx+1}.MP4
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal with Explosion Transition */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-xl animate-in fade-in zoom-in duration-300">
          <button 
            className="absolute top-10 right-10 text-white hover:text-primary transition-colors"
            onClick={() => setActiveVideo(null)}
          >
            <X size={48} />
          </button>
          
          <div className="w-[90vw] max-w-6xl aspect-video bg-black relative border-8 border-primary animate-glitch">
            <div className="absolute inset-0 flex items-center justify-center text-white/20 font-headline text-2xl uppercase">
              // VIDEO LOADING // STIMULATION_ACTIVE //
            </div>
            {/* Simulation of a video player */}
            <div className="absolute bottom-0 left-0 w-full h-2 bg-primary/20">
              <div className="h-full bg-primary w-2/3 animate-pulse" />
            </div>
          </div>
          
          {/* Explosion particles background simulation */}
          <div className="absolute inset-0 pointer-events-none -z-10 opacity-50">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary animate-pixel-burst" />
            <div className="absolute top-3/4 right-1/4 w-4 h-4 bg-secondary animate-pixel-burst delay-100" />
            <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-accent animate-pixel-burst delay-200" />
          </div>
        </div>
      )}
    </section>
  );
}

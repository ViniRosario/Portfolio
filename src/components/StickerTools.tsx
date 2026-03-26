
"use client";

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const PsIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20 transition-transform duration-500 group-hover:scale-110">
    <defs>
      <linearGradient id="psGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#001e36" />
        <stop offset="100%" stopColor="#000b14" />
      </linearGradient>
    </defs>
    <rect width="100" height="100" rx="12" fill="url(#psGrad)" stroke="#31a8ff" strokeWidth="2" />
    <text x="50" y="66" fill="#31a8ff" fontSize="42" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif" style={{ filter: 'drop-shadow(0 0 8px rgba(49, 168, 255, 0.6))' }}>Ps</text>
  </svg>
);

const AeIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20 transition-transform duration-500 group-hover:scale-110">
    <defs>
      <linearGradient id="aeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00005b" />
        <stop offset="100%" stopColor="#000028" />
      </linearGradient>
    </defs>
    <rect width="100" height="100" rx="12" fill="url(#aeGrad)" stroke="#cf96fd" strokeWidth="2" />
    <text x="50" y="66" fill="#cf96fd" fontSize="42" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif" style={{ filter: 'drop-shadow(0 0 8px rgba(207, 150, 253, 0.6))' }}>Ae</text>
  </svg>
);

const CapcutIcon = () => {
  const capcutImg = PlaceHolderImages.find(img => img.id === 'capcut-icon');
  return (
    <div className="relative w-16 h-16 md:w-20 md:h-20 transition-transform duration-500 group-hover:scale-110">
      <Image 
        src={capcutImg?.imageUrl || ""}
        alt="CapCut"
        fill
        className="object-contain"
        data-ai-hint={capcutImg?.imageHint}
      />
    </div>
  );
};

const TOOLS = [
  { 
    name: "Photoshop", 
    color: "#31A8FF", 
    Icon: PsIcon,
    tag: "DESIGN 2D",
    desc: "Manipulação e Composição"
  },
  { 
    name: "After Effects", 
    color: "#CF96FD", 
    Icon: AeIcon,
    tag: "MOTION FX",
    desc: "Efeitos e Animação"
  },
  { 
    name: "Capcut", 
    color: "#FFFFFF", 
    Icon: CapcutIcon,
    tag: "VIDEO EDIT",
    desc: "Ritmo e Retenção"
  },
];

export function StickerTools() {
  return (
    <section id="tools" className="relative py-32 px-6 bg-background">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full bg-primary" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-secondary" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-primary" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center mb-20 text-center">
          <h2 className="font-headline text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-4">
            HABILI<span className="text-primary italic">DADES</span>
          </h2>
          <div className="h-1 w-24 bg-primary" />
          <p className="font-mono text-[10px] text-primary/60 mt-4 tracking-[0.3em] uppercase">SYSTEM ARCH V2.0 // TECH STACK</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {TOOLS.map((tool) => (
            <div
              key={tool.name}
              className="group relative"
            >
              <div className={cn(
                "relative h-full p-8 bg-white/[0.03] border border-white/10 backdrop-blur-sm transition-all duration-500",
                "group-hover:bg-white/[0.07] group-hover:border-primary/50 group-hover:-translate-y-2 overflow-hidden"
              )}>
                <div 
                  className="absolute -right-10 -top-10 w-32 h-32 blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ backgroundColor: tool.color }}
                />

                <div className="flex flex-col items-center text-center gap-6">
                  <div className="relative">
                    <tool.Icon />
                    <div className="absolute -inset-4 border border-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-700 scale-75 group-hover:scale-110 pointer-events-none" />
                  </div>

                  <div className="space-y-3">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-[10px] font-mono text-primary border border-primary/20 tracking-tighter">
                      {tool.tag}
                    </span>
                    <h3 className="font-headline text-2xl font-bold text-white group-hover:text-primary transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-white/40 font-body text-xs uppercase tracking-widest leading-relaxed">
                      {tool.desc}
                    </p>
                  </div>
                </div>

                <div 
                  className="absolute bottom-0 left-0 h-1 bg-white/10 transition-all duration-500 group-hover:w-full"
                  style={{ backgroundColor: tool.color }}
                />
              </div>
              
              <div 
                className="absolute inset-0 blur-3xl opacity-0 group-hover:opacity-5 -z-10 transition-opacity duration-500"
                style={{ backgroundColor: tool.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

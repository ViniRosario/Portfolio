
"use client";

import React from 'react';
import { cn } from '@/lib/utils';

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

const CapcutIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20 transition-transform duration-500 group-hover:scale-110">
    <rect width="100" height="100" rx="12" fill="#000000" stroke="#ffffff" strokeWidth="2" />
    <g transform="translate(20, 20) scale(0.6)">
      <rect x="0" y="0" width="60" height="60" rx="12" stroke="white" strokeWidth="8" fill="none" />
      <rect x="30" y="30" width="60" height="60" rx="12" fill="white" />
    </g>
  </svg>
);

const TOOLS = [
  { 
    name: "Photoshop", 
    color: "#31A8FF", 
    Icon: PsIcon,
    tag: "DESIGN_2D",
    desc: "Manipulação e Composição"
  },
  { 
    name: "After Effects", 
    color: "#CF96FD", 
    Icon: AeIcon,
    tag: "MOTION_FX",
    desc: "Efeitos e Animação"
  },
  { 
    name: "Capcut", 
    color: "#FFFFFF", 
    Icon: CapcutIcon,
    tag: "VIDEO_EDIT",
    desc: "Ritmo e Retenção"
  },
];

export function StickerTools() {
  return (
    <section id="tools" className="relative py-32 px-6 bg-background">
      {/* Tech Background Decor */}
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
          <p className="font-mono text-xs text-primary/60 mt-4 tracking-[0.3em]">TECH_STACK_OVERVIEW_V2.0</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {TOOLS.map((tool) => (
            <div
              key={tool.name}
              className="group relative"
            >
              {/* Card Container */}
              <div className={cn(
                "relative h-full p-8 bg-white/[0.03] border border-white/10 backdrop-blur-sm transition-all duration-500",
                "group-hover:bg-white/[0.07] group-hover:border-white/20 group-hover:-translate-y-2 overflow-hidden"
              )}>
                {/* Brand Accent Glow */}
                <div 
                  className="absolute -right-10 -top-10 w-32 h-32 blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                  style={{ backgroundColor: tool.color }}
                />

                <div className="flex flex-col items-center text-center gap-6">
                  <div className="relative">
                    <tool.Icon />
                    {/* Floating Tech Border */}
                    <div className="absolute -inset-4 border border-white/5 opacity-0 group-hover:opacity-100 transition-all duration-700 scale-75 group-hover:scale-110 pointer-events-none" />
                  </div>

                  <div className="space-y-2">
                    <span className="inline-block px-2 py-1 bg-white/5 text-[10px] font-mono text-primary border border-primary/20">
                      {tool.tag}
                    </span>
                    <h3 className="font-headline text-2xl font-bold text-white group-hover:text-primary transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-white/40 font-body text-sm uppercase tracking-wider">
                      {tool.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Tech Bar */}
                <div 
                  className="absolute bottom-0 left-0 h-1 bg-white/10 transition-all duration-500 group-hover:w-full"
                  style={{ backgroundColor: `rgba(${parseInt(tool.color.slice(1,3),16)}, ${parseInt(tool.color.slice(3,5),16)}, ${parseInt(tool.color.slice(5,7),16)}, 0.5)` }}
                />
              </div>
              
              {/* Outer Shadow Glow */}
              <div 
                className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-10 -z-10 transition-opacity duration-500"
                style={{ backgroundColor: tool.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

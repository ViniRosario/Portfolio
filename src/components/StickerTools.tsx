
"use client";

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const PsIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-24 md:h-24">
    <rect width="100" height="100" rx="15" fill="#001e36" />
    <text x="50" y="68" fill="#31a8ff" fontSize="48" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Ps</text>
  </svg>
);

const AeIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-24 md:h-24">
    <rect width="100" height="100" rx="15" fill="#00005b" />
    <text x="50" y="68" fill="#cf96fd" fontSize="48" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Ae</text>
  </svg>
);

const CapcutIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-24 md:h-24">
    <rect width="100" height="100" rx="15" fill="#000000" />
    <path
      d="M32 32h21.333l14.667 14.667v21.333h-21.333l-14.667-14.667V32z"
      fill="#fff"
    />
    <path
      d="M42.667 42.667h10.666l5.334 5.333V58.667h-10.666l-5.334-5.334V42.667z"
      fill="#000"
    />
  </svg>
);

const TOOLS = [
  { name: "Photoshop", color: "#31A8FF", rotation: -5, Icon: PsIcon },
  { name: "After Effects", color: "#9999FF", rotation: 3, Icon: AeIcon },
  { name: "Capcut", color: "#000000", rotation: -2, Icon: CapcutIcon },
];

export function StickerTools() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="tools" className="relative py-32 px-6 bg-[#22141F]">
      <div className="container mx-auto">
        <h2 className="font-headline text-6xl md:text-8xl font-black text-white mb-24 text-center uppercase tracking-tighter">
          HABILI<span className="text-secondary">DADES</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-10 md:gap-20">
          {TOOLS.map((tool, idx) => {
            // Reduced parallax intensity to prevent icons from moving off-screen
            const parallax = (scrollY * 0.02) * ((idx % 3) + 1);
            return (
              <div
                key={tool.name}
                className="relative group cursor-pointer"
                style={{
                  transform: `translateY(${parallax}px)`,
                  transition: 'transform 0.1s linear'
                }}
              >
                {/* Tape Effect */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/20 backdrop-blur-sm rotate-2 z-10 border border-white/10" />
                
                <div 
                  className={cn(
                    "relative p-4 md:p-8 bg-white/5 border-2 border-white/20 paper-tear transition-all duration-300 flex items-center justify-center",
                    "group-hover:bg-white group-active:scale-95 sticker"
                  )}
                  style={{ '--rotation': `${tool.rotation}deg` } as any}
                >
                  <tool.Icon />
                  
                  {/* Underneath 'Paper Tear' reveal color */}
                  <div 
                    className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: tool.color }}
                  />
                </div>
                
                {/* Shadow */}
                <div className="absolute inset-0 bg-black/40 blur-md translate-y-2 -z-20 group-hover:translate-y-4 transition-transform" />
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Decorative Stickers scattered around */}
      <div className="absolute top-1/4 right-10 w-24 h-24 bg-primary rotate-12 sticker paper-tear hidden lg:block opacity-20" />
      <div className="absolute bottom-1/4 left-10 w-32 h-12 bg-accent rotate-[-15deg] sticker paper-tear hidden lg:block opacity-20" />
    </section>
  );
}

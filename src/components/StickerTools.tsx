
"use client";

import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const TOOLS = [
  { name: "Photoshop", color: "#31A8FF", rotation: -5 },
  { name: "Premiere Pro", color: "#EA77FF", rotation: 3 },
  { name: "After Effects", color: "#9999FF", rotation: -2 },
  { name: "Next.js", color: "#FFFFFF", rotation: 4 },
  { name: "Tailwind CSS", color: "#38BDF8", rotation: -8 },
  { name: "Firebase", color: "#FFCA28", rotation: 2 },
  { name: "Figma", color: "#F24E1E", rotation: -4 },
  { name: "Blender", color: "#E87D0D", rotation: 6 },
  { name: "Genkit AI", color: "#12B886", rotation: -1 },
];

export function StickerTools() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="tools" className="relative py-32 px-6 overflow-hidden bg-[#22141F]">
      <div className="container mx-auto">
        <h2 className="font-headline text-6xl md:text-8xl font-black text-white mb-20 text-center uppercase tracking-tighter">
          THE <span className="text-secondary">STACK</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-10 md:gap-20">
          {TOOLS.map((tool, idx) => {
            const parallax = (scrollY * 0.05) * ((idx % 3) + 1);
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
                    "relative px-8 py-4 bg-white/5 border-2 border-white/20 paper-tear transition-all duration-300",
                    "group-hover:bg-white group-hover:text-black group-hover:border-transparent group-active:scale-95"
                  )}
                  style={{ '--rotation': `${tool.rotation}deg` } as any}
                >
                  <span className="font-headline text-2xl md:text-3xl font-bold uppercase tracking-widest">
                    {tool.name}
                  </span>
                  
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
      <div className="absolute top-1/4 right-10 w-24 h-24 bg-primary rotate-12 sticker paper-tear hidden lg:block" />
      <div className="absolute bottom-1/4 left-10 w-32 h-12 bg-accent rotate-[-15deg] sticker paper-tear hidden lg:block" />
    </section>
  );
}


"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

export function GlitchHero({ onEnter }: { onEnter: () => void }) {
  const [isEntering, setIsEntering] = useState(false);

  const handleEnter = () => {
    setIsEntering(true);
    setTimeout(onEnter, 800);
  };

  return (
    <div className={cn(
      "fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#22141F] transition-all duration-500",
      isEntering && "animate-pixel-burst pointer-events-none"
    )}>
      <div className="relative group cursor-pointer" onClick={handleEnter}>
        <h1 
          className="font-headline text-7xl md:text-9xl font-bold tracking-tighter text-white uppercase glitch-text"
          data-text="VINI ROSÁRIO"
        >
          VINI ROSÁRIO
        </h1>
        <div className="mt-4 flex justify-between items-center w-full px-2">
          <span className="font-headline text-2xl md:text-4xl text-primary font-light italic">PORTFÓLIO</span>
          <div className="h-px bg-primary flex-grow mx-4 hidden md:block" />
          <span className="font-headline text-lg md:text-xl text-white/50">[ CLICK TO ENTER ]</span>
        </div>
      </div>
      
      {/* Background Noise Decor */}
      <div className="absolute top-10 left-10 text-xs font-mono text-primary/20 select-none hidden lg:block">
        SYSTEM_INIT: SUCCESS<br />
        GLITCH_LEVEL: MAX<br />
        ZINE_MODE: ACTIVE
      </div>
      <div className="absolute bottom-10 right-10 text-xs font-mono text-primary/20 select-none hidden lg:block">
        ©2024 ROSARIO_CORP<br />
        EST: UNDERGROUND<br />
        V.0.4.2_GLITCH
      </div>
    </div>
  );
}

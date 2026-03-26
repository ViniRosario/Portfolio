
"use client";

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function GlitchHero({ onEnter }: { onEnter: () => void }) {
  const [isEntering, setIsEntering] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleEnter = () => {
    setIsEntering(true);
    setTimeout(onEnter, 800);
  };

  return (
    <div className={cn(
      "fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0d040d] transition-all duration-500 overflow-hidden cursor-none",
      isEntering && "animate-pixel-burst pointer-events-none"
    )}>
      {/* Interactive Background Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute w-[600px] h-[600px] rounded-full bg-primary/20 bg-blur-light animate-float-blob"
          style={{ left: '5%', top: '15%' }} 
        />
        <div 
          className="absolute w-[500px] h-[500px] rounded-full bg-secondary/15 bg-blur-light animate-float-blob"
          style={{ right: '10%', bottom: '15%', animationDelay: '-7s' }} 
        />
        
        {/* Spotlight effect following the mouse */}
        <div 
          className="absolute inset-0 z-10 opacity-70 mix-blend-screen"
          style={{
            background: `radial-gradient(circle 500px at ${mousePos.x}px ${mousePos.y}px, rgba(146, 20, 204, 0.4) 0%, transparent 100%)`,
          }}
        />
      </div>

      <div className="relative z-20 group cursor-pointer" onClick={handleEnter}>
        <div className="absolute -inset-10 bg-primary/10 blur-3xl rounded-full scale-150 group-hover:bg-primary/20 transition-colors" />
        
        <h1 
          className="font-headline text-7xl md:text-9xl font-bold tracking-tighter text-white uppercase glitch-text relative"
          data-text="VINI ROSÁRIO"
        >
          VINI ROSÁRIO
        </h1>
        
        <div className="mt-6 flex justify-between items-center w-full px-2 relative">
          <span className="font-headline text-2xl md:text-4xl text-primary font-light italic">PORTFÓLIO</span>
          <div className="h-px bg-primary/50 flex-grow mx-4 hidden md:block" />
          <span className="font-headline text-lg md:text-xl text-white/50 animate-pulse tracking-widest uppercase">[ CLIQUE PARA ENTRAR ]</span>
        </div>
      </div>
      
      <div className="absolute top-10 left-10 text-xs font-mono text-primary/40 select-none hidden lg:block z-20">
        SYSTEM_INIT: SUCCESS<br />
        LIGHT_ENGINE: ACTIVE<br />
        ATMOSPHERE: STABLE
      </div>
    </div>
  );
}

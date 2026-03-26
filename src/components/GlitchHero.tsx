
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
      "fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#120812] transition-all duration-500 overflow-hidden",
      isEntering && "animate-pixel-burst pointer-events-none"
    )}>
      {/* Dynamic Background Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-[600px] h-[600px] rounded-full bg-primary/20 bg-blur-blob"
          style={{ 
            left: '20%', 
            top: '10%',
            animationDelay: '0s'
          }} 
        />
        <div 
          className="absolute w-[500px] h-[500px] rounded-full bg-secondary/20 bg-blur-blob"
          style={{ 
            right: '20%', 
            bottom: '10%',
            animationDelay: '-3s'
          }} 
        />
        
        {/* Interactive Mouse Spotlight */}
        <div 
          className="absolute inset-0 z-10 opacity-40 mix-blend-screen"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(146, 20, 204, 0.2), transparent 80%)`,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 group cursor-pointer" onClick={handleEnter}>
        <h1 
          className="font-headline text-7xl md:text-9xl font-bold tracking-tighter text-white uppercase glitch-text"
          data-text="VINI ROSÁRIO"
        >
          VINI ROSÁRIO
        </h1>
        <div className="mt-4 flex justify-between items-center w-full px-2">
          <span className="font-headline text-2xl md:text-4xl text-primary font-light italic">PORTFÓLIO</span>
          <div className="h-px bg-primary flex-grow mx-4 hidden md:block" />
          <span className="font-headline text-lg md:text-xl text-white/50 animate-pulse">[ CLICK TO ENTER ]</span>
        </div>
      </div>
      
      {/* Decorative Text */}
      <div className="absolute top-10 left-10 text-xs font-mono text-primary/30 select-none hidden lg:block z-20">
        SYSTEM_INIT: SUCCESS<br />
        GLITCH_LEVEL: MAX<br />
        LIGHT_ENGINE: ACTIVE
      </div>
      <div className="absolute bottom-10 right-10 text-xs font-mono text-primary/30 select-none hidden lg:block z-20">
        ©2024 ROSARIO_CORP<br />
        EST: UNDERGROUND<br />
        V.0.5.0_LIGHT
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] z-10" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)',
        backgroundSize: '30px 30px'
      }} />
    </div>
  );
}

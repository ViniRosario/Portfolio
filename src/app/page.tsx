
"use client";

import React, { useState, useEffect } from 'react';
import { GlitchHero } from '@/components/GlitchHero';
import { AboutMe } from '@/components/AboutMe';
import { StickerTools } from '@/components/StickerTools';
import { VideoGallery } from '@/components/VideoGallery';
import { ContactSection } from '@/components/ContactSection';
import { Toaster } from '@/components/ui/toaster';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navItems = [
    { label: 'SOBRE', href: '#about' },
    { label: 'HABILIDADES', href: '#tools' },
    { label: 'TRABALHOS', href: '#gallery' },
    { label: 'CONTATO', href: '#contact' },
  ];

  if (!hasEntered) {
    return <GlitchHero onEnter={() => setHasEntered(true)} />;
  }

  return (
    <main className="relative min-h-screen bg-[#0d040d] selection:bg-primary selection:text-white overflow-x-hidden">
      {/* Global Background Lighting Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div 
          className="absolute w-[800px] h-[800px] rounded-full bg-primary/10 bg-blur-light animate-float-blob"
          style={{ left: '-10%', top: '5%' }} 
        />
        <div 
          className="absolute w-[700px] h-[700px] rounded-full bg-secondary/10 bg-blur-light animate-float-blob"
          style={{ right: '-5%', bottom: '10%', animationDelay: '-5s' }} 
        />
        <div 
          className="absolute w-[600px] h-[600px] rounded-full bg-accent/5 bg-blur-light animate-float-blob"
          style={{ left: '40%', top: '40%', animationDelay: '-10s' }} 
        />
      </div>

      {/* Interactive Spotlight Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-[60] opacity-30 mix-blend-screen"
        style={{
          background: `radial-gradient(circle 600px at ${mousePos.x}px ${mousePos.y}px, rgba(146, 20, 204, 0.2) 0%, transparent 100%)`,
        }}
      />

      <nav className="fixed top-0 left-0 w-full z-40 p-6 flex justify-between items-start mix-blend-difference">
        <a href="#" className="flex flex-col group">
          <span className="font-headline text-2xl font-bold tracking-tighter text-white uppercase leading-none">
            VINI ROSÁRIO
          </span>
          <span className="font-mono text-[10px] text-primary tracking-wider uppercase leading-none mt-1 opacity-80 group-hover:animate-glitch">
            Editor de vídeo // Designer gráfico
          </span>
        </a>
        
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-12 h-12 flex flex-col items-center justify-center gap-1 group mt-[-8px]"
        >
          <div className={cn("h-1 bg-white transition-all", isMenuOpen ? "w-8 rotate-45 translate-y-2" : "w-8")} />
          <div className={cn("h-1 bg-white transition-all", isMenuOpen ? "opacity-0" : "w-6")} />
          <div className={cn("h-1 bg-white transition-all", isMenuOpen ? "w-8 -rotate-45 -translate-y-2" : "w-4")} />
        </button>
      </nav>

      {/* Fullscreen Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 z-[70] bg-primary/95 backdrop-blur-md transition-all duration-500 flex flex-col items-center justify-center",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <button 
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-10 right-10 text-white hover:text-black transition-colors"
        >
          <X size={48} />
        </button>
        
        <div className="flex flex-col gap-8">
          {navItems.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="font-headline text-6xl md:text-8xl font-black text-white hover:text-black hover:italic transition-all uppercase tracking-tighter group flex items-center"
            >
              <span className="text-2xl mr-4 opacity-30 font-mono">0{idx+1}</span>
              {item.label}
              <span className="hidden group-hover:inline ml-4 animate-glitch text-accent">!</span>
            </a>
          ))}
        </div>
      </div>

      <div className="relative z-10">
        <AboutMe />
        <StickerTools />
        <VideoGallery />
        <ContactSection />
      </div>

      <Toaster />

      {/* Grain/Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.04] overflow-hidden">
        <div className="absolute inset-0 bg-repeat bg-center" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }} />
      </div>
    </main>
  );
}


"use client";

import React, { useState, useEffect } from 'react';
import { GlitchHero } from '@/components/GlitchHero';
import { AboutMe } from '@/components/AboutMe';
import { ChaoticSkills } from '@/components/ChaoticSkills';
import { StickerTools } from '@/components/StickerTools';
import { VideoGallery } from '@/components/VideoGallery';
import { ContactSection } from '@/components/ContactSection';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Simple scroll spy or navigation
  const navItems = [
    { label: 'ABOUT', href: '#about' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'STACK', href: '#tools' },
    { label: 'WORKS', href: '#gallery' },
    { label: 'CONNECT', href: '#contact' },
  ];

  if (!hasEntered) {
    return <GlitchHero onEnter={() => setHasEntered(true)} />;
  }

  return (
    <main className="relative min-h-screen bg-[#22141F] selection:bg-primary selection:text-white">
      {/* Persistent Navigation */}
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

      {/* Fullscreen Overlay Menu */}
      <div className={cn(
        "fixed inset-0 z-50 bg-primary/95 backdrop-blur-sm transition-all duration-500 flex flex-col items-center justify-center",
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
        
        <div className="absolute bottom-10 left-10 text-white font-mono text-xs opacity-50">
          GLITCHFOLIO_V1 // NAV_SYSTEM_ONLINE
        </div>
      </div>

      {/* Content Sections */}
      <div className="relative">
        <AboutMe />
        <ChaoticSkills />
        <StickerTools />
        <VideoGallery />
        <ContactSection />
      </div>

      {/* Global Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] overflow-hidden">
        <div className="absolute inset-0 bg-repeat bg-center" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }} />
      </div>
      
      {/* Scanline Effect */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.05] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
    </main>
  );
}

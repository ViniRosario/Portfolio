
"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function AboutMe() {
  const profileImage = PlaceHolderImages.find(img => img.id === 'vini-profile');

  return (
    <section id="about" className="relative min-h-screen py-24 px-6 flex flex-col lg:flex-row items-center justify-center gap-16 overflow-hidden bg-transparent">
      {/* Background Text Overlay */}
      <div className="absolute -top-10 -left-10 text-[20rem] font-headline font-black text-white/[0.03] select-none pointer-events-none uppercase">
        VINI
      </div>
      
      <div className="relative w-full max-w-md lg:w-1/2 group">
        <div className="absolute -inset-4 bg-primary/20 -rotate-3 group-hover:rotate-0 transition-transform duration-500 paper-tear" />
        <div className="absolute -inset-2 bg-secondary/30 rotate-2 group-hover:rotate-0 transition-transform duration-500 paper-tear" />
        
        <div className="relative aspect-[4/5] overflow-hidden paper-tear halftone border-4 border-white bg-muted">
          {profileImage && (
            <Image
              src={profileImage.imageUrl}
              alt={profileImage.description}
              fill
              className="object-cover grayscale contrast-125 brightness-110 group-hover:grayscale-0 transition-all duration-700"
              data-ai-hint={profileImage.imageHint}
              priority
            />
          )}
        </div>
        
        {/* Collage elements */}
        <div className="absolute -bottom-6 -right-6 bg-accent text-background px-4 py-2 font-headline font-bold -rotate-6 sticker shadow-xl">
          export project
        </div>
        <div className="absolute -top-8 -left-8 bg-primary text-white px-4 py-2 font-headline font-bold rotate-12 sticker shadow-xl">
          new project
        </div>
      </div>

      <div className="w-full lg:w-1/2 max-w-2xl space-y-8 z-10">
        <h2 className="font-headline text-6xl md:text-8xl font-bold uppercase tracking-tight text-white leading-none">
          <span className="text-primary block italic">SOBRE</span>
          <span className="inline-block relative">
            MIM
            <span className="absolute -bottom-2 left-0 w-full h-4 bg-secondary/40 -z-10" />
          </span>
        </h2>
        
        <div className="space-y-6 font-body text-lg md:text-xl text-white/80 leading-relaxed">
          <p className="border-l-4 border-primary pl-6 bg-white/5 py-2">
            Meu nome é José Vinícius Rosário, tenho 20 anos e atuo como editor de vídeo e designer gráfico. Atualmente, estudo Ciência da Computação na Universidade Estadual de Santa Cruz (UESC).
          </p>
          <p>
            Tenho experiência na edição de vídeos curtos e longos, sempre com foco em ritmo e retenção. No design gráfico, desenvolvo peças com forte apelo visual, trabalhando com tipografias, criação de logos e banners focados em atrair a atenção.
          </p>
          <p>
            Meu objetivo é unir a lógica da tecnologia com a criatividade do audiovisual para entregar projetos autênticos e de alto impacto.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <span className="px-4 py-1 bg-primary text-white font-mono text-[10px] tracking-widest uppercase">#COMPUTER SCIENCE</span>
            <span className="px-4 py-1 bg-secondary text-white font-mono text-[10px] tracking-widest uppercase">#VIDEO EDITOR</span>
            <span className="px-4 py-1 bg-accent text-background font-mono text-[10px] font-bold tracking-widest uppercase">#GRAPHIC DESIGN</span>
          </div>
        </div>
      </div>
    </section>
  );
}

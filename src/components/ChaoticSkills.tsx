
"use client";

import React, { useEffect, useState } from 'react';
import { generateChaoticSkillsLayout, GenerateChaoticSkillsLayoutOutput } from '@/ai/flows/generate-chaotic-skills-layout';
import { cn } from '@/lib/utils';

const SKILLS_LIST = [
  "Visual Design", "Motion Graphics", "Branding", "UI/UX", "Art Direction", 
  "Collage", "Glitch Art", "Photography", "Video Editing", "Typography",
  "Urban Art", "Web Development", "Zine Design", "Post-Digital"
];

export function ChaoticSkills() {
  const [layoutData, setLayoutData] = useState<GenerateChaoticSkillsLayoutOutput | null>(null);
  const [isHovered, setIsHovered] = useState<string | null>(null);

  useEffect(() => {
    async function loadLayout() {
      const data = await generateChaoticSkillsLayout({ skills: SKILLS_LIST });
      setLayoutData(data);
    }
    loadLayout();
  }, []);

  if (!layoutData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-glitch text-primary font-headline text-3xl">GENERATING CHAOS...</div>
      </div>
    );
  }

  return (
    <section id="skills" className="relative h-screen min-h-[800px] overflow-hidden bg-black/20 py-20">
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <h2 className="text-[25vw] font-headline font-black rotate-90 text-white uppercase">SKILLS</h2>
      </div>

      <div className="container relative h-full mx-auto px-10">
        {layoutData.layout.map((item, idx) => (
          <div
            key={idx}
            className={cn(
              "absolute transition-all duration-300 cursor-default select-none group",
              isHovered === item.text && "z-50"
            )}
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
              transform: `translate(-50%, -50%) rotate(${item.rotation}deg) scale(${isHovered === item.text ? 1.2 : 1})`,
            }}
            onMouseEnter={() => setIsHovered(item.text)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <span
              className={cn(
                "whitespace-nowrap transition-colors duration-100",
                isHovered === item.text ? "animate-glitch bg-accent text-background" : ""
              )}
              style={{
                fontSize: `${item.fontSize * 1.5}rem`,
                fontWeight: item.fontWeight as any,
                color: isHovered === item.text ? undefined : item.color,
                textShadow: isHovered === item.text ? `3px 3px 0px #F40FC0` : 'none',
              }}
            >
              {item.text}
            </span>
            {isHovered === item.text && (
              <div className="absolute -inset-2 border-2 border-white/50 -z-10 animate-pulse pointer-events-none" />
            )}
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-10 left-10 max-w-xs text-xs font-mono text-white/30 hidden md:block">
        [ SYSTEM OVERRIDE ] RANDOMIZED POSITIONS GENERATED VIA NEURAL MAPPING. HOVER TO DISTORT.
      </div>
    </section>
  );
}

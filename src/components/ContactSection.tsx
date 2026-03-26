
"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Instagram, Linkedin, Twitter, Mail, Send } from 'lucide-react';

const SOCIAL_LINKS = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/vinirosario/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/vini_rosarioo/", label: "Instagram" },
  { icon: Twitter, href: "https://x.com/vini_rosarioo", label: "Twitter" },
  { icon: Mail, href: "mailto:jvinicius449@gmail.com", label: "Email" },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden bg-black">
      {/* Background Visuals */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(146,20,204,0.1),transparent)]" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-10">
            <h2 className="font-headline text-6xl md:text-8xl font-black text-white uppercase leading-none italic">
              CONT<span className="text-primary block not-italic glitch-text" data-text="ATO">ATO</span>
            </h2>
            <p className="font-body text-xl text-white/60 max-w-md">
              Se interessou pelo meu serviço?<br />
              Entre em contato comigo a partir das redes sociais ou o e-mail abaixo
            </p>
            
            <div className="flex gap-6">
              {SOCIAL_LINKS.map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href}
                  target={social.href.startsWith('http') ? "_blank" : undefined}
                  rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="w-16 h-16 flex items-center justify-center border-2 border-white/20 hover:border-primary hover:text-primary transition-all duration-300 hover:rotate-6 hover:scale-110 bg-white/5"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>

            <div className="pt-10 border-t border-white/10 text-xs font-mono text-white/40 uppercase tracking-widest">
              BASE: SÃO PAULO / REMOTE_GLOBAL<br />
              TIMEZONE: GMT-3
            </div>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <input 
                type="text" 
                placeholder="SEU_NOME"
                className="w-full bg-white/5 border-2 border-white/10 px-6 py-4 text-white font-headline text-lg uppercase tracking-widest focus:border-primary focus:outline-none focus:bg-white/10 transition-all placeholder:text-white/20"
              />
            </div>
            <div className="relative">
              <input 
                type="email" 
                placeholder="SEU_EMAIL"
                className="w-full bg-white/5 border-2 border-white/10 px-6 py-4 text-white font-headline text-lg uppercase tracking-widest focus:border-primary focus:outline-none focus:bg-white/10 transition-all placeholder:text-white/20"
              />
            </div>
            <div className="relative">
              <textarea 
                rows={4}
                placeholder="A_MENSAGEM"
                className="w-full bg-white/5 border-2 border-white/10 px-6 py-4 text-white font-headline text-lg uppercase tracking-widest focus:border-primary focus:outline-none focus:bg-white/10 transition-all placeholder:text-white/20"
              />
            </div>
            <button 
              className="group relative w-full py-6 bg-primary text-white font-headline text-2xl font-black uppercase overflow-hidden transition-all active:scale-95"
            >
              <span className="relative z-10 flex items-center justify-center gap-4">
                ENVIAR_MENSAGEM <Send size={24} />
              </span>
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-0" />
              {/* Noise overlay effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
              }} />
            </button>
          </form>
        </div>
      </div>

      {/* Footer Text */}
      <div className="mt-40 text-center border-t border-white/10 py-10">
        <p className="font-mono text-xs text-white/30 uppercase tracking-[0.5em]">
          SEM REVOLUÇÃO SEM GLITCH. DESIGNED BY ROSARIO.
        </p>
      </div>
    </section>
  );
}

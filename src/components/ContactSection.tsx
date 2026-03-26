
"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Instagram, Linkedin, Twitter, Mail, Send, Loader2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const SOCIAL_LINKS = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/vinirosario/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/vini_rosarioo/", label: "Instagram" },
  { icon: Twitter, href: "https://x.com/vini_rosarioo", label: "Twitter" },
  { icon: Mail, href: "mailto:jvinicius449@gmail.com", label: "Email" },
];

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        variant: "destructive",
        title: "DADOS INCOMPLETOS",
        description: "Preencha todos os campos para transmitir sua mensagem.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulação de envio (Processando sinal...)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "SINAL TRANSMITIDO",
        description: "Sua mensagem foi enviada com sucesso para o Vini.",
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      toast({
        variant: "destructive",
        title: "ERRO DE CONEXÃO",
        description: "Não foi possível transmitir os dados. Tente novamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Entre em contato comigo a partir das redes sociais ou o e-mail abaixo.
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
              BASE: SÃO PAULO / REMOTE GLOBAL<br />
              TIMEZONE: GMT-3
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input 
                type="text" 
                placeholder="SEU NOME"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/5 border-2 border-white/10 px-6 py-4 text-white font-headline text-lg uppercase tracking-widest focus:border-primary focus:outline-none focus:bg-white/10 transition-all placeholder:text-white/20"
              />
            </div>
            <div className="relative">
              <input 
                type="email" 
                placeholder="SEU EMAIL"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/5 border-2 border-white/10 px-6 py-4 text-white font-headline text-lg uppercase tracking-widest focus:border-primary focus:outline-none focus:bg-white/10 transition-all placeholder:text-white/20"
              />
            </div>
            <div className="relative">
              <textarea 
                rows={4}
                placeholder="A MENSAGEM"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/5 border-2 border-white/10 px-6 py-4 text-white font-headline text-lg uppercase tracking-widest focus:border-primary focus:outline-none focus:bg-white/10 transition-all placeholder:text-white/20"
              />
            </div>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full py-6 bg-primary text-white font-headline text-2xl font-black uppercase overflow-hidden transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 flex items-center justify-center gap-4">
                {isSubmitting ? (
                  <>ENVIANDO... <Loader2 size={24} className="animate-spin" /></>
                ) : (
                  <>ENVIAR MENSAGEM <Send size={24} /></>
                )}
              </span>
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-0" />
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

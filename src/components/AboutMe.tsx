import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function AboutMe() {
  const profileImage = PlaceHolderImages.find(img => img.id === 'vini-profile');

  return (
    <section id="about" className="relative min-h-screen py-20 px-6 flex flex-col lg:flex-row items-center justify-center gap-12 overflow-hidden">
      {/* Background Text Overlay */}
      <div className="absolute -top-10 -left-10 text-[20rem] font-headline font-black text-white/[0.02] select-none pointer-events-none uppercase">
        VINI
      </div>
      
      <div className="relative w-full max-w-md lg:w-1/2 group">
        <div className="absolute -inset-4 bg-primary/20 -rotate-3 group-hover:rotate-0 transition-transform duration-500 paper-tear" />
        <div className="absolute -inset-2 bg-secondary/30 rotate-2 group-hover:rotate-0 transition-transform duration-500 paper-tear" />
        
        <div className="relative aspect-[4/5] overflow-hidden paper-tear halftone border-4 border-white">
          <Image
            src={profileImage?.imageUrl || ""}
            alt={profileImage?.description || "Vini Rosario"}
            fill
            className="object-cover grayscale contrast-125 brightness-110 group-hover:grayscale-0 transition-all duration-700"
            data-ai-hint={profileImage?.imageHint}
          />
        </div>
        
        {/* Collage elements */}
        <div className="absolute -bottom-6 -right-6 bg-accent text-background px-4 py-2 font-headline font-bold -rotate-6 sticker">
          #RETENTION_MASTER
        </div>
        <div className="absolute -top-8 -left-8 bg-primary text-white px-4 py-2 font-headline font-bold rotate-12 sticker">
          new project
        </div>
      </div>

      <div className="w-full lg:w-1/2 max-w-2xl space-y-8 z-10">
        <h2 className="font-headline text-5xl md:text-7xl font-bold uppercase tracking-tight text-white">
          <span className="text-primary block">SOBRE</span>
          <span className="inline-block relative">
            MIM
            <span className="absolute -bottom-2 left-0 w-full h-4 bg-secondary/40 -z-10" />
          </span>
        </h2>
        
        <div className="space-y-6 font-body text-lg md:text-xl text-white/80 leading-relaxed">
          <p className="border-l-4 border-primary pl-6">
            Meu nome é José Vinícius Rosário, tenho 20 anos e atuo como editor de vídeo e designer gráfico. Atualmente, estudo Ciência da Computação na Universidade Estadual de Santa Cruz (UESC), o que me traz uma base técnica e analítica sólida para o meu trabalho criativo.
          </p>
          <p>
            Tenho experiência na edição de vídeos curtos e longos, sempre com foco em ritmo e retenção, além de produzir highlights dinâmicos. No design gráfico, desenvolvo peças com forte apelo visual, trabalhando com tipografias, criação de logos, banners e thumbnails focadas em atrair a atenção do público.
          </p>
          <p>
            Meu objetivo é unir a lógica da tecnologia com a criatividade do audiovisual para entregar projetos autênticos, bem estruturados e de alto impacto de forma rápida e com qualidade.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <span className="px-3 py-1 bg-white/10 text-white font-mono text-xs border border-white/20">#COMPUTER_SCIENCE</span>
            <span className="px-3 py-1 bg-white/10 text-white font-mono text-xs border border-white/20">#VIDEO_EDITOR</span>
            <span className="px-3 py-1 bg-white/10 text-white font-mono text-xs border border-white/20">#GRAPHIC_DESIGN</span>
          </div>
        </div>
      </div>
    </section>
  );
}


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
          #STORYTELLER
        </div>
        <div className="absolute -top-8 -left-8 bg-primary text-white px-4 py-2 font-headline font-bold rotate-12 sticker">
          // ARTIST //
        </div>
      </div>

      <div className="w-full lg:w-1/2 max-w-2xl space-y-8 z-10">
        <h2 className="font-headline text-5xl md:text-7xl font-bold uppercase tracking-tight text-white">
          <span className="text-primary block">ABOUT</span>
          <span className="inline-block relative">
            MYSELF
            <span className="absolute -bottom-2 left-0 w-full h-4 bg-secondary/40 -z-10" />
          </span>
        </h2>
        
        <div className="space-y-6 font-body text-xl text-white/80 leading-relaxed">
          <p className="border-l-4 border-primary pl-6">
            I am a visual alchemist blending urban textures with digital precision. My work is a chaotic celebration of the imperfect, where glitch isn't an error—it's the medium.
          </p>
          <p>
            Based in the vibrant intersections of culture and technology, I craft digital experiences that demand attention. No smooth transitions, no safe colors. Just raw, unfiltered creativity.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <span className="px-3 py-1 bg-white/10 text-white font-mono text-sm border border-white/20">#CREATIVE_DIRECTION</span>
            <span className="px-3 py-1 bg-white/10 text-white font-mono text-sm border border-white/20">#VISUAL_ZINE</span>
            <span className="px-3 py-1 bg-white/10 text-white font-mono text-sm border border-white/20">#URBAN_AESTHETIC</span>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

const sections = [
  { 
    isHero: true,
    title: "AM GROUP",
    subtitle: "GLOBAL ARCHITECTURAL EXCELLENCE",
    description: "We define modern living through sculptural form and emotional resonance.",
    bg: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop"
  },
  { 
    title: "CASA DOHA", 
    location: "DOHA, QATAR",
    description: "A geometric marvel standing against the desert horizon, where light and shadow perform a daily ritual.",
    bg: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    title: "CASA ANTIBES", 
    location: "ANTIBES, FRANCE",
    description: "Seamlessly integrating the azure of the Mediterranean with modernist limestone architecture.",
    bg: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop"
  },
  { 
    title: "CASA FERRARA", 
    location: "FERRARA, ITALY",
    description: "A celebration of volume and materiality in the heart of Northern Italy's architectural heritage.",
    bg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
  },
];

export default function StackCards() {
  const container = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    const cards = cardsRef.current;

    cards.forEach((card, i) => {
      const isLast = i === cards.length - 1;

      // The Stacking / Wiping Logic
      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        end: () => (isLast ? "bottom bottom" : "+=100%"), // Pin each section for one full viewport height
        pin: true,
        pinSpacing: false, // This creates the 'wipe' effect where they stack
        scrub: true,
      });

      // The 'Shrink and Darken' effect for the PREVIOUS card
      // As the NEXT card comes up, this card scales down and fades out
      if (!isLast) {
        gsap.to(card, {
          scale: 0.9,
          filter: "brightness(0.3)", // Darkens the image
          ease: "none",
          scrollTrigger: {
            trigger: cards[i + 1], // Start shrinking when the NEXT card starts coming in
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        });
      }
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <section ref={container} className="w-full bg-black">
      {sections.map((section, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) cardsRef.current[i] = el;
          }}
          className="h-screen w-full relative overflow-hidden flex items-center justify-center"
          style={{ zIndex: i + 1 }}
        >
          {/* Background Image */}
          <img
            src={section.bg}
            alt={section.title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Initial Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="relative z-10 w-full max-w-7xl px-10 text-center md:text-left">
            {section.isHero ? (
              <div className="flex flex-col items-center justify-center text-center">
                <span className="text-amber-500/80 tracking-[0.4em] text-xs uppercase mb-8 font-medium">
                  {section.subtitle}
                </span>
                <h1 className="text-white text-7xl md:text-9xl font-extralight tracking-tighter leading-none mb-10">
                  AM <span className="italic font-serif">Group</span>
                </h1>
                <p className="text-neutral-400 max-w-xl text-lg font-light leading-relaxed mb-12">
                  {section.description}
                </p>
                <div className="absolute bottom-12 flex flex-col items-center opacity-40">
                  <span className="text-[10px] uppercase tracking-[0.2em] mb-4">Scroll to explore</span>
                  <div className="w-[1px] h-16 bg-gradient-to-b from-neutral-400 to-transparent" />
                </div>
              </div>
            ) : (
              <div className="flex flex-col justify-end h-full py-20">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-8 h-[1px] bg-amber-500" />
                  <p className="text-[10px] tracking-[0.4em] text-amber-500 font-bold uppercase">
                    {section.location}
                  </p>
                </div>
                <h2 className="text-5xl md:text-8xl font-extralight tracking-tighter mb-6">
                  {section.title}
                </h2>
                <p className="text-neutral-300 max-w-lg text-lg font-light leading-relaxed">
                  {section.description}
                </p>
                <button className="mt-8 self-start flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium border-b border-white/20 pb-2 hover:border-white transition-colors duration-300">
                  View Project Details
                </button>
              </div>
            )}
          </div>

          {/* Project Number (for non-hero sections) */}
          {!section.isHero && (
            <div className="absolute top-10 right-10 text-white/20 font-serif italic text-4xl">
              0{i}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const sections = [
  {
    title: "CASA DOHA",
    location: "DOHA, QATAR",
    description:
      "A geometric marvel standing against the desert horizon, where light and shadow perform a daily ritual.",
    bg: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "CASA ANTIBES",
    location: "ANTIBES, FRANCE",
    description:
      "Seamlessly integrating the azure of the Mediterranean with modernist limestone architecture.",
    bg: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
  },
  {
    title: "CASA FERRARA",
    location: "FERRARA, ITALY",
    description:
      "A celebration of volume and materiality in the heart of Northern Italy's architectural heritage.",
    bg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  },
];

const OFFSET = 30; // px each card peeks below the previous

export default function StackCards() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(
    () => {
      const cards = cardsRef.current;

      cards.forEach((card, i) => {
        if (i === cards.length - 1) return; // last card never shrinks

        // Shrink + darken this card as the NEXT card slides over it
        gsap.to(card, {
          scale: 0.94 - i * 0.01, // each older card is a little smaller
          filter: "brightness(0.35)",
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: cards[i + 1],
            start: "top 100%", // when next card bottom enters viewport
            end: "top 0%",     // when next card top hits viewport top
            scrub: true,
          },
        });
      });

      ScrollTrigger.refresh();
    },
    { scope: wrapperRef }
  );

  return (
    /*
     * The wrapper must be tall enough to give scroll room for each card.
     * Each card is 100vh, pinned with CSS `sticky`. The wrapper height
     * is cards.length * 100vh so the browser scrolls through each one.
     */
    <div
      ref={wrapperRef}
      style={{ height: `${sections.length * 100}vh` }}
      className="relative"
    >
      {sections.map((section, i) => (
        <div
          key={i}
          ref={(el) => { if (el) cardsRef.current[i] = el; }}
          style={{
            top: `${i * OFFSET}px`,     // staircase offset
            zIndex: i + 10,
            willChange: "transform, filter",
          }}
          className="sticky h-screen w-full overflow-hidden"
        >
          {/* Background */}
          <img
            src={section.bg}
            alt={section.title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/45" />

          {/* Top thin line that shows the "stack peek" */}
          {i > 0 && (
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/10" />
          )}

          {/* Content — positioned bottom-left, matching the Arcca layout */}
          <div className="absolute bottom-0 left-0 p-10 md:p-16 z-10">
            <p className="text-white/50 text-[10px] tracking-[0.4em] mb-5 uppercase">
              Featured Project
            </p>
            <h2 className="text-white font-extralight tracking-tight leading-none mb-8 uppercase"
              style={{ fontSize: "clamp(3rem, 10vw, 7rem)" }}>
              {section.title.split(" ")[0]}
              <br />
              <span style={{ fontStyle: "italic", fontFamily: "Georgia, serif" }}>
                {section.title.split(" ").slice(1).join(" ")}
              </span>
            </h2>
            <button className="px-7 py-3 border border-white/30 rounded-full text-[10px] tracking-widest text-white hover:bg-white hover:text-black transition-all duration-300">
              VIEW
            </button>
          </div>

          {/* Project counter — top right, matching the Arcca layout */}
          <div className="absolute top-8 right-10 text-white/70 text-sm font-light tracking-widest">
            {i + 1} / {sections.length}
          </div>
        </div>
      ))}
    </div>
  );
}
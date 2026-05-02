"use client";

import { useRef } from "react";

const sections = [
  {
    title: "CASA DOHA",
    location: "QATAR",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "CASA ANTIBES",
    location: "FRANCE",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "CASA FERRARA",
    location: "ITALY",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
  }
];

const STACK_GAP = 90; // Increased distance between stopping images

export default function StackCards() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={containerRef} 
      className="relative bg-[#D2C4B1]"
      style={{ height: `${sections.length * 100 + 20}vh` }} // Extra height for the final stack to rest
    >
      {sections.map((section, i) => (
        <div
          key={i}
          style={{ 
            top: `${STACK_GAP * i}px`, // 1st card (i=0) hits top: 0
            zIndex: i + 10 
          }}
          className="sticky h-[80vh] w-full overflow-hidden"
        >
          <div className="relative w-full h-full">
            {/* Background Image */}
            <img
              src={section.image}
              alt={section.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Content: Top Right Counter */}
            <div className="absolute top-12 right-12 text-white/80 font-serif text-2xl tracking-widest">
              {i + 1} / {sections.length}
            </div>

            {/* Content: Bottom Left Text */}
            <div className="absolute bottom-24 left-12 md:left-24 max-w-2xl">
              <span className="text-white/60 text-[10px] tracking-[0.4em] uppercase font-sans mb-4 block">
                FEATURED PROJECT
              </span>
              <h2 className="text-white text-5xl md:text-9xl font-serif tracking-tight leading-[0.9] uppercase">
                {section.title}
              </h2>
            </div>

            {/* Content: Bottom Right Button */}
            <div className="absolute bottom-24 right-12 md:right-24">
              <button 
                data-cursor-expand="true"
                className="px-12 py-4 border border-white/40 rounded-full text-[11px] tracking-[0.3em] text-white hover:bg-white hover:text-black transition-all duration-500 uppercase font-sans backdrop-blur-md"
              >
                VIEW
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
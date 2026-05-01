"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const baseProjects = [
  {
    title: "CASA 88",
    location: "Miami Dade",
    tag: "IN DEVELOPMENT",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop"
  },
  {
    title: "CASA DOHA",
    location: "Pinecrest",
    tag: "RESIDENTIAL",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "CASA ANTIBES",
    location: "France",
    tag: "INTERIOR DESIGN",
    image: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?q=80&w=2070&auto=format&fit=crop"
  }
];

// Triplicate for seamless loop
const projects = [...baseProjects, ...baseProjects, ...baseProjects];

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none none"
      }
    });

    // Logo & Header reveal
    tl.fromTo(".portfolio-header-item", 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "expo.out" }
    );

    // Cards reveal with sexy cinematic wipe
    tl.fromTo(".project-card-wrapper",
      { clipPath: "inset(0% 100% 0% 0%)", x: 50, opacity: 0 },
      { 
        clipPath: "inset(0% 0% 0% 0%)", 
        x: 0, 
        opacity: 1, 
        duration: 1.8, 
        stagger: 0.2, 
        ease: "power4.out" 
      },
      "-=0.5"
    );

    // Subtle parallax on card images
    gsap.utils.toArray<HTMLElement>(".project-card-img").forEach((img) => {
      gsap.to(img, {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });

  }, { scope: sectionRef });

  // Initialize scroll to the middle set of projects
  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = 480; 
      scrollRef.current.scrollLeft = cardWidth * baseProjects.length;
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;

    const { scrollLeft, clientWidth } = scrollRef.current;
    const cardWidth = 480;
    const scrollAmount = cardWidth;
    
    let newScrollLeft = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;

    // Seamless loop logic
    const singleSetWidth = cardWidth * baseProjects.length;

    if (newScrollLeft < cardWidth) {
      scrollRef.current.scrollLeft += singleSetWidth;
      newScrollLeft += singleSetWidth;
    } 
    else if (newScrollLeft > (singleSetWidth * 2) - clientWidth + cardWidth) {
      scrollRef.current.scrollLeft -= singleSetWidth;
      newScrollLeft -= singleSetWidth;
    }

    scrollRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} className="relative z-20 bg-[#D2C4B1] py-24 pb-32 overflow-hidden border-t border-[#2A2A2A]/5">
      <div className="w-full flex flex-col md:flex-row px-8 md:px-20 gap-16 items-start">
        
        {/* Left Content */}
        <div className="w-full md:w-[35%] flex flex-col gap-10 sticky top-32">
          <div className="portfolio-reveal">
             {/* Geometric Plus Logo */}
             <div className="portfolio-header-item w-12 h-12 relative mb-6">
               <svg viewBox="0 0 100 100" className="w-full h-full fill-[#2A2A2A]">
                 <path d="M20,20 L80,20 L80,80 L20,80 Z M30,30 L30,70 L70,70 L70,30 Z" fillOpacity="0.2" />
                 <rect x="45" y="10" width="10" height="80" />
                 <rect x="10" y="45" width="80" height="10" />
               </svg>
             </div>

             <span className="portfolio-header-item block text-[#2A2A2A]/60 tracking-[0.3em] text-[11px] font-sans font-medium mb-4 uppercase">
               DESIGN, ARCHITECTURE, <br /> INTERIOR DESIGN
             </span>
             
             <h2 className="portfolio-header-item text-6xl md:text-[80px] font-sans font-light tracking-tight text-[#2A2A2A] mb-8 uppercase">
               PORTFOLIO
             </h2>
             
             <p className="portfolio-header-item text-[#2A2A2A]/70 text-sm leading-relaxed max-w-sm mb-10 font-sans">
               We create refined, functional spaces where aesthetics meet purpose. Each project is a dialogue between form and feeling — crafted with precision.
             </p>

             <div className="portfolio-header-item">
               <button className="group relative w-fit px-10 py-4 bg-[#2A2A2A] text-[#D2C4B1] rounded-full overflow-hidden text-[11px] tracking-[0.25em] font-medium transition-all duration-500">
                 <span className="relative z-10 transition-colors duration-500 group-hover:text-[#2A2A2A]">VIEW ALL</span>
                 <div className="absolute inset-0 bg-[#F5F1E6] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-600 ease-[0.76, 0, 0.24, 1]" />
               </button>
             </div>
          </div>
        </div>

        {/* Right Content: Carousel */}
        <div className="w-full md:w-[65%] relative group/carousel mt-12 md:mt-0">
          
          {/* Navigation Arrows - High-End Floating Style */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between z-30 pointer-events-none -mx-4 md:-mx-10">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#F5F1E6]/90 backdrop-blur-md flex items-center justify-center text-[#2A2A2A] pointer-events-auto hover:bg-[#2A2A2A] hover:text-[#F5F1E6] transition-all duration-500 shadow-xl border border-black/5 active:scale-90"
            >
              <ChevronLeft size={28} strokeWidth={1.5} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#F5F1E6]/90 backdrop-blur-md flex items-center justify-center text-[#2A2A2A] pointer-events-auto hover:bg-[#2A2A2A] hover:text-[#F5F1E6] transition-all duration-500 shadow-xl border border-black/5 active:scale-90"
            >
              <ChevronRight size={28} strokeWidth={1.5} />
            </button>
          </div>

          <div 
            ref={scrollRef}
            className="flex gap-6 md:gap-10 overflow-x-auto no-scrollbar pb-10 cursor-grab active:cursor-grabbing snap-x snap-mandatory"
          >
            {projects.map((project, i) => (
              <div 
                key={i}
                className="project-card-wrapper min-w-[85%] md:min-w-[420px] aspect-[4/5.5] relative group overflow-hidden bg-[#2A2A2A]/5 snap-center"
              >
                {/* Parallax Image Container */}
                <div className="absolute inset-[-20px] project-card-img">
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-700" />

                {/* Tag */}
                <div className="absolute top-6 right-6 bg-[#D2C4B1]/90 backdrop-blur-md px-4 py-1.5 rounded-sm">
                  <span className="text-[9px] tracking-[0.2em] font-bold text-[#2A2A2A] uppercase">{project.tag}</span>
                </div>

                {/* Project Info */}
                <div className="absolute bottom-10 left-10 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                  <h3 className="text-2xl font-light tracking-wide mb-1 uppercase leading-none">{project.title}</h3>
                  <div className="h-[1px] w-0 group-hover:w-full bg-white/40 mb-3 transition-all duration-700 ease-out" />
                  <p className="text-white/60 text-[9px] tracking-[0.3em] uppercase">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

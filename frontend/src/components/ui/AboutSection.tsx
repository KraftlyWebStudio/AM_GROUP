"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    // A simple timeline that plays every time the section enters
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%", // When the top of the section hits 75% of viewport height
        toggleActions: "restart none restart none",
      }
    });

    // Logo Animation
    tl.fromTo(logoRef.current, 
      { opacity: 0, scale: 0.8, rotate: -10 },
      { opacity: 1, scale: 1, rotate: 0, duration: 1.2, ease: "expo.out" },
      0
    );

    // Text Reveal Animation (using the .reveal-item class)
    tl.fromTo(textContainerRef.current?.querySelectorAll(".reveal-item") || [],
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: "expo.out" },
      0.1
    );

    // Image reveal animation - the "coming left" cinematic slow effect
    tl.fromTo(imageWrapperRef.current,
      { clipPath: "inset(0% 0% 0% 100%)", scale: 1.1, x: 80, opacity: 0 },
      { clipPath: "inset(0% 0% 0% 0%)", scale: 1, x: 0, opacity: 1, duration: 3.5, ease: "power3.out" },
      0.2
    );

    // Button Animation
    tl.fromTo(buttonRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "expo.out" },
      0.6
    );

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative z-20 h-auto bg-[#D2C4B1] py-24 overflow-hidden">
      <div className="w-full flex flex-col md:flex-row items-center">
        
        {/* Left Content: Text */}
        <div className="w-full md:w-[40%] flex justify-start px-8 md:pl-20 md:pr-12">
          <div className="max-w-md w-full flex flex-col gap-12">
            
            {/* Geometric Logo */}
            <div ref={logoRef} className="w-14 h-14 grid grid-cols-2 grid-rows-2 border border-[#2A2A2A]/20">
              <div className="border-[0.5px] border-[#2A2A2A]/20 relative flex items-center justify-center p-2">
                 <div className="w-full h-full border-t border-l border-[#2A2A2A]" />
              </div>
              <div className="border-[0.5px] border-[#2A2A2A]/20 relative flex items-center justify-center p-2">
                 <div className="w-full h-full border-t border-r border-[#2A2A2A]" />
              </div>
              <div className="border-[0.5px] border-[#2A2A2A]/20 relative flex items-center justify-center p-2">
                 <div className="w-full h-full border-b border-l border-[#2A2A2A]" />
              </div>
              <div className="border-[0.5px] border-[#2A2A2A]/20 relative flex items-center justify-center p-2">
                 <div className="w-full h-full border-b border-r border-[#2A2A2A]" />
              </div>
            </div>

            {/* Text Content */}
            <div ref={textContainerRef} className="flex flex-col gap-8">
              <div className="overflow-hidden">
                <span className="reveal-item block text-[#2A2A2A]/40 tracking-[0.4em] text-[10px] font-sans font-medium">
                  WHY FLORIDA?
                </span>
              </div>

              <div className="overflow-hidden">
                <h2 className="reveal-item text-4xl md:text-[64px] font-sans font-light leading-[0.95] text-[#2A2A2A] uppercase tracking-[-0.03em]">
                  We shape <br />
                  the essence <br />
                  of living
                </h2>
              </div>

              <div className="overflow-hidden">
                <p className="reveal-item text-[#2A2A2A]/60 text-base leading-relaxed max-w-sm mt-1 font-sans font-light">
                  We envision spaces that are not just lived in, but felt — where every element has been curated to inspire connection, serenity, and a profound sense of belonging.
                </p>
              </div>
            </div>

            {/* Button */}
            <div ref={buttonRef}>
              <button className="group relative w-fit px-12 py-5 bg-[#2A2A2A] text-[#D2C4B1] rounded-full overflow-hidden text-[11px] tracking-[0.25em] font-medium">
                <span className="relative z-10 transition-colors duration-500 group-hover:text-[#2A2A2A]">PROJECTS</span>
                <div className="absolute inset-0 bg-[#D2C4B1] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.76, 0, 0.24, 1]" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Content: Image */}
        <div className="w-full md:w-[60%] h-[40vh] md:h-[65vh] mt-10 md:mt-0 relative overflow-hidden">
          <div ref={imageWrapperRef} className="w-full h-full relative">
            <Image 
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop"
              alt="Luxury Villa"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}

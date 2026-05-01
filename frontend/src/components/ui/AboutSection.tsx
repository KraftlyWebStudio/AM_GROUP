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
    <section ref={sectionRef} className="relative z-10 h-auto bg-[#D2C4B1] py-10 md:py-16 overflow-hidden">
      <div className="w-full flex flex-col md:flex-row items-center">
        
        {/* Left Content: Text */}
        <div className="w-full md:w-[45%] flex justify-start px-8 md:pl-20 md:pr-12">
          <div className="max-w-lg w-full flex flex-col gap-8">
            
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
            <div ref={textContainerRef} className="flex flex-col gap-6">
              <div className="overflow-hidden">
                <span className="reveal-item block text-[#2A2A2A]/40 tracking-[0.4em] text-[10px] font-sans font-medium uppercase">
                  DRIVEN BY EXCELLENCE
                </span>
              </div>
 
              <div className="overflow-hidden">
                <h2 className="reveal-item text-4xl md:text-[50px] font-sans font-light leading-[1.1] text-[#2A2A2A] uppercase tracking-[-0.03em]">
                  Multidisciplinary <br />
                  Solutions for <br />
                  Global Growth
                </h2>
              </div>
 
              <div className="overflow-hidden">
                <p className="reveal-item text-[#2A2A2A]/60 text-base leading-relaxed max-w-md mt-1 font-sans font-light">
                  AM Group brings together Consulting, Design, and Data Analytics under one name. We are dedicated to empowering businesses globally.
                </p>
              </div>
            </div>
 
            {/* Stats Summary */}
            <div className="reveal-item flex gap-12 mt-2 border-t border-[#2A2A2A]/10 pt-6">
              <div>
                <span className="block text-2xl font-sans font-light text-[#2A2A2A]">210+</span>
                <span className="text-[8px] tracking-[0.2em] text-[#2A2A2A]/40 uppercase">Clients</span>
              </div>
              <div>
                <span className="block text-2xl font-sans font-light text-[#2A2A2A]">105+</span>
                <span className="text-[8px] tracking-[0.2em] text-[#2A2A2A]/40 uppercase">Projects</span>
              </div>
              <div>
                <span className="block text-2xl font-sans font-light text-[#2A2A2A]">20+</span>
                <span className="text-[8px] tracking-[0.2em] text-[#2A2A2A]/40 uppercase">Years</span>
              </div>
            </div>
 
            {/* Button */}
            <div ref={buttonRef}>
              <button className="group relative w-fit px-10 py-4 bg-[#2A2A2A] text-[#D2C4B1] rounded-full overflow-hidden text-[10px] tracking-[0.25em] font-medium">
                <span className="relative z-10 transition-colors duration-500 group-hover:text-[#2A2A2A]">EXPLORE PROJECTS</span>
                <div className="absolute inset-0 bg-[#D2C4B1] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.76, 0, 0.24, 1]" />
              </button>
            </div>
          </div>
        </div>
 
        {/* Right Content: Image */}
        <div className="w-full md:w-[55%] h-[30vh] md:h-[40vh] mt-10 md:mt-0 relative overflow-hidden">
          <div ref={imageWrapperRef} className="w-full h-full relative">
            <Image 
              src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop"
              alt="Architecture"
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

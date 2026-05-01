"use client";

import { useRef } from "react";
import { Play } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

export default function VideoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!contentRef.current) return;

    gsap.fromTo(contentRef.current, 
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative z-10 w-full h-[50vh] md:h-[60vh] overflow-hidden bg-black flex items-center justify-center">
      
      {/* Centered Video Logo / Play Button */}
      <div ref={contentRef} className="relative z-10">
        <div className="group cursor-pointer relative">
          {/* Animated Rings */}
          <div className="absolute inset-0 rounded-full border border-white/10 scale-150 animate-pulse" />
          <div className="absolute inset-0 rounded-full border border-white/5 scale-[2] animate-pulse delay-700" />
          
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm transition-all duration-700 group-hover:bg-white group-hover:border-white">
            <Play 
              size={32} 
              className="text-white fill-white transition-colors duration-700 group-hover:text-black group-hover:fill-black translate-x-1" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

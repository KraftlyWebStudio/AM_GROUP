"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

export default function VideoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    if (!videoRef.current) return;

    gsap.to(videoRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      y: "20%",
      ease: "none",
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-black">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-[-20%] left-0 w-full h-[140%] object-cover opacity-70"
      >
        <source 
          src="https://player.vimeo.com/external/494163967.hd.mp4?s=7b94924c7f078d46422b406b1248677c770c3258&profile_id=175" 
          type="video/mp4" 
        />
      </video>
      
      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h3 className="text-white text-3xl md:text-5xl font-serif tracking-[0.2em] uppercase mb-4 opacity-80">
          Shaping the Future
        </h3>
        <div className="w-24 h-[1px] bg-white/40" />
      </div>
    </section>
  );
}

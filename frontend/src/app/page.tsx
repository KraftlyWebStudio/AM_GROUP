"use client";

import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IntroAnimation from "@/components/ui/IntroAnimation";
import HeroSection from "@/components/ui/HeroSection";
import CustomCursor from "../components/ui/CustomCursor";
import StackCards from "@/components/ui/StackCards";
import Footer from "@/components/layouts/footer";

export default function Home() {
  const [introStarted, setIntroStarted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!introStarted || !heroRef.current) return;

    // Shrink + darken the Hero as the first StackCard slides over it
    gsap.to(heroRef.current, {
      scale: 0.94,
      filter: "brightness(0.35)",
      transformOrigin: "top center",
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        // start when the hero top is at viewport top + 40% scrolled
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, [introStarted]);

  return (
    <main className="bg-black relative">
      <CustomCursor />

      {/* Hero is sticky so the first card slides over it */}
      <div
        ref={heroRef}
        style={{ top: 0, zIndex: 1, willChange: "transform, filter" }}
        className="sticky h-screen w-full"
      >
        <HeroSection isVisible={introStarted} />
      </div>

      <IntroAnimation
        onStartReveal={() => setIntroStarted(true)}
        onComplete={() => {}}
      />

      {/* Stack sits on top of the hero via z-index inside */}
      <StackCards />

      <Footer />
    </main>
  );
}

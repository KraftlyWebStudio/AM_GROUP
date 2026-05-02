"use client";

import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import IntroAnimation from "@/components/ui/IntroAnimation";
import HeroSection from "@/components/ui/HeroSection";
import AboutSection from "@/components/ui/AboutSection";
import PortfolioSection from "@/components/ui/PortfolioSection";
import VideoSection from "@/components/ui/VideoSection";
import CustomCursor from "@/components/ui/CustomCursor";
import StackCards from "@/components/ui/StackCards";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/footer";

export default function Home() {
  const [introStarted, setIntroStarted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!introStarted || !heroRef.current) return;

    // Shrink + darken the Hero as the AboutSection/StackCards slide over it
    gsap.to(heroRef.current, {
      scale: 0.94,
      filter: "brightness(0.35)",
      transformOrigin: "top center",
      ease: "none",
      scrollTrigger: {
        trigger: "main", // Changed to main so it shrinks as soon as you scroll
        start: "top top",
        end: "h-screen",
        scrub: true,
      },
    });
  }, [introStarted]);

  return (
    <main className="bg-black relative">
      <CustomCursor />
      {/* Hero is sticky so next sections slide over it */}
      <div
        ref={heroRef}
        style={{ top: 0, zIndex: 1, willChange: "transform, filter" }}
        className="sticky h-screen w-full"
      >
        <Navbar isVisible={introStarted} />
        <HeroSection isVisible={introStarted} />
      </div>

      <AboutSection />
      <VideoSection />
      <PortfolioSection />

      <IntroAnimation
        onStartReveal={() => setIntroStarted(true)}
        onComplete={() => {}}
      />

      <StackCards />

      <Footer />
    </main>
  );
}

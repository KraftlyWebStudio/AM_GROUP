"use client";

import { useState } from "react";
import IntroAnimation from "@/components/ui/IntroAnimation";
import HeroSection from "@/components/ui/HeroSection";

export default function Home() {
  const [introStarted, setIntroStarted] = useState(false);

  return (
    <main className="w-full h-screen bg-black overflow-hidden relative">
      <HeroSection isVisible={introStarted} />
      <IntroAnimation onStartReveal={() => setIntroStarted(true)} onComplete={() => {}} />
    </main>
  );
}

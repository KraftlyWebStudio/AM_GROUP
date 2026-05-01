"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  isVisible: boolean;
}

export default function HeroSection({ isVisible }: HeroSectionProps) {
  const [animateState, setAnimateState] = useState("hidden");
  const [hoverTrigger, setHoverTrigger] = useState(0);

  useEffect(() => {
    if (isVisible) {
      // Small delay after intro reveal starts to ensure smooth visual handoff
      const timer = setTimeout(() => setAnimateState("visible"), 400);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Image with Ken Burns effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={animateState === "visible" ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 2.5, ease: [0.25, 1, 0.5, 1] }}
      >
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url("/bg-image.png")' }}
        />
        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </motion.div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-8 py-8 md:px-12">
        {/* Left Side: Portfolio Button with Water Fill */}
        <motion.div
          initial="hidden"
          animate={animateState}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex-1"
        >
          <button className="group relative overflow-hidden border border-[#F5F1E6]/40 text-[#F5F1E6] transition-colors duration-500 rounded-full px-10 py-3 text-[11px] tracking-[0.25em] font-sans backdrop-blur-sm">
            <div className="absolute inset-0 bg-[#F5F1E6] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.85, 0, 0.15, 1]" />
            <span className="relative z-10 group-hover:text-black transition-colors duration-500">
              OUR PORTFOLIO
            </span>
          </button>
        </motion.div>

        {/* Center: Brand Logo */}
        <motion.div
          initial="hidden"
          animate={animateState}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 }
          }}
          transition={{ duration: 1.5, delay: 0.7 }}
          className="flex-1 flex justify-center"
        >
          <h1 className="text-3xl md:text-5xl font-serif tracking-[0.5em] text-[#F5F1E6] cursor-default whitespace-nowrap">
            AM GROUP
          </h1>
        </motion.div>

        {/* Right Side: EST and Menu */}
        <motion.div
          initial="hidden"
          animate={animateState}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex-1 flex items-center justify-end gap-10"
        >
          <span className="text-[10px] tracking-[0.3em] text-[#F5F1E6]/80 hidden md:block font-sans">EST — 2020</span>
          <motion.button 
            className="flex flex-col gap-[6px] relative w-8 py-2"
            onMouseEnter={() => setHoverTrigger(prev => prev + 1)}
            data-cursor-ignore="true"
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="w-full h-[1px] relative overflow-hidden">
                <motion.div 
                  key={`${i}-${hoverTrigger}`} // Restarts the animation on each hover
                  className="w-full h-full bg-[#F5F1E6]"
                  initial={{ x: "0%" }}
                  animate={hoverTrigger > 0 ? { x: ["0%", "110%", "-110%", "0%"] } : {}}
                  transition={{ 
                    duration: 0.6,
                    delay: i * 0.05,
                    times: [0, 0.4, 0.4, 1],
                    ease: [0.76, 0, 0.24, 1]
                  }}
                />
              </div>
            ))}
          </motion.button>
        </motion.div>
      </header>
      
      {/* Navbar Underline Effect */}
      <motion.div
        className="relative z-10 h-[0.5px] bg-[#F5F1E6]/20 w-full"
        initial="hidden"
        animate={animateState}
        variants={{
          hidden: { scaleX: 0 },
          visible: { scaleX: 1 }
        }}
        transition={{ duration: 1.8, delay: 0.2, ease: [0.45, 0, 0.55, 1] }}
        style={{ originX: 0 }}
      />

      {/* Bottom Content */}
      <div className="absolute bottom-0 w-full p-8 md:p-12 flex justify-between items-end z-10">
        <motion.div
          initial="hidden"
          animate={animateState}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="max-w-md"
        >
          <p className="text-[#F5F1E6]/70 text-xs md:text-sm leading-relaxed font-light tracking-wide">
            At AM Group, we craft more than spaces — we shape the essence of living. Our vision is to redefine high-end residential development by creating homes that seamlessly intertwine beauty, well-being, and purposeful design.
          </p>
        </motion.div>

        {/* EXPLORE Button with Sliding Line */}
        <motion.div
          initial="hidden"
          animate={animateState}
          variants={{
            hidden: { opacity: 0, x: 20 },
            visible: { opacity: 1, x: 0 }
          }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.button 
            whileHover="hover"
            initial="initial"
            className="group flex flex-col items-end gap-2 text-[#F5F1E6]"
          >
            <motion.div 
              className="flex items-center gap-2"
              variants={{
                initial: { x: 0 },
                hover: { x: -8 }
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <span className="text-[15px] tracking-[0.2em] font-sans">EXPLORE</span>
              <motion.div
                variants={{
                  initial: { x: 0, y: 0 },
                  hover: { x: 0, y: 0 }
                }}
              >
                <ArrowDownRight size={28} strokeWidth={1} />
              </motion.div>
            </motion.div>
            <div className="w-full h-[1px] overflow-hidden">
              <motion.div 
                className="w-full h-full bg-[#F5F1E6]"
                variants={{
                  initial: { x: 0, opacity: 1 },
                  hover: { x: "-100%", opacity: 0 }
                }}
                transition={{ duration: 0.6, ease: [0.45, 0, 0.55, 1] }}
              />
            </div>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

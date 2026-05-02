"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface NavbarProps {
  isVisible?: boolean;
}

export default function Navbar({ isVisible = true }: NavbarProps) {
  const [animateState, setAnimateState] = useState("hidden");
  const [hoverTrigger, setHoverTrigger] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setAnimateState("visible"), 400);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <div className="absolute top-0 left-0 w-full z-50 pointer-events-none">
      <header className="relative z-10 flex items-center justify-between px-8 py-8 md:px-12 pointer-events-auto">
        {/* Left Side: Portfolio Button */}
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
          <button 
            data-cursor-expand="true"
            className="group relative overflow-hidden border border-[#F5F1E6]/40 text-[#F5F1E6] transition-colors duration-500 rounded-full px-10 py-3 text-[11px] tracking-[0.25em] font-sans backdrop-blur-sm"
          >
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
          <h1 className="text-3xl md:text-4xl font-serif tracking-[0.5em] text-[#F5F1E6] cursor-default whitespace-nowrap uppercase">
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
            className="flex flex-col gap-[5px] relative w-6 py-2"
            onMouseEnter={() => setHoverTrigger(prev => prev + 1)}
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="w-full h-[0.5px] relative overflow-hidden">
                <motion.div 
                  key={`${i}-${hoverTrigger}`}
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
      
      {/* Navbar Underline */}
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
    </div>
  );
}

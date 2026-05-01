"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "https://amgroup-gcc.com/wp-content/uploads/2025/10/shutterstock_2302318791-1-scaled-1024x683-1.webp",
    title: "Success in the Middle East",
  },
  {
    image: "https://amgroup-gcc.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-09-26-at-18.26.13_23ba2070-1.webp",
    title: "Heritage Meets Innovation",
  },
  {
    image: "https://amgroup-gcc.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-05-at-19.49.59-1.webp",
    title: "Your Partner in Growth",
  },
  {
    image: "https://amgroup-gcc.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-09-26-at-18.30.32_83b14124.webp",
    title: "Transform Your Vision",
  },
];

interface HeroSectionProps {
  isVisible: boolean;
}

export default function HeroSection({ isVisible }: HeroSectionProps) {
  const [animateState, setAnimateState] = useState("hidden");
  const [hoverTrigger, setHoverTrigger] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setAnimateState("visible"), 400);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  // Auto-play slides
  useEffect(() => {
    if (animateState === "visible") {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6000);
      return () => clearInterval(timer);
    }
  }, [animateState]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Image Slider with Horizontal Slide */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div 
            key={currentSlide}
            className="absolute inset-0"
            initial={{ x: "-100%", opacity: 1 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: "100%", opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url("${slides[currentSlide].image}")` }}
            />
            {/* Cinematic Overlay */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-8 py-8 md:px-12">
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
                    delay: (4 - i) * 0.05,
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

      {/* Main Content Area */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-4">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.h2
            key={currentSlide}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
            className="text-white text-4xl md:text-[68px] font-serif tracking-[0.1em] text-center uppercase leading-[1.1]"
          >
            {slides[currentSlide].title}
          </motion.h2>
        </AnimatePresence>
      </div>

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
          <p className="text-[#F5F1E6]/70 text-xs md:text-[11px] leading-relaxed font-light tracking-[0.2em] uppercase">
            Success in the Middle East. <br />
            We empower businesses across the GCC with integrated solutions that foster sustainable growth and operational efficiency.
          </p>
        </motion.div>

        {/* EXPLORE Button */}
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
            data-cursor-expand="true"
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
              <ArrowDownRight size={28} strokeWidth={1} />
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

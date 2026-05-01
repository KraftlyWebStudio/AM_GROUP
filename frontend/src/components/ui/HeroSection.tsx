"use client";

import { motion } from "framer-motion";
import { Menu, ArrowDownRight } from "lucide-react";

export default function HeroSection({ isVisible }: { isVisible: boolean }) {
  const animateState = isVisible ? "visible" : "hidden";

  return (
    <div className="relative w-full h-screen overflow-hidden text-white">
      {/* Background Image with Overlay */}
      <motion.div
        className="absolute inset-0 z-0 bg-black"
        initial="hidden"
        animate={animateState}
        variants={{
          hidden: { scale: 1.1 },
          visible: { scale: 1 }
        }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/bg-image.png")' }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      </motion.div>

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
          <button className="group relative overflow-hidden border border-[#F5F1E6]/40 text-[#F5F1E6] transition-colors duration-500 rounded-full px-10 py-3 text-[11px] tracking-[0.25em] font-sans backdrop-blur-sm">
            {/* Water Fill Layer */}
            <div className="absolute inset-0 bg-[#F5F1E6] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.85, 0, 0.15, 1]" />
            
            {/* Button Text */}
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
          <button className="flex flex-col gap-1.5 hover:opacity-70 transition-opacity">
            <div className="w-10 h-[1px] bg-[#F5F1E6]" />
            <div className="w-10 h-[1px] bg-[#F5F1E6]" />
            <div className="w-10 h-[1px] bg-[#F5F1E6]" />
          </button>
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
          className="max-w-xl"
          initial="hidden"
          animate={animateState}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <p className="text-white/80 text-sm md:text-base leading-relaxed tracking-wide font-light">
            At AM Group, we craft more than spaces — we shape the essence of living. Our vision is to redefine high-end residential development by creating homes that seamlessly intertwine beauty, well-being, and purposeful design
          </p>
        </motion.div>

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
                  hover: { x: 0, y: 0 } // No movement
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
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

      {/* Side Decorative Elements if needed */}
      <motion.div 
        className="absolute left-8 top-1/2 -translate-y-1/2 w-[1px] h-32 bg-white/20 hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      />
    </div>
  );
}

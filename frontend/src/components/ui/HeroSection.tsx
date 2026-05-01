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
        <motion.div
          initial="hidden"
          animate={animateState}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <button className="border border-white/40 hover:bg-white/10 transition-colors rounded-full px-6 py-2 text-sm tracking-widest backdrop-blur-md">
            OUR PORTFOLIO
          </button>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={animateState}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <h1 className="font-serif text-3xl md:text-4xl tracking-[0.3em] ml-[0.3em]">
            A M G R O U P
          </h1>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={animateState}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex items-center gap-6"
        >
          <span className="text-sm tracking-widest text-white/80 hidden md:block">EST — 2020</span>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors backdrop-blur-md">
            <Menu size={28} strokeWidth={1} />
          </button>
        </motion.div>
      </header>

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
          <button className="flex items-center gap-2 group border-b border-transparent hover:border-white pb-1 transition-all">
            <span className="text-sm tracking-widest">EXPLORE</span>
            <ArrowDownRight size={18} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
          </button>
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

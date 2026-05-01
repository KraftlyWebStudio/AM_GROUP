"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative z-20 h-auto bg-[#D2C4B1] py-16 overflow-hidden">
      <div className="w-full flex flex-col md:flex-row items-center">
        
        {/* Left Content: Text - Shifted more to the left */}
        <div className="w-full md:w-[40%] flex justify-start px-8 md:pl-20 md:pr-12">
          <div className="max-w-md w-full flex flex-col gap-10">
            {/* Geometric Logo Logo */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="w-14 h-14 grid grid-cols-2 grid-rows-2 border border-[#2A2A2A]/20"
            >
              <div className="border-[0.5px] border-[#2A2A2A]/20 relative flex items-center justify-center p-2">
                 <div className="w-full h-full border-t border-l border-[#2A2A2A]" />
              </div>
              <div className="border-[0.5px] border-[#2A2A2A]/20 relative flex items-center justify-center p-2">
                 <div className="w-full h-full border-t border-r border-[#2A2A2A]" />
              </div>
              <div className="border-[0.5px] border-[#2A2A2A]/20 relative flex items-center justify-center p-2">
                 <div className="w-full h-full border-b border-l border-[#2A2A2A]" />
              </div>
              <div className="border-[0.5px] border-[#2A2A2A]/20 relative flex items-center justify-center p-2">
                 <div className="w-full h-full border-b border-r border-[#2A2A2A]" />
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="flex flex-col gap-8">
              <div className="overflow-hidden">
                <motion.span 
                  initial={{ opacity: 0, y: "100%" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="block text-[#2A2A2A]/40 tracking-[0.4em] text-[10px] font-sans font-medium"
                >
                  WHY FLORIDA?
                </motion.span>
              </div>

              <div className="overflow-hidden">
                <motion.h2 
                  initial={{ opacity: 0, y: "100%" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="text-4xl md:text-[64px] font-sans font-light leading-[0.95] text-[#2A2A2A] uppercase tracking-[-0.03em]"
                >
                  We shape <br />
                  the essence <br />
                  of living
                </motion.h2>
              </div>

              <div className="overflow-hidden">
                <motion.p 
                  initial={{ opacity: 0, y: "100%" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[#2A2A2A]/60 text-base leading-relaxed max-w-sm mt-1 font-sans font-light"
                >
                  We envision spaces that are not just lived in, but felt — where every element has been curated to inspire connection, serenity, and a profound sense of belonging.
                </motion.p>
              </div>
            </div>

            {/* Button with Liquid Hover */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.button 
                className="group relative w-fit px-12 py-5 bg-[#2A2A2A] text-[#D2C4B1] rounded-full overflow-hidden text-[11px] tracking-[0.25em] font-medium"
              >
                <span className="relative z-10 transition-colors duration-500 group-hover:text-[#2A2A2A]">PROJECTS</span>
                <div className="absolute inset-0 bg-[#D2C4B1] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.76, 0, 0.24, 1]" />
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Right Content: Image - wider and shorter */}
        <div className="w-full md:w-[60%] h-[40vh] md:h-[55vh] mt-10 md:mt-0 relative">
          <motion.div 
            initial={{ clipPath: "inset(0% 0% 0% 100%)", scale: 1.2 }}
            whileInView={{ clipPath: "inset(0% 0% 0% 0%)", scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="w-full h-full relative overflow-hidden"
          >
            <Image 
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop"
              alt="Luxury Villa"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
              priority
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}

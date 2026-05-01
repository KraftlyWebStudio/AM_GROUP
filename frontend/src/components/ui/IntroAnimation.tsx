"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroAnimation({ 
  onComplete, 
  onStartReveal 
}: { 
  onComplete: () => void;
  onStartReveal: () => void;
}) {
  const [isVisible, setIsVisible] = useState(true);
  const [linesMoving, setLinesMoving] = useState(false);

  useEffect(() => {
    // 1. Wait 1 second then start moving lines
    const lineTimer = setTimeout(() => {
      setLinesMoving(true);
    }, 1000);

    // 2. Wait another 0.8 seconds (total 1.8s) then open the gate
    const gateTimer = setTimeout(() => {
      setIsVisible(false);
      onStartReveal(); 
      setTimeout(onComplete, 1400); 
    }, 1800); 

    return () => {
      clearTimeout(lineTimer);
      clearTimeout(gateTimer);
    };
  }, [onComplete, onStartReveal]);

  const panelEase = [0.77, 0, 0.175, 1] as [number, number, number, number]; 
  const lineEase = [0.45, 0, 0.55, 1] as [number, number, number, number];

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key="intro-root"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden pointer-events-none"
        >
          {/* Left Gate Panel */}
          <motion.div
            className="absolute left-0 top-0 w-1/2 h-full bg-[#F5F1E6]"
            initial={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1.2, ease: panelEase }}
          />

          {/* Right Gate Panel */}
          <motion.div
            className="absolute right-0 top-0 w-1/2 h-full bg-[#F5F1E6]"
            initial={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 1.2, ease: panelEase }}
          />

          {/* Elements Container */}
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            {/* Left Side Line - Moves DOWN */}
            <motion.div
              className="absolute left-[10vw] top-0 w-[2px] bg-black"
              initial={{ height: "100vh", y: 0 }}
              animate={linesMoving ? { y: "100vh" } : { y: 0 }}
              transition={{ duration: 1.2, ease: lineEase }}
            />

            {/* Right Side Line - Moves UP */}
            <motion.div
              className="absolute right-[10vw] bottom-0 w-[2px] bg-black"
              initial={{ height: "100vh", y: 0 }}
              animate={linesMoving ? { y: "-100vh" } : { y: 0 }}
              transition={{ duration: 1.2, ease: lineEase }}
            />

            {/* Center Lines */}
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] bg-black"
              initial={{ height: "42vh", y: 0 }}
              animate={linesMoving ? { y: "-50vh", opacity: 0 } : { y: 0 }}
              transition={{ duration: 1, ease: lineEase }}
            />
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-black"
              initial={{ height: "42vh", y: 0 }}
              animate={linesMoving ? { y: "50vh", opacity: 0 } : { y: 0 }}
              transition={{ duration: 1, ease: lineEase }}
            />

            {/* Center Logo - Fades out when lines move or gate opens */}
            <motion.div
              className="relative z-10"
              initial={{ opacity: 1, scale: 1 }}
              animate={linesMoving ? { opacity: 0, scale: 0.95 } : { opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="border-2 border-black w-28 h-28 p-4 flex flex-col items-center justify-center font-serif text-black bg-[#F5F1E6]">
                <div className="w-full flex justify-between items-center text-4xl border-b-2 border-black/20 pb-1 tracking-tighter">
                  <span>A</span>
                  <span>M</span>
                </div>
                <div className="w-full flex justify-between items-center text-[10px] pt-2 tracking-[0.5em] font-sans font-bold">
                  <span>G</span>
                  <span>R</span>
                  <span>O</span>
                  <span>U</span>
                  <span>P</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
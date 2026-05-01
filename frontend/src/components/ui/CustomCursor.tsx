"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 50, stiffness: 1000 }; 
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Only expand on elements with data-cursor-expand="true"
      const interactive = target.closest('[data-cursor-expand="true"]');
      
      if (interactive) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handleHoverState);
    window.addEventListener("mouseout", handleHoverState);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHoverState);
      window.removeEventListener("mouseout", handleHoverState);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 border-[1px] border-white/60 mix-blend-difference rounded-full pointer-events-none z-[9999]"
      animate={{ 
        width: isHovered ? 120 : 20,
        height: isHovered ? 120 : 20,
        opacity: isHovered ? 0.5 : 1,
      }}
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)", // Faded sides effect
      }}
      transition={{
        width: { type: "tween", ease: "linear", duration: 0.1 },
        height: { type: "tween", ease: "linear", duration: 0.1 },
      }}
    />
  );
}

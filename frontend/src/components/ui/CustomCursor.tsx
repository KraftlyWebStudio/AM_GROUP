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
      const interactive = target.closest('button, a, [data-hover="true"]');
      
      if (interactive && !interactive.hasAttribute('data-cursor-ignore')) {
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
      className="fixed top-0 left-0 border-[2px] border-[#F5F1E6]/10 rounded-full pointer-events-none z-[9999]"
      animate={{ 
        width: isHovered ? 150 : 20,
        height: isHovered ? 150 : 20,
      }}
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
      }}
      transition={{
        width: { type: "tween", ease: "linear", duration: 0.1 },
        height: { type: "tween", ease: "linear", duration: 0.1 },
      }}
    />
  );
}

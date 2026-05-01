"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 50, stiffness: 1000 }; // Ultra-smooth and fast
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, [data-hover="true"]');
      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 border-[0.4px] border-[#F5F1E6]/40 rounded-full pointer-events-none z-[9999]"
      animate={{ 
        width: isHovered ? 150 : 8,
        height: isHovered ? 150 : 8,
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

"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isTouch =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches;
      if (isTouch) {
        setIsTouchDevice(true);
        return;
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest("[data-cursor]") as HTMLElement | null;

      if (interactiveEl) {
        const text = interactiveEl.getAttribute("data-cursor") || "VIEW →";
        setCursorText(text);
        setIsHovered(true);
      } else {
        setCursorText("");
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Primary Small Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#00F0FF] rounded-full"
        animate={{
          x: position.x - 3,
          y: position.y - 3,
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: "spring", damping: 35, stiffness: 500, mass: 0.1 }}
      />

      {/* Minimal Hover Badge */}
      {isHovered && cursorText && (
        <motion.div
          className="fixed top-0 left-0 px-3 py-1 bg-[#040507]/90 border border-white/10 text-[#F2F4F8] text-[9px] font-mono tracking-widest uppercase whitespace-nowrap pointer-events-none"
          animate={{
            x: position.x + 12,
            y: position.y + 12,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 350 }}
        >
          {cursorText}
        </motion.div>
      )}
    </div>
  );
}


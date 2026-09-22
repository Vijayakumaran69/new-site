"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [statusText, setStatusText] = useState("INITIALIZING SECURITY ENVIRONMENT");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1000;
    const intervalTime = 30;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setStatusText("SYSTEM READY");
          setTimeout(() => {
            onComplete();
          }, 250);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#040507] text-[#F2F4F8] p-8 md:p-12 pointer-events-auto"
      >
        <div className="w-full flex items-center justify-between text-[10px] tracking-[0.3em] text-[#525E70] font-mono uppercase">
          <span>XENCLAVIS SECURITY</span>
          <span>ENTERPRISE INTELLIGENCE</span>
        </div>

        <div className="flex flex-col items-center justify-center text-center max-w-sm w-full my-auto space-y-6">
          {/* Subtle Animated Logo Reveal */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-24 h-24 mx-auto mb-2"
          >
            <Image
              src="/xenclavis-logo.png"
              alt="Xenclavis Official Logo"
              fill
              sizes="96px"
              priority
              className="object-contain"
            />
            {/* Subtle glowing ring surrounding official logo */}
            <div className="absolute -inset-2 rounded-full border border-[#00F0FF]/30 animate-pulse pointer-events-none" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-3xl md:text-4xl font-extrabold tracking-[0.35em] font-display text-[#F2F4F8]"
          >
            XENCLAVIS
          </motion.h1>

          <p className="text-[11px] font-mono tracking-[0.25em] text-[#8E9BAE] uppercase h-4">
            {statusText}
          </p>

          <div className="w-full h-[2px] bg-white/10 relative overflow-hidden rounded-full">
            <motion.div
              className="absolute top-0 left-0 bottom-0 bg-[#00F0FF]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="w-full flex items-center justify-between text-[10px] font-mono text-[#525E70] uppercase tracking-[0.25em]">
          <span>ZERO TRUST</span>
          <span>{Math.round(progress)}%</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

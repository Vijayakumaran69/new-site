"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface HeroOverlayProps {
  onOpenContact: () => void;
}

export default function HeroOverlay({ onOpenContact }: HeroOverlayProps) {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between px-6 md:px-16 pt-36 pb-14 z-10 pointer-events-none">
      {/* Grid Layout: Text on Left Column */}
      <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full max-w-7xl">
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-extrabold font-display tracking-tight text-[#F2F4F8] leading-[0.92] mb-8 uppercase">
              SECURE. <br />
              INNOVATE. <br />
              <span className="text-[#38BDF8]">EDUCATE.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl sm:text-2xl text-[#CBD5E1] font-light max-w-2xl leading-relaxed mb-10"
          >
            XENCLAVIS delivers cybersecurity services, intelligent technology solutions, and industry-focused education to help organizations stay secure and empower the next generation of technology professionals.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-5 pointer-events-auto"
          >
            <Link
              href="/cybersecurity"
              prefetch={true}
              className="btn-editorial-primary group"
            >
              <span className="mr-2">Explore Cybersecurity</span>
              <ArrowRight className="w-4 h-4 inline transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/edutech"
              prefetch={true}
              className="btn-editorial-secondary"
            >
              <span>Explore EduTech →</span>
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Reserved Viewport Space */}
        <div className="hidden lg:block lg:col-span-4 min-h-[400px]" />
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="w-full flex items-center justify-between pt-6 border-t border-white/10"
      >
        <Link
          href="/cybersecurity"
          prefetch={true}
          className="flex items-center space-x-2 text-xs font-mono tracking-[0.25em] text-[#94A3B8] hover:text-[#38BDF8] transition-colors uppercase pointer-events-auto group"
        >
          <span>EXPLORE CYBERSECURITY</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#38BDF8]" />
        </Link>

        <div className="text-xs font-mono text-[#94A3B8] uppercase tracking-[0.2em]">
          XENCLAVIS ECOSYSTEM // CONNECTED
        </div>
      </motion.div>
    </section>
  );
}

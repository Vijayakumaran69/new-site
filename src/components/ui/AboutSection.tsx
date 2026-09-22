"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full py-40 px-6 md:px-16 bg-transparent border-t border-white/5 z-10">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="space-y-4 max-w-3xl"
        >
          <span className="text-[10px] font-mono tracking-[0.35em] text-[#525E70] uppercase">
            ABOUT XENCLAVIS
          </span>
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-extrabold font-display tracking-tight text-[#F2F4F8] leading-[0.92] uppercase">
            Building a Secure and Skilled Digital Future
          </h2>
          <p className="text-lg md:text-xl text-[#8E9BAE] font-light leading-relaxed">
            XENCLAVIS is a cybersecurity, technology, and EduTech organization focused on building secure digital environments, intelligent technology solutions, and practical technology talent.
          </p>
        </motion.div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4"
          >
            <span className="text-xs font-mono text-[#38BDF8] tracking-widest uppercase block">
              OUR MISSION
            </span>
            <h3 className="text-3xl font-extrabold font-display text-[#F2F4F8] uppercase">
              Mission
            </h3>
            <p className="text-lg text-[#8E9BAE] font-light leading-relaxed">
              To build a more secure and technologically capable digital ecosystem through cybersecurity, innovation, and education.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4"
          >
            <span className="text-xs font-mono text-[#38BDF8] tracking-widest uppercase block">
              OUR VISION
            </span>
            <h3 className="text-3xl font-extrabold font-display text-[#F2F4F8] uppercase">
              Vision
            </h3>
            <p className="text-lg text-[#8E9BAE] font-light leading-relaxed">
              To become a trusted technology organization connecting cybersecurity, intelligent solutions, and industry-ready education.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

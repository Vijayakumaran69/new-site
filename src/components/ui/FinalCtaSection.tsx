"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface FinalCtaSectionProps {
  onOpenContact: () => void;
}

export default function FinalCtaSection({ onOpenContact }: FinalCtaSectionProps) {
  return (
    <section id="contact" className="relative w-full py-40 px-6 md:px-16 bg-transparent border-t border-white/5 z-10">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-4 max-w-4xl mx-auto"
        >
          <span className="text-[10px] font-mono text-[#525E70] uppercase tracking-[0.35em] block">
            INITIATE ENGAGEMENT
          </span>

          <h2 className="text-5xl sm:text-7xl md:text-8xl font-extrabold font-display tracking-tight text-[#F2F4F8] leading-[0.92] uppercase">
            Let's Build a More Secure Future
          </h2>

          <p className="text-lg md:text-xl text-[#8E9BAE] font-light max-w-3xl mx-auto leading-relaxed">
            Whether you need cybersecurity services, technology solutions, SOC capabilities, AI automation, or industry-focused training, we're ready to discuss your requirements.
          </p>
        </motion.div>

        {/* 3 Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#38BDF8] tracking-widest uppercase block">
                CYBERSECURITY
              </span>
              <h3 className="text-2xl font-bold font-display text-[#F2F4F8] uppercase">
                Need a Security Assessment?
              </h3>
              <p className="text-sm text-[#8E9BAE] font-light leading-relaxed">
                Discuss your security requirements with our team.
              </p>
            </div>
            <button onClick={onOpenContact} className="btn-editorial-primary group w-full text-center justify-center">
              <span className="mr-2">Request Assessment</span>
              <ArrowRight className="w-3.5 h-3.5 inline transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#38BDF8] tracking-widest uppercase block">
                TECHNOLOGY
              </span>
              <h3 className="text-2xl font-bold font-display text-[#F2F4F8] uppercase">
                Have an Automation Challenge?
              </h3>
              <p className="text-sm text-[#8E9BAE] font-light leading-relaxed">
                Explore AI agents, security automation, and technology solutions.
              </p>
            </div>
            <button onClick={onOpenContact} className="btn-editorial-primary group w-full text-center justify-center">
              <span className="mr-2">Discuss Your Project</span>
              <ArrowRight className="w-3.5 h-3.5 inline transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#38BDF8] tracking-widest uppercase block">
                EDUTECH
              </span>
              <h3 className="text-2xl font-bold font-display text-[#F2F4F8] uppercase">
                Looking for Training?
              </h3>
              <p className="text-sm text-[#8E9BAE] font-light leading-relaxed">
                Explore cybersecurity and technology programs for students, professionals, and institutions.
              </p>
            </div>
            <button onClick={onOpenContact} className="btn-editorial-primary group w-full text-center justify-center">
              <span className="mr-2">Explore Programs</span>
              <ArrowRight className="w-3.5 h-3.5 inline transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

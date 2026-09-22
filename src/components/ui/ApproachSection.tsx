"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ApproachSection() {
  const steps = [
    {
      num: "01",
      title: "Understand",
      desc: "Understand the organization's requirements and challenges.",
    },
    {
      num: "02",
      title: "Assess",
      desc: "Identify vulnerabilities, risks, and opportunities.",
    },
    {
      num: "03",
      title: "Build",
      desc: "Develop practical technology and security solutions.",
    },
    {
      num: "04",
      title: "Secure",
      desc: "Protect systems, applications, infrastructure, and data.",
    },
    {
      num: "05",
      title: "Monitor",
      desc: "Continuously monitor threats and security posture.",
    },
    {
      num: "06",
      title: "Improve",
      desc: "Continuously optimize security, technology, and capabilities.",
    },
  ];

  return (
    <section id="approach" className="relative w-full py-40 px-6 md:px-16 bg-transparent border-t border-white/5 z-10">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Header Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="space-y-4 max-w-3xl"
        >
          <span className="text-[10px] font-mono tracking-[0.35em] text-[#525E70] uppercase">
            HOW WE WORK
          </span>
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-extrabold font-display tracking-tight text-[#F2F4F8] leading-[0.93] uppercase">
            Our Approach
          </h2>
          <p className="text-xl text-[#8E9BAE] font-light">
            Understand → Assess → Build → Secure → Monitor → Improve
          </p>
        </motion.div>

        {/* Continuous 6 Step Timeline */}
        <div className="relative border-l border-white/10 pl-8 md:pl-16 space-y-20">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* Node Indicator on Path */}
              <div className="absolute -left-[37px] md:-left-[69px] top-3 w-4 h-4 rounded-full bg-[#040507] border-2 border-[#525E70] group-hover:border-[#38BDF8] group-hover:bg-[#38BDF8] transition-colors" />

              <div className="space-y-2">
                <span className="text-xs font-mono text-[#38BDF8] tracking-widest block">
                  STEP {step.num}
                </span>
                <h3 className="text-3xl sm:text-5xl font-extrabold font-display text-[#F2F4F8] uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="text-lg text-[#8E9BAE] font-light max-w-2xl leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

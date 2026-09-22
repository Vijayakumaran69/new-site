"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhyXenclavis() {
  const points = [
    {
      num: "01",
      title: "End-to-End Security",
      desc: "From vulnerability discovery and penetration testing to continuous monitoring and incident response.",
    },
    {
      num: "02",
      title: "Intelligent Technology",
      desc: "Combine AI, automation, and security technology to improve operational efficiency.",
    },
    {
      num: "03",
      title: "Practical Education",
      desc: "Learn through hands-on labs, real-world scenarios, projects, and industry-oriented programs.",
    },
    {
      num: "04",
      title: "Security + Technology + Education",
      desc: "A connected ecosystem designed to build secure organizations and skilled technology professionals.",
    },
  ];

  return (
    <section className="relative w-full py-40 px-6 md:px-16 bg-transparent border-t border-white/5 z-10">
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
            WHY CHOOSE US
          </span>
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-extrabold font-display tracking-tight text-[#F2F4F8] uppercase leading-[0.92]">
            Why XENCLAVIS?
          </h2>
          <p className="text-xl text-[#38BDF8] font-light">
            Security + Technology + Education
          </p>
        </motion.div>

        {/* 4 Feature Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-6">
          {points.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4 hover:border-[#38BDF8]/40 transition-colors"
            >
              <span className="text-xs font-mono text-[#38BDF8] tracking-widest block">
                {item.num}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#F2F4F8] uppercase tracking-wide">
                {item.title}
              </h3>
              <p className="text-base text-[#8E9BAE] font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

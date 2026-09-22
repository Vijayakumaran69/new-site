"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, Cpu, GraduationCap } from "lucide-react";

interface ThreePillarsSectionProps {
  onOpenContact: () => void;
}

export default function ThreePillarsSection({ onOpenContact }: ThreePillarsSectionProps) {
  const pillars = [
    {
      id: "cybersecurity",
      icon: ShieldCheck,
      badge: "PILLAR 01",
      title: "Cybersecurity",
      heading: "Protect what matters.",
      description:
        "Identify vulnerabilities, strengthen your security posture, monitor threats, and respond to incidents with comprehensive cybersecurity services.",
      cta: "Explore Cybersecurity →",
      href: "/cybersecurity",
    },
    {
      id: "technology",
      icon: Cpu,
      badge: "PILLAR 02",
      title: "Technology",
      heading: "Build smarter. Automate faster.",
      description:
        "Develop intelligent technology solutions, AI agents, security automation, and security operations platforms for real-world challenges.",
      cta: "Discuss Technology →",
      href: "/contact",
    },
    {
      id: "edutech",
      icon: GraduationCap,
      badge: "PILLAR 03",
      title: "EduTech",
      heading: "Learn. Practice. Build.",
      description:
        "Develop practical technology and cybersecurity skills through training, workshops, hands-on labs, and industry programs.",
      cta: "Explore EduTech →",
      href: "/edutech",
    },
  ];

  return (
    <section className="relative w-full py-32 md:py-48 px-6 md:px-16 bg-transparent border-t border-white/5 z-10">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 max-w-3xl"
        >
          <span className="text-xs font-mono text-[#94A3B8] uppercase tracking-[0.3em]">
            OUR THREE PILLARS
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tight text-[#F2F4F8] uppercase leading-[0.95]">
            A CONNECTED <br />
            <span className="text-[#38BDF8]">ECOSYSTEM.</span>
          </h2>
          <p className="text-xl text-[#CBD5E1] font-light leading-relaxed">
            XENCLAVIS connects enterprise security, intelligent technology innovation, and hands-on technical education into one unified ecosystem.
          </p>
        </motion.div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#38BDF8]/40 hover:bg-white/[0.04] transition-all duration-500 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#38BDF8]/10 border border-[#38BDF8]/20 flex items-center justify-center text-[#38BDF8] group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-[#94A3B8] tracking-widest">
                      {pillar.badge}
                    </span>
                  </div>

                  <div className="space-y-3 pt-2">
                    <h3 className="text-2xl font-bold font-display text-[#F2F4F8] uppercase tracking-wide">
                      {pillar.title}
                    </h3>
                    <h4 className="text-xl font-semibold text-[#38BDF8]">
                      {pillar.heading}
                    </h4>
                    <p className="text-base text-[#CBD5E1] font-light leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <div className="pt-8">
                  <Link
                    href={pillar.href}
                    prefetch={true}
                    className="inline-flex items-center text-xs font-mono font-bold tracking-widest text-[#F2F4F8] group-hover:text-[#38BDF8] transition-colors uppercase"
                  >
                    <span>{pillar.cta}</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

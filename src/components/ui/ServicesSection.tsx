"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ServicesSectionProps {
  onOpenContact: () => void;
}

export default function ServicesSection({ onOpenContact }: ServicesSectionProps) {
  const serviceColumns = [
    {
      columnTitle: "Security Testing",
      badge: "COLUMN 01",
      services: [
        {
          title: "Web Security",
          tagline: "Protect your web applications before attackers find their weaknesses.",
          desc: "Protect websites and web applications from vulnerabilities, attacks, and unauthorized access. Our security assessments identify weaknesses across application functionality, authentication, authorization, input validation, configuration, and business logic.",
        },
        {
          title: "Mobile Security",
          tagline: "Comprehensive mobile application security testing.",
          desc: "Secure Android and iOS applications against vulnerabilities, data leakage, and application-level attacks.",
        },
        {
          title: "API Security",
          tagline: "Robust API protection against unauthorized exposure.",
          desc: "Protect APIs from unauthorized access, data exposure, injection attacks, and abuse.",
        },
      ],
    },
    {
      columnTitle: "Infrastructure & Operations",
      badge: "COLUMN 02",
      services: [
        {
          title: "Network Security",
          tagline: "Protect networks, servers, and communication infrastructure.",
          desc: "Identify and mitigate vulnerabilities across networks, servers, devices, and communication infrastructure.",
        },
        {
          title: "Cloud Security",
          tagline: "Secure cloud assets, identities, and configurations.",
          desc: "Secure cloud infrastructure, applications, identities, data, and configurations against cyber threats.",
        },
        {
          title: "Vulnerability Assessment",
          tagline: "Identify and prioritize security weaknesses.",
          desc: "Identify, analyze, and prioritize security weaknesses across systems, applications, networks, and IT assets.",
        },
      ],
    },
    {
      columnTitle: "Security & Intelligence",
      badge: "COLUMN 03",
      services: [
        {
          title: "Penetration Testing",
          tagline: "Simulate real-world attacks before adversaries strike.",
          desc: "Simulate real-world cyberattacks to identify exploitable vulnerabilities before attackers can exploit them.",
        },
        {
          title: "SOC",
          tagline: "Continuous monitoring, detection, and response.",
          desc: "Continuous security monitoring, threat detection, investigation, and incident response to help organizations detect and respond to threats faster.",
        },
        {
          title: "Security Consulting",
          tagline: "GRC, risk management, and security strategy.",
          desc: "Strengthen organizational security through GRC, risk management, policies, compliance, and security strategy.",
        },
      ],
    },
  ];

  const [activeService, setActiveService] = useState<{ title: string; tagline: string; desc: string } | null>(null);

  return (
    <section id="cybersecurity" className="relative w-full py-32 px-6 md:px-16 bg-transparent border-t border-white/5 z-10">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="space-y-4 max-w-3xl"
        >
          <span className="text-xs font-mono tracking-[0.3em] text-[#94A3B8] uppercase block">
            ENTERPRISE CYBERSECURITY SOLUTIONS
          </span>
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-extrabold font-display tracking-tight text-[#F2F4F8] leading-[0.92] uppercase">
            Cybersecurity Services
          </h2>
          <p className="text-xl text-[#CBD5E1] font-light leading-relaxed">
            Identify vulnerabilities, protect critical assets, detect threats, and build a resilient security posture with comprehensive cybersecurity services.
          </p>
          <div className="pt-4">
            <button
              onClick={onOpenContact}
              className="btn-editorial-primary"
            >
              Request Security Assessment
            </button>
          </div>
        </motion.div>

        {/* 3 Column Service Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {serviceColumns.map((col, cIdx) => (
            <motion.div
              key={cIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: cIdx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-8 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <h3 className="text-2xl font-bold font-display text-[#38BDF8] uppercase tracking-wider">
                    {col.columnTitle}
                  </h3>
                  <span className="text-xs font-mono text-[#94A3B8]">
                    {col.badge}
                  </span>
                </div>

                <div className="space-y-6">
                  {col.services.map((item, sIdx) => (
                    <div
                      key={sIdx}
                      onClick={() => setActiveService(item)}
                      className="group p-5 rounded-xl border border-white/5 hover:border-[#38BDF8]/40 hover:bg-white/[0.04] transition-all cursor-pointer space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="text-xl font-bold text-[#F2F4F8] group-hover:text-[#38BDF8] transition-colors uppercase">
                          {item.title}
                        </h4>
                        <ArrowRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#38BDF8] group-hover:translate-x-1 transition-all shrink-0" />
                      </div>
                      <p className="text-sm text-[#CBD5E1] font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {activeService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl p-8 md:p-10 rounded-2xl bg-[#0F172A] border border-white/10 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#38BDF8] tracking-widest uppercase">
                XENCLAVIS SERVICE DETAIL
              </span>
              <h3 className="text-3xl font-extrabold font-display text-[#F2F4F8] uppercase">
                {activeService.title}
              </h3>
              <p className="text-base font-semibold text-[#38BDF8]">
                {activeService.tagline}
              </p>
            </div>
            <p className="text-lg text-[#CBD5E1] font-light leading-relaxed">
              {activeService.desc}
            </p>
            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <button
                onClick={() => setActiveService(null)}
                className="px-6 py-2.5 text-xs font-mono tracking-widest text-[#94A3B8] hover:text-white uppercase transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setActiveService(null);
                  onOpenContact();
                }}
                className="btn-editorial-primary"
              >
                Request Assessment →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

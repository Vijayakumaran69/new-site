"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Terminal, Award, BookOpen, Layers, Check, ArrowRight } from "lucide-react";

interface EduTechSectionProps {
  onOpenContact: () => void;
}

export default function EduTechSection({ onOpenContact }: EduTechSectionProps) {
  const [activeTab, setActiveTab] = useState<"training" | "range" | "ctf" | "remote">("training");

  const cyberTraining = [
    "Ethical Hacking",
    "Web Security",
    "API Security",
    "Network Security",
    "Cloud Security",
    "Vulnerability Assessment",
    "Penetration Testing",
    "SOC Analyst",
    "Digital Forensics",
    "Incident Response",
    "Threat Hunting",
  ];

  const technicalTraining = [
    "Programming",
    "Web Development",
    "Networking",
    "Cloud Computing",
    "DevOps",
    "Artificial Intelligence",
    "Machine Learning",
    "Cybersecurity",
  ];

  const beginnerRange = [
    "Linux Fundamentals",
    "Networking Fundamentals",
    "Windows Fundamentals",
    "Cybersecurity Fundamentals",
    "Basic Reconnaissance",
  ];

  const intermediateRange = [
    "Web Security",
    "API Security",
    "Vulnerability Assessment",
    "Linux Privilege Escalation",
    "Windows Fundamentals",
    "SOC Investigation",
  ];

  const advancedRange = [
    "Advanced Web Exploitation",
    "Active Directory",
    "Threat Hunting",
    "Digital Forensics",
    "Incident Response",
    "Red Team / Blue Team",
  ];

  const ctfCategories = ["Web", "Network", "Linux", "Windows", "OSINT", "Forensics", "Crypto", "SOC"];

  const remoteFlow = ["Login", "Choose Lab", "Start Environment", "Remote VM", "Complete Challenge", "Submit Flag", "Score & Progress"];

  return (
    <section id="edutech" className="relative w-full py-40 px-6 md:px-16 bg-transparent border-t border-white/5 z-10">
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
            PRACTICAL EDUCATION PLATFORM
          </span>
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-extrabold font-display tracking-tight text-[#F2F4F8] leading-[0.92] uppercase">
            Learn. Practice. Build.
          </h2>
          <p className="text-lg md:text-xl text-[#8E9BAE] font-light leading-relaxed">
            Industry-focused technology education designed to transform students and professionals into practical, job-ready technology practitioners.
          </p>
          <div className="pt-4">
            <button onClick={onOpenContact} className="btn-editorial-primary">
              Explore Programs
            </button>
          </div>
        </motion.div>

        {/* Category Navigation Bar */}
        <div className="flex flex-wrap items-center gap-3 border-b border-white/10 pb-6">
          <button
            onClick={() => setActiveTab("training")}
            className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all uppercase ${
              activeTab === "training"
                ? "bg-[#38BDF8] text-[#040507] font-bold"
                : "bg-white/[0.03] text-[#8E9BAE] hover:text-white border border-white/10"
            }`}
          >
            Training & Programs
          </button>
          <button
            onClick={() => setActiveTab("range")}
            className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all uppercase ${
              activeTab === "range"
                ? "bg-[#38BDF8] text-[#040507] font-bold"
                : "bg-white/[0.03] text-[#8E9BAE] hover:text-white border border-white/10"
            }`}
          >
            XENCLAVIS Cyber Range
          </button>
          <button
            onClick={() => setActiveTab("ctf")}
            className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all uppercase ${
              activeTab === "ctf"
                ? "bg-[#38BDF8] text-[#040507] font-bold"
                : "bg-white/[0.03] text-[#8E9BAE] hover:text-white border border-white/10"
            }`}
          >
            CTF Arena
          </button>
          <button
            onClick={() => setActiveTab("remote")}
            className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all uppercase ${
              activeTab === "remote"
                ? "bg-[#38BDF8] text-[#040507] font-bold"
                : "bg-white/[0.03] text-[#8E9BAE] hover:text-white border border-white/10"
            }`}
          >
            Remote Lab Platform
          </button>
        </div>

        {/* Tab 1: Training & Programs */}
        {activeTab === "training" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-6">
              <h3 className="text-2xl font-bold font-display text-[#F2F4F8] uppercase">
                Cybersecurity Training
              </h3>
              <p className="text-sm text-[#8E9BAE] font-light leading-relaxed">
                Develop practical cybersecurity skills through hands-on learning, real-world scenarios, security labs, and industry-oriented training.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-white/10">
                {cyberTraining.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-[#F2F4F8]">
                    <Check className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-6">
              <h3 className="text-2xl font-bold font-display text-[#F2F4F8] uppercase">
                Technical Training
              </h3>
              <p className="text-sm text-[#8E9BAE] font-light leading-relaxed">
                Build strong foundations in modern technologies through practical, project-based learning.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-white/10">
                {technicalTraining.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-[#F2F4F8]">
                    <Check className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Cyber Range */}
        {activeTab === "range" && (
          <div className="space-y-12">
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#38BDF8] uppercase tracking-widest block">
                HANDS-ON SIMULATION
              </span>
              <h3 className="text-4xl font-extrabold font-display text-[#F2F4F8] uppercase">
                Learn by Doing
              </h3>
              <p className="text-base text-[#8E9BAE] font-light max-w-2xl leading-relaxed">
                Practice cybersecurity in realistic, isolated environments through hands-on labs, challenges, simulations, and cyber range exercises.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
                <span className="text-xs font-mono text-[#38BDF8] tracking-widest block">LEVEL 01</span>
                <h4 className="text-xl font-bold text-[#F2F4F8] uppercase">Beginner</h4>
                <div className="space-y-2 pt-2">
                  {beginnerRange.map((item, idx) => (
                    <div key={idx} className="text-xs text-[#8E9BAE] flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
                <span className="text-xs font-mono text-[#38BDF8] tracking-widest block">LEVEL 02</span>
                <h4 className="text-xl font-bold text-[#F2F4F8] uppercase">Intermediate</h4>
                <div className="space-y-2 pt-2">
                  {intermediateRange.map((item, idx) => (
                    <div key={idx} className="text-xs text-[#8E9BAE] flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
                <span className="text-xs font-mono text-[#38BDF8] tracking-widest block">LEVEL 03</span>
                <h4 className="text-xl font-bold text-[#F2F4F8] uppercase">Advanced</h4>
                <div className="space-y-2 pt-2">
                  {advancedRange.map((item, idx) => (
                    <div key={idx} className="text-xs text-[#8E9BAE] flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: CTF Arena */}
        {activeTab === "ctf" && (
          <div className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#38BDF8] uppercase tracking-widest block">
                COMPETITION
              </span>
              <h3 className="text-4xl font-extrabold font-display text-[#F2F4F8] uppercase">
                Learn. Compete. Improve.
              </h3>
              <p className="text-base text-[#8E9BAE] font-light max-w-2xl leading-relaxed">
                Test your cybersecurity skills through practical Capture The Flag challenges and security scenarios.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <span className="text-xs font-mono text-[#525E70] uppercase tracking-widest block">
                CHALLENGE CATEGORIES
              </span>
              <div className="flex flex-wrap items-center gap-3">
                {ctfCategories.map((cat, idx) => (
                  <span key={idx} className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-[#F2F4F8]">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Remote Lab Platform */}
        {activeTab === "remote" && (
          <div className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#38BDF8] uppercase tracking-widest block">
                PLATFORM DIRECTION
              </span>
              <h3 className="text-4xl font-extrabold font-display text-[#F2F4F8] uppercase">
                Launch Your Own Lab Environment
              </h3>
              <p className="text-base text-[#8E9BAE] font-light max-w-2xl leading-relaxed">
                Start isolated cybersecurity environments directly from your browser without installing complex lab infrastructure on your computer.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <span className="text-xs font-mono text-[#525E70] uppercase tracking-widest block">
                LEARNING WORKFLOW
              </span>
              <div className="flex flex-wrap items-center gap-3">
                {remoteFlow.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="px-4 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-[#F2F4F8]">
                      {step}
                    </div>
                    {idx < remoteFlow.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-[#525E70]" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

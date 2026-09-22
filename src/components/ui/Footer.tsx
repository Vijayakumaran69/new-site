"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface FooterProps {
  onOpenContact: () => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
  const cybersecurityLinks = [
    "Web Security",
    "Mobile Security",
    "API Security",
    "Network Security",
    "Cloud Security",
    "Vulnerability Assessment",
    "Penetration Testing",
    "SOC Operations",
    "Security Consulting",
  ];

  const edutechLinks = [
    "Cybersecurity Training",
    "Technical Training",
    "Workshops",
    "Industry Programs",
    "Institutional Solutions",
  ];

  const technologyLinks = [
    "Security Automation",
    "AI & Intelligence Solutions",
    "Custom Platforms",
  ];

  return (
    <footer className="relative w-full py-24 px-6 md:px-16 bg-transparent border-t border-white/5 z-10 text-[#F2F4F8]">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          {/* Logo & Tagline */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-10 h-10 shrink-0">
                <Image
                  src="/xenclavis-logo.png"
                  alt="Xenclavis Official Logo"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <span className="font-display font-extrabold text-3xl tracking-[0.25em] text-[#F2F4F8] block">
                XENCLAVIS
              </span>
            </Link>
            <p className="text-sm font-mono text-[#38BDF8] uppercase tracking-wider">
              Secure. Innovate. Educate.
            </p>
            <p className="text-xs text-[#8E9BAE] font-light leading-relaxed max-w-sm">
              Enterprise cybersecurity, intelligent technology solutions, and hands-on technical education.
            </p>
          </div>

          {/* Cybersecurity Column */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs text-[#8E9BAE]">
            <Link href="/cybersecurity" className="text-[10px] text-[#525E70] uppercase tracking-widest block mb-4 hover:text-[#38BDF8]">
              CYBERSECURITY
            </Link>
            <ul className="space-y-2">
              {cybersecurityLinks.map((item, idx) => (
                <li key={idx}>
                  <Link href="/cybersecurity" className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology & EduTech Column */}
          <div className="md:col-span-3 space-y-6 font-mono text-xs text-[#8E9BAE]">
            <div className="space-y-3">
              <Link href="/edutech" className="text-[10px] text-[#525E70] uppercase tracking-widest block mb-2 hover:text-[#38BDF8]">
                EDUTECH
              </Link>
              <ul className="space-y-2">
                {edutechLinks.map((item, idx) => (
                  <li key={idx}>
                    <Link href="/edutech" className="hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-[10px] text-[#525E70] uppercase tracking-widest block mb-2">
                TECHNOLOGY SERVICES
              </span>
              <ul className="space-y-2">
                {technologyLinks.map((item, idx) => (
                  <li key={idx}>
                    <Link href="/contact" className="hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Company Column */}
          <div className="md:col-span-2 space-y-3 font-mono text-xs text-[#8E9BAE]">
            <span className="text-[10px] text-[#525E70] uppercase tracking-widest block mb-4">COMPANY</span>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#38BDF8] transition-colors uppercase font-bold block pt-1">
                  Contact →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-[#525E70] tracking-widest gap-4 uppercase">
          <div className="flex items-center space-x-6">
            <Link href="/contact" className="hover:text-[#8E9BAE] transition-colors">PRIVACY</Link>
            <Link href="/contact" className="hover:text-[#8E9BAE] transition-colors">TERMS</Link>
          </div>
          <div>© 2026 XENCLAVIS — SECURE. INNOVATE. EDUCATE.</div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  onOpenContact: () => void;
}

export default function Navigation({ onOpenContact }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "CYBERSECURITY", href: "/cybersecurity" },
    { label: "EDUTECH", href: "/edutech" },
    { label: "ABOUT", href: "/about" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#040507]/90 backdrop-blur-md border-b border-white/10 py-4"
            : "bg-transparent py-7"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Brand Brand Identity */}
          <Link
            href="/"
            prefetch={true}
            className="flex items-center space-x-3 group"
          >
            <div className="relative w-9 h-9 shrink-0">
              <Image
                src="/xenclavis-logo.png"
                alt="Xenclavis Official Logo"
                fill
                sizes="36px"
                priority
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="font-display font-extrabold text-xl tracking-[0.25em] text-[#F2F4F8] transition-opacity group-hover:opacity-80">
              XENCLAVIS
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                prefetch={true}
                className="text-xs font-mono font-medium tracking-[0.18em] text-[#CBD5E1] hover:text-[#38BDF8] transition-colors uppercase py-1"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Primary Highlighted Contact CTA Link */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={onOpenContact}
              className="px-5 py-2.5 rounded-full bg-[#38BDF8] text-[#040507] text-xs font-mono font-bold tracking-[0.18em] uppercase hover:bg-white transition-colors"
            >
              Contact →
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[#F2F4F8] hover:text-[#38BDF8] p-2 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-50 bg-[#040507]/98 backdrop-blur-2xl flex flex-col justify-between p-8 lg:hidden"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/5 pb-6">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-3">
                <div className="relative w-9 h-9 shrink-0">
                  <Image
                    src="/xenclavis-logo.png"
                    alt="Xenclavis Official Logo"
                    fill
                    sizes="36px"
                    className="object-contain"
                  />
                </div>
                <span className="font-display font-extrabold text-xl tracking-[0.25em] text-[#F2F4F8]">
                  XENCLAVIS
                </span>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#8E9BAE] hover:text-white p-2"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Large Menu Links */}
            <div className="flex flex-col space-y-6 my-auto overflow-y-auto max-h-[60vh] py-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    prefetch={true}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-display font-bold tracking-wider text-[#F2F4F8] hover:text-[#38BDF8] transition-colors uppercase block"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="pt-6 border-t border-white/5 flex flex-col space-y-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-4 bg-[#38BDF8] text-[#040507] font-mono text-xs tracking-[0.2em] font-bold uppercase text-center hover:bg-white transition-colors block"
              >
                Contact Xenclavis →
              </button>
              <p className="text-xs font-mono text-[#8E9BAE] text-center uppercase tracking-widest">
                XENCLAVIS — SECURE. INNOVATE. EDUCATE.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

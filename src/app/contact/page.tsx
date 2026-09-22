"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import CustomCursor from "@/components/ui/CustomCursor";
import Navigation from "@/components/ui/Navigation";
import FinalCtaSection from "@/components/ui/FinalCtaSection";
import Footer from "@/components/ui/Footer";
import ContactModal from "@/components/ui/ContactModal";

const ContactCanvas = dynamic(
  () => import("@/components/canvas/ContactCanvas"),
  { ssr: false }
);

export default function ContactPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) setScrollProgress(window.scrollY / totalScroll);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#040507] text-[#F2F4F8] overflow-x-hidden">
      <CustomCursor />
      <ContactCanvas scrollProgress={scrollProgress} />
      <Navigation onOpenContact={() => setIsContactOpen(true)} />

      <div className="pt-28">
        <FinalCtaSection onOpenContact={() => setIsContactOpen(true)} />
      </div>

      <Footer onOpenContact={() => setIsContactOpen(true)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </main>
  );
}

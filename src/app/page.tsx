"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import LoadingScreen from "@/components/ui/LoadingScreen";
import CustomCursor from "@/components/ui/CustomCursor";
import Navigation from "@/components/ui/Navigation";
import HeroOverlay from "@/components/ui/HeroOverlay";
import ThreePillarsSection from "@/components/ui/ThreePillarsSection";
import WhyXenclavis from "@/components/ui/WhyXenclavis";
import ApproachSection from "@/components/ui/ApproachSection";
import FinalCtaSection from "@/components/ui/FinalCtaSection";
import Footer from "@/components/ui/Footer";
import ContactModal from "@/components/ui/ContactModal";

// Dynamically import Three.js WebGL HomeCanvas (SSR safe)
const HomeCanvas = dynamic(
  () => import("@/components/canvas/HomeCanvas"),
  { ssr: false }
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openContact = () => setIsContactOpen(true);

  return (
    <main className="relative min-h-screen bg-[#040507] text-[#F2F4F8] overflow-x-hidden selection:bg-[#38BDF8]/30 selection:text-[#38BDF8]">
      {/* Short Branded Loading Screen */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Unique 3D WebGL Home Canvas */}
      <HomeCanvas scrollProgress={scrollProgress} />

      {/* Navigation Header */}
      <Navigation onOpenContact={openContact} />

      {/* --- HERO --- */}
      <HeroOverlay onOpenContact={openContact} />

      {/* --- THREE PILLARS --- */}
      <ThreePillarsSection onOpenContact={openContact} />

      {/* --- WHY XENCLAVIS --- */}
      <WhyXenclavis />

      {/* --- HOW WE WORK --- */}
      <ApproachSection />

      {/* --- CONTACT & CTA --- */}
      <FinalCtaSection onOpenContact={openContact} />

      {/* --- FOOTER --- */}
      <Footer onOpenContact={openContact} />

      {/* Full-Screen Contact Experience */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </main>
  );
}

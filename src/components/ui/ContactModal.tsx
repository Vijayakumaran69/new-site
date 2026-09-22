"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    message: "",
  });
  const [selectedTargets, setSelectedTargets] = useState<string[]>([]);
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const targetOptions = [
    "WEB APPLICATION",
    "MOBILE APPLICATION",
    "API",
    "NETWORK",
    "SOURCE CODE",
    "CLOUD INFRASTRUCTURE",
    "MULTIPLE SYSTEMS",
    "NOT SURE",
  ];

  const needOptions = [
    "VAPT",
    "WEB SECURITY",
    "MOBILE SECURITY",
    "API SECURITY",
    "NETWORK SECURITY",
    "SOURCE CODE REVIEW",
    "DIGITAL FORENSICS",
    "SECURITY CONSULTING",
  ];

  const toggleSelection = (list: string[], item: string, setList: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (list.includes(item)) {
      setList(list.filter((i) => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-[#040507]/98 backdrop-blur-2xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#080a0f] border border-white/10 p-8 md:p-16 text-[#F2F4F8]"
        >
          {/* Close Control */}
          <button
            onClick={onClose}
            className="absolute top-8 right-8 text-[#8E9BAE] hover:text-white p-2 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {isSubmitted ? (
            <div className="py-20 text-center space-y-8">
              <span className="text-xs font-mono text-[#00F0FF] tracking-widest uppercase block">
                CONFIRMATION
              </span>
              <h2 className="text-5xl font-extrabold font-display text-[#F2F4F8] uppercase">
                THANK YOU.
              </h2>
              <p className="text-xl text-[#8E9BAE] font-light max-w-md mx-auto leading-relaxed">
                Your request has been received. Our security team will contact you shortly.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="btn-editorial-primary mt-6"
              >
                <span>RETURN TO SITE</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-12">
              <div>
                <span className="text-[10px] font-mono tracking-[0.35em] text-[#525E70] uppercase block mb-3">
                  INITIATE ENGAGEMENT
                </span>
                <h2 className="text-4xl md:text-6xl font-extrabold font-display text-[#F2F4F8] tracking-tight uppercase leading-none">
                  LET'S SECURE IT.
                </h2>
              </div>

              {/* Form Input Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-mono text-[#525E70] uppercase tracking-widest mb-2">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-0 py-3 bg-transparent border-b border-white/10 text-[#F2F4F8] font-mono text-sm focus:border-[#00F0FF] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#525E70] uppercase tracking-widest mb-2">
                    WORK EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full px-0 py-3 bg-transparent border-b border-white/10 text-[#F2F4F8] font-mono text-sm focus:border-[#00F0FF] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#525E70] uppercase tracking-widest mb-2">
                    COMPANY
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Acme Corp"
                    className="w-full px-0 py-3 bg-transparent border-b border-white/10 text-[#F2F4F8] font-mono text-sm focus:border-[#00F0FF] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#525E70] uppercase tracking-widest mb-2">
                    WEBSITE
                  </label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="https://company.com"
                    className="w-full px-0 py-3 bg-transparent border-b border-white/10 text-[#F2F4F8] font-mono text-sm focus:border-[#00F0FF] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* WHAT NEEDS TO BE SECURED */}
              <div>
                <label className="block text-xs font-mono text-[#525E70] uppercase tracking-widest mb-4">
                  WHAT NEEDS TO BE SECURED?
                </label>
                <div className="flex flex-wrap gap-3">
                  {targetOptions.map((target) => {
                    const isSelected = selectedTargets.includes(target);
                    return (
                      <button
                        type="button"
                        key={target}
                        onClick={() => toggleSelection(selectedTargets, target, setSelectedTargets)}
                        className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all border ${
                          isSelected
                            ? "bg-[#F2F4F8] text-[#040507] border-[#F2F4F8] font-bold"
                            : "bg-transparent text-[#8E9BAE] border-white/10 hover:border-white/30"
                        }`}
                      >
                        {target}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* WHAT DO YOU NEED */}
              <div>
                <label className="block text-xs font-mono text-[#525E70] uppercase tracking-widest mb-4">
                  WHAT DO YOU NEED?
                </label>
                <div className="flex flex-wrap gap-3">
                  {needOptions.map((need) => {
                    const isSelected = selectedNeeds.includes(need);
                    return (
                      <button
                        type="button"
                        key={need}
                        onClick={() => toggleSelection(selectedNeeds, need, setSelectedNeeds)}
                        className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all border ${
                          isSelected
                            ? "bg-[#00F0FF] text-[#040507] border-[#00F0FF] font-bold"
                            : "bg-transparent text-[#8E9BAE] border-white/10 hover:border-white/30"
                        }`}
                      >
                        {need}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* TELL US MORE */}
              <div>
                <label className="block text-xs font-mono text-[#525E70] uppercase tracking-widest mb-2">
                  TELL US MORE
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your security requirements..."
                  className="w-full px-0 py-3 bg-transparent border-b border-white/10 text-[#F2F4F8] font-mono text-sm focus:border-[#00F0FF] focus:outline-none transition-colors"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-6 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-editorial-primary group w-full sm:w-auto"
                >
                  <span className="mr-2">{isSubmitting ? "TRANSMITTING..." : "SUBMIT REQUEST"}</span>
                  <ArrowRight className="w-3.5 h-3.5 inline transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}


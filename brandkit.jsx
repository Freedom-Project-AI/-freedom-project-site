// BrandKit.jsx
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export const BrandKit = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.6]);

  return (
    <section className="bg-neutral-900 text-white min-h-screen px-6 py-20">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        style={{ scale, opacity }}
      >
        <Image 
          src="/logo.png"
          alt="The Freedom Project Logo"
          width={160}
          height={160}
          className="mx-auto mb-6"
        />
        <h1 className="text-5xl font-extrabold tracking-tight mb-2">
          The Freedom Project
        </h1>
        <p className="text-xl tracking-wide text-slate-300">
          Automate. Elevate. Dominate.
        </p>
      </motion.div>
    </section>
  );
};

// HeroSection.jsx
export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 text-white min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Empowering SMBs with AI Automation
      </h1>
      <p className="max-w-xl text-lg md:text-xl text-slate-300 mb-6">
        Save time. Slash inefficiencies. Grow with purpose. We build tools for the builders.
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg transition">
        Start for Free
      </button>
    </section>
  );
};

// Color palette and typography notes (to be added in brand kit docs)
/*
  COLORS
  - Primary: #2563eb (blue-600)
  - Accent: #38bdf8 (sky-400)
  - Neutral Dark: #0f172a (slate-900)
  - Text Light: #e2e8f0
  - Text Dark: #1e293b

  TYPOGRAPHY
  - Headlines: Space Grotesk or League Spartan
  - Body: Inter, DM Sans, or Satoshi

  BUTTONS
  - Full-rounded, high contrast, subtle shadow
*/
